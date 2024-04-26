import { Close } from "@icon-park/react";
import { PopoverClose, PopoverArrow } from "@radix-ui/react-popover";
import { styled } from "@stitches/react";
import { RichUtils } from "draft-js";
import React, { useCallback, useMemo } from "react"
import { BaseProps, UiButton, useCurrentColor } from "react-open-rich-editor"
import UiPopover, { UiPopoverContent, UiPopoverPortal, UiPopoverTrigger } from "react-open-rich-editor/components/UiPopover";
const colorList = [
    [
        "none",
        "0D0016",
        "FE2C24",
        "FF9900",
        "FFD900",
        "A2E043",
        "38D8F0",
        "4DA8EE",
        "956FE7"
    ],
    [
        "F3F3F4",
        "CCCCCC",
        "FEF2F0",
        "FFF5E6",
        "FEFCD8",
        "EDF6E8",
        "E7FAFA",
        "EAF4FC",
        "EFEDF6"
    ],
    [
        "D7D8D9",
        "A5A5A5",
        "FBD4D0",
        "FFD7B9",
        "F9EDA6",
        "D4E9D5",
        "C7E6EA",
        "CBE0F1",
        "DAD5E9"
    ],
    [
        "7B7F82",
        "494949",
        "ED7976",
        "FAA572",
        "E6B223",
        "98C091",
        "79C6CD",
        "6EAAD7",
        "3f51bf"
    ],
    [
        "9C8EC1",
        "333333",
        "BE191C",
        "B95514",
        "AD720D",
        "1C7331",
        "1C7892",
        "1A439C",
        "511B78"
    ]
]

const ColorContainer = styled("div", {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    marginTop: "2px",
    marginBottom: "2px"
})
const ColorItem = styled("div", {
    width: "25px",
    height: "25px;",
    borderRadius: "5px",
    cursor: "pointer"
})
const ColorInline = ({
    editorState,
    onChange,
    type,
    children
}: React.PropsWithChildren<BaseProps<{
    type: string
}>>) => {
    const colors = useCurrentColor(editorState, type);
    const onMouseDown = useCallback((color: string, e: any) => {
        e.preventDefault();
        let state = editorState;
        const styleName = `color-${type}-#${color}`;
        for (const color of colors) state = RichUtils.toggleInlineStyle(state, color)

        if (!!color) state = RichUtils.toggleInlineStyle(state, styleName);
        onChange(state);
    }, [editorState, onChange])

    const backgroundColor = useMemo(() => {
        if (colors.length === 0) return "None";
        return "#" + colors[colors.length - 1].split("-")[2]
    }, [colors])

    return (
        <UiPopover>
            <UiPopoverTrigger>
                <UiButton style={{ backgroundColor }}>
                    {children}
                </UiButton>
            </UiPopoverTrigger>
            <UiPopoverPortal>
                <UiPopoverContent sideOffset={5}>
                    {colorList.map((list, key) => (
                        <ColorContainer key={key}>
                            {list.map((color) => (
                                <ColorItem
                                    key={color}
                                    style={{ background: `#${color}` }}
                                    onMouseDown={onMouseDown.bind(null, color)}
                                />
                            ))}
                        </ColorContainer>
                    ))}
                    <PopoverClose aria-label="Close">
                        <Close />
                    </PopoverClose>
                    <PopoverArrow />
                </UiPopoverContent>
            </UiPopoverPortal>
        </UiPopover>
    )
}
export default ColorInline