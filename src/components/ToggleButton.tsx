import { ToolbarToggleGroup, ToolbarToggleItem, ToolbarToggleItemProps } from "@radix-ui/react-toolbar";
import { EditorState } from "draft-js";
import { forwardRef } from "react";
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
export const ToggleGroupButton = ToolbarToggleGroup
export type ToggleButtonEditorPtops = {
    editorState: EditorState,
    onChange: (editorState: EditorState) => void,
    checkClassName?: string,
    className?: string,
    check?: boolean,
    onMouseDown?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    title?: string
}
export type ToggleButtonProps = ToolbarToggleItemProps &
    React.RefAttributes<HTMLButtonElement>
export type ToggleButtonType = typeof ToggleButton
const ToggleButton = forwardRef<
    HTMLButtonElement,
    ToggleButtonProps
>(({
    title,
    ...props
}, ref) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <ToolbarToggleItem
                        ref={ref}
                        {...props}
                    />
                </TooltipTrigger>
                <TooltipPortal>
                    <TooltipContent
                        className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                        sideOffset={5}
                    >
                        {title}
                    </TooltipContent>
                </TooltipPortal>
            </Tooltip>
        </TooltipProvider>

    )
})
export default ToggleButton