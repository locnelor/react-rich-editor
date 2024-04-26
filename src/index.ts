import { EditorState } from "draft-js"
export type BaseProps<T = any> = {
    editorState: EditorState,
    onChange: (editorState: EditorState) => void
} & T

export type {
    RichEditorProps,
    RichEditorType
} from "./RichEditor"
export { default as RichEditor } from "./RichEditor"
export {
    RichEditorDefaultContext,
    RichEditorConsumer,
    RichEditorProvider,
    RichEditorContext
} from "./libs/provider"

export { default as useEditorState } from "./hooks/useEditorState"
export { default as useLanguage } from "./hooks/useLanguage"
export { default as useInline, setInline, inlineKeys } from "./hooks/useInline"
export { default as useCurrentStyle, useCurrentColor } from "./hooks/useCurrentStyle"

export type { InlineKeys } from "./hooks/useInline"

export { default as UiButton } from "./components/UiButton"


import OpenRithEditor from "./OpenRithEditor"
export default OpenRithEditor

