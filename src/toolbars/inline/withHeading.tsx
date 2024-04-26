import React, { useCallback } from "react"
import { BaseProps, UiButton } from "react-open-rich-editor"


const headingMap = {
    "header-one": "H1",
    "header-two": "H2",
    "header-three": "H3",
}
export type HeadingType = keyof typeof headingMap
const withHeading = (name: HeadingType) => {

    const Heading = ({
        editorState,
        onChange
    }: BaseProps) => {
        const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            onChange()
        }, [editorState, onChange])
        return (
            <UiButton
                onMouseDown={onMouseDown}
            >
                {headingMap[name]}
            </UiButton>
        )
    }
    return Heading
}
export default withHeading