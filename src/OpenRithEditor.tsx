import React from "react"
import { RichEditorDefaultContext, RichEditorProvider } from "./libs/provider"
import Toolbar from "./toolbars"
import RichEditor from "./RichEditor"
import useEditorState from "./hooks/useEditorState"




const OpenRithEditor = () => {
    const [editorState, onChange] = useEditorState()
    return (
        <RichEditorProvider
            value={RichEditorDefaultContext}
        >
            <Toolbar
                editorState={editorState}
                onChange={onChange}
            />
            <RichEditor
                editorState={editorState}
                onChange={onChange}
            />
        </RichEditorProvider>
    )
}
export default OpenRithEditor