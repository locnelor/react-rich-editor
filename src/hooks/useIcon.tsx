import { ListNumbers, ListTwo, Quote, Strikethrough, TagOne, TextBold, TextItalic, TextUnderline } from "@icon-park/react"
import React from "react"
const IconMap = {
    "BOLD": <TextBold />,
    "ITALIC": <TextItalic />,
    "UNDERLINE": <TextUnderline />,
    "STRIKETHROUGH": <Strikethrough />,
    "TAG": <TagOne />,
    "header-one": <div>H1</div>,
    "header-two": <div>H2</div>,
    "header-three": <div>H3</div>,
    "blockquote": <Quote />,
    "ordered-list-item": <ListNumbers />,
    "unordered-list-item": <ListTwo />
}

const useIcon = (key: keyof typeof IconMap) => {
    return IconMap[key]
}
export default useIcon