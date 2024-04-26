

import { EditorState, RichUtils } from "draft-js"
import { useMemo } from "react";

export type BlockKeys = "header-one" | "header-two" | "header-three" | "blockquote" | "ordered-list-item" | "unordered-list-item"
export const blockKeys = ["header-one", "header-two", "header-three", "blockquote", "ordered-list-item", "unordered-list-item"] as const;

export const setBlock = (editorState: EditorState, blockType: BlockKeys) => {
    return RichUtils.toggleBlockType(editorState, blockType)
}
const useBlock = (editorState: EditorState, style: BlockKeys) => {
    const currentBlockType = useMemo(() => {
        try {
            const selection = editorState.getSelection()
            return editorState.getCurrentContent()
                .getBlockForKey(selection.getStartKey()).getType() === style;
        } catch (e) {
            return false
        }
    }, [editorState])
    return currentBlockType
}
export default useBlock 