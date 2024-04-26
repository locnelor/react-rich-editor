import { Editor, Modifier, EditorState, ContentBlock } from "draft-js"
import React, { CSSProperties, useCallback, useContext, useEffect, useRef } from "react";
import { RichEditorContext } from "../libs/provider";

export type RichEditorProps = {
    editorState: EditorState,
    onChange: (editorState: EditorState) => void,
    readOnly?: boolean
}
export type RichEditorType = (props: RichEditorProps) => React.JSX.Element

const RichEditor: RichEditorType = ({
    editorState,
    onChange,
    readOnly = false
}) => {
    const {
        styleMap,
        blockRenderMap
    } = useContext(RichEditorContext)
    const editorRef = useRef<Editor>(null);

    useEffect(() => {
        if (!editorRef.current) return;
        if (!editorRef.current.editor) return;
        editorRef.current.editor.style.minHeight = "200px";
        editorRef.current.editor.id = "DraftEditor"
    }, []);

    const onTab = useCallback((e: React.KeyboardEvent<{}>) => {
        e.preventDefault();
        const newContentState = Modifier.replaceText(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            "    "
        );
        onChange(
            EditorState.push(editorState, newContentState, "insert-characters")
        )
    }, [editorState, onChange]);

    const customStyleFn = useCallback((
        style: Draft.DraftInlineStyle
    ) => {
        const arr = style.toList().toArray()
        const result: CSSProperties = {};
        for (const value of arr) {
            const [name, type, color] = value.split("-")
            if (name === "color") {
                if (type === "color") {
                    result.color = color
                } else if (type === "background") {
                    result.backgroundColor = color;
                }
            }
        }
        return result;
    }, [])

    const blockRendererFn = useCallback((block: ContentBlock) => {
        const blockType = block.getType();
        if (blockType === "atomic") {
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
                // case ImageBlockName:
                //     method.component = AtomicBlockImage;
                //     break;
                // case DividerBlockName:
                //     method.component = AtomicBlockDivider;
                //     break;
                // case CodeBlockName:
                //     method.component = AtomicBlockCode;
                //     break;
                // case TableBlockName:
                //     method.component = AtomicBlockTable;
                //     break;
                // case MathBlockName:
                //     method.component = AtomicBlockMath;
                //     break;
                default:
                    return;
            }
            return method;
        }
    }, [editorState, readOnly, onChange]);


    const blockStyleFn = useCallback((block: ContentBlock) => {
        const metaData = block.getData()
        const textAlign = metaData.get('align');
        const classes: any = [];
        if (!!textAlign) classes.push(`text-${textAlign}`);
        return classes.join(" ");
    }, []);

    return (
        <Editor
            editorState={editorState}
            onChange={onChange}
            customStyleMap={styleMap}
            onTab={onTab}
            ref={editorRef}
            blockRendererFn={blockRendererFn}
            customStyleFn={customStyleFn}
            blockRenderMap={blockRenderMap}
            blockStyleFn={blockStyleFn}
            readOnly={readOnly}
        />
    )
}
export default RichEditor