import { EditorState, RichUtils } from "draft-js"
import { useMemo } from "react";

export type InlineKeys = "BOLD" | "ITALIC" | "UNDERLINE" | "STRIKETHROUGH" | "TAG"
export const inlineKeys = ['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'TAG'] as const;
export const setInline = (editorState: EditorState, style: InlineKeys) => {
    return RichUtils.toggleInlineStyle(
        editorState,
        style
    )
}
const useInline = (editorState: EditorState, style: InlineKeys) => {
    const currentStyle = useMemo(() => {
        try {
            return editorState.getCurrentInlineStyle().has(style);
        } catch (e) {
            console.log("useInline error:", e);
            return false;
        }
    }, [editorState])
    return currentStyle
}
export default useInline 