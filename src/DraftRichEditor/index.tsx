import Draft, { ContentBlock, Editor, EditorState } from "draft-js"
import { CSSProperties, useCallback, useEffect, useMemo, useRef } from "react"
import Immutable from "immutable"

const HeaderOneWrapper = (props: any) => {
    const ref = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        const id = props.type + "_" + props["data-offset-key"].split("-")[0]
        if (ref.current) ref.current.id = id;
    }, [props.children]);
    return (
        <h1 ref={ref} style={{ fontWeight: "bold" }} {...props} />
    )
}
const blockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(Immutable.Map({
    "header-one": {
        wrapper: <HeaderOneWrapper type="h1" style={{ fontSize: "34px" }} />
    },
    "header-two": {
        wrapper: <HeaderOneWrapper type="h2" style={{ fontSize: "30px" }} />
    },
    "header-three": {
        wrapper: <HeaderOneWrapper type="h3" style={{ fontSize: "26px" }} />
    }
}))
export type DraftRichEditorProps = {
    onChange: (editorState: EditorState) => void,
    editorState: EditorState,
    readOnly?: boolean
}
const DraftRichEditor = ({
    editorState,
    onChange,
    readOnly = false
}: DraftRichEditorProps) => {
    const ref = useRef<Editor>(null);
    useEffect(() => {
        if (!ref.current) return;
        if (!ref.current.editor) return;
        ref.current.editor.style.minHeight = "200px";
    }, []);
    const customStyleFn = useCallback((
        style: Draft.DraftInlineStyle,
        // block: Draft.ContentBlock
    ) => {
        const arr = style.toList().toArray()
        const result: CSSProperties = {};
        for (const value of arr) {
            const [name, type, color] = value.split("-")
            if (name === "color") {
                if (type === "font") {
                    result.color = color
                } else if (type === "background") {
                    result.backgroundColor = color;
                }
            }
        }
        return result;
    }, [])
    const blockStyleFn = useCallback((block: ContentBlock) => {
        const metaData = block.getData()
        const textAlign = metaData.get('align');
        let classes = [];
        if (!!textAlign) classes.push(`text-${textAlign}`);
        return classes.join(" ");
    }, []);
    const blockRendererFn = useCallback((block: ContentBlock) => {
        const type = block.getType();
        if (type === "atomic") {
            const entityKey = block.getEntityAt(0)
            if (!entityKey) return;
            const currentContent = editorState.getCurrentContent()
            const entity = currentContent.getEntity(entityKey);
            const entityType = entity.getType();
            const method = {
                editable: false,
                props: {
                    readOnly,
                    editorState,
                    onChange
                },
                component: null,
            }
            switch (entityType) {
                default:
                    return;
            }
            return method;
        }
    }, [editorState, readOnly]);
    return (
        <Editor
            ref={ref}
            editorState={editorState}
            onChange={onChange}
            blockRendererFn={blockRendererFn}
            customStyleFn={customStyleFn}
            blockRenderMap={blockRenderMap}
            blockStyleFn={blockStyleFn}
            readOnly={readOnly}
        />
    )
}
export default DraftRichEditor