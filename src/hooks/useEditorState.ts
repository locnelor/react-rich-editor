import { CompositeDecorator, EditorState } from "draft-js"
import { useCallback, useState } from "react"
import LinkDecorator from "react-open-rich-editor/toolbars/decorators/LinkDecorator";


const useEditorState = () => {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty(
        new CompositeDecorator([
            LinkDecorator
        ])
    ));
    const onChange = useCallback((editorState: EditorState) => {
        setEditorState(editorState)
    }, [])
    return [editorState, onChange] as const
}
export default useEditorState