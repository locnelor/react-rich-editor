import { ToolbarToggleGroup, ToolbarToggleItem, ToolbarToggleItemProps } from "@radix-ui/react-toolbar";
import { EditorState } from "draft-js";
import { forwardRef } from "react";

export const ToggleGroupButton = ToolbarToggleGroup
export type ToggleButtonEditorPtops = {
    editorState: EditorState,
    onChange: (editorState: EditorState) => void,
    checkClassName?: string,
    className?: string,
    check?: boolean,
    onMouseDown?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export type ToggleButtonProps = ToolbarToggleItemProps &
    React.RefAttributes<HTMLButtonElement>
export type ToggleButtonType = typeof ToggleButton
const ToggleButton = forwardRef<
    HTMLButtonElement,
    ToggleButtonProps
>(({
    ...props
}, ref) => {
    return (
        <ToolbarToggleItem
            ref={ref}
            {...props}
        />
    )
})
export default ToggleButton