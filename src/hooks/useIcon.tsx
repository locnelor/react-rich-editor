import { Strikethrough, TagOne, TextBold, TextItalic, TextUnderline } from "@icon-park/react"
import React from "react"
const inlineIconMap = {
    "BOLD": <TextBold />,
    "ITALIC": <TextItalic />,
    "UNDERLINE": <TextUnderline />,
    "STRIKETHROUGH": <Strikethrough />,
    "TAG": <TagOne />
}

const useIcon = (key: keyof typeof inlineIconMap) => {
    return inlineIconMap[key]
}
export default useIcon