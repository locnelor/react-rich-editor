import { EditorState } from "draft-js"
import { useCallback, useState } from "react"


const useEditorState = () => {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
    const onChange = useCallback((editorState: EditorState) => {
        setEditorState(editorState)
    }, [])
    return [editorState, onChange] as const
}
export default useEditorState