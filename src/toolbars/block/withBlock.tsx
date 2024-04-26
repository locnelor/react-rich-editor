import React from "react";
import { useCallback } from "react";
import { BaseProps, UiButton, useLanguage } from "react-open-rich-editor"
import useBlock, { BlockKeys, setBlock } from "react-open-rich-editor/hooks/useBlock"
import useIcon from "react-open-rich-editor/hooks/useIcon";



const withBlock = (block: BlockKeys) => {
    const Block = ({
        editorState,
        onChange
    }: BaseProps) => {
        const { } = useLanguage();
        const check = useBlock(editorState, block);
        const icon = useIcon(block)
        const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            onChange(setBlock(editorState, block))
        }, [editorState, onChange])
        return (
            <UiButton
                onMouseDown={onMouseDown}
                check={check}
                title={block}
            >
                {icon}
            </UiButton>
        )
    }
    return Block
}
export default withBlock