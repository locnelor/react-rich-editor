

import { EditorState, RichUtils } from "draft-js"
import { useMemo } from "react";

export type BlockKeys = "header-one" | "header-two" | "header-three"
export const BlockKeys = ["header-one", "header-two", "header-three"] as const;

export const setInline = (editorState: EditorState, blockType: BlockKeys) => {
    return RichUtils.toggleBlockType(editorState, blockType)
}
const useBlock = (editorState: EditorState, style: BlockKeys) => {
    const currentBlockType = useMemo(() => {
        try {
            const selection = editorState.getSelection()
            return editorState.getCurrentContent()
                .getBlockForKey(selection.getStartKey()).getType();
        } catch (e) {
            return ""
        }
    }, [editorState])
    return currentBlockType
}
export default useBlock 