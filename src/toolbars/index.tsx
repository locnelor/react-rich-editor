import React from "react"
import { BaseProps, inlineKeys } from "react-open-rich-editor"
import WithInline from "./inline/withInline"
import UiLine from "react-open-rich-editor/components/UiLine"
import { styled } from "@stitches/react"
import ColorInline from "./inline/ColorInline"

const Color = (rest: any) => {
    return <ColorInline {...rest} type="color" >color</ColorInline>
}
const BgColor = (rest: any) => {
    return <ColorInline {...rest} type="bg" >bg</ColorInline>
}
const StyledToolbar = styled("div", {
    display: "flex",
    flexWrap: "wrap",
    gap: "2px"
})
const InlineItems = [...inlineKeys.map(key => WithInline(key)), UiLine, Color, BgColor];
//加粗、倾斜、下划线、删除线、标签√
//字体颜色、背景颜色√ 标题、链接
//左对齐、居中对齐、右对齐
//代码、分隔线、图片、表格、数学
const Toolbar = ({
    editorState,
    onChange
}: BaseProps) => {

    return (
        <StyledToolbar>
            {InlineItems.map((Item, key) => (
                <Item
                    key={key}
                    editorState={editorState}
                    onChange={onChange}
                />
            ))}
        </StyledToolbar>
    )
}
export default Toolbar