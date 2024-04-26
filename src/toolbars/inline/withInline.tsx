import { EditorState } from "draft-js"
import React, { useCallback } from "react"
import { BaseProps, UiButton, setInline } from "react-open-rich-editor"
import { useLanguage } from "react-open-rich-editor"
import { useInline } from "react-open-rich-editor"
import useIcon from "react-open-rich-editor/hooks/useIcon"
import { InlineKeys } from "react-open-rich-editor"



const WithInline = (style: InlineKeys) => {
    const Inline = ({
        editorState,
        onChange,
    }: BaseProps) => {
        const { inline } = useLanguage();
        const check = useInline(editorState, style);
        const icon = useIcon(style)
        const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            onChange(setInline(editorState, style))
        }, [editorState, onChange])
        return (
            <UiButton
                onMouseDown={onMouseDown}
                check={check}
                title={inline[style]}
            >
                {icon}
            </UiButton>
        )
    }
    return Inline
}
export default WithInline