import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import { Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemProps, SelectItemText, SelectPortal, SelectProps, SelectTrigger, SelectValue, SelectViewport } from "@radix-ui/react-select"
import { forwardRef } from "react"
import classnames from 'classnames';
export type UiSelectProps = React.PropsWithChildren<{
    name?: string
}>
const UiSelect = ({
    children,
    ...props
}: SelectProps) => {
    return (
        <Select {...props}>
            <SelectTrigger
                className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
                aria-label="Food"
            >
                <SelectValue placeholder="Select a fruit…" />
                <SelectIcon className="text-violet11">
                    <ChevronDownIcon />
                </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
                <SelectContent className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <SelectViewport className="p-[5px]">
                        <SelectGroup>
                            {children}
                        </SelectGroup>
                    </SelectViewport>
                </SelectContent>
            </SelectPortal>
        </Select >
    )
}
export const UiOption = forwardRef<
    HTMLDivElement,
    SelectItemProps & React.RefAttributes<HTMLDivElement>
>(({
    children,
    className,
    ...props
}, forwardedRef) => {
    return (
        <SelectItem
            className={classnames(
                'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <SelectItemText>{children}</SelectItemText>
            <SelectItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon />
            </SelectItemIndicator>
        </SelectItem>
    );
});

export default UiSelect