import { mauve, violet } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import { EditorState, Modifier } from "draft-js";
import React, { useCallback, useState } from "react"
import { BaseProps } from "react-open-rich-editor";
import UiButton from "react-open-rich-editor/components/UiButton"
import UiPopover from "react-open-rich-editor/components/UiPopover"

const Text = styled('p', {
    margin: 0,
    color: mauve.mauve12,
    fontSize: 15,
    lineHeight: '19px',
    fontWeight: 500,
});
const Input = styled('input', {
    all: 'unset',
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
    borderRadius: 4,
    padding: '0 10px',
    fontSize: 13,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 0 0 1px ${violet.violet7}`,
    height: 25,
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Fieldset = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
});

const Label = styled('label', {
    fontSize: 13,
    color: violet.violet11,
    width: 75,
});
const Flex = styled('div', { display: 'flex' });
const LinkInline = ({
    editorState,
    onChange
}: BaseProps) => {
    const [href, setHref] = useState("");
    const [description, setDescription] = useState("");
    const onFinish = useCallback(() => {
        const selection = editorState.getSelection();
        const entityKey = editorState
            .getCurrentContent()
            .createEntity("LINK", "MUTABLE", { href })
            .getLastCreatedEntityKey()
        const contentState = Modifier.replaceText(
            editorState.getCurrentContent(),
            selection,
            (description || href) as string,
            editorState.getCurrentInlineStyle(),
            entityKey
        )
        onChange(EditorState.push(editorState, contentState, "insert-characters"));
    }, [href, description, editorState, onChange])
    return (
        <UiPopover
            trigger={(
                <UiButton>
                    添加链接
                </UiButton>
            )}
        >
            <Flex css={{ flexDirection: 'column', gap: 10 }}>
                <Text css={{ marginBottom: 10 }}>添加链接</Text>
                <Fieldset>
                    <Label htmlFor="width">链接地址</Label>
                    <Input value={href} onChange={({ target: { value } }) => setHref(value)} />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="maxWidth">描述</Label>
                    <Input value={description} onChange={({ target: { value } }) => setDescription(value)} />
                </Fieldset>
                <Fieldset>
                    <UiButton onClick={onFinish}>添加</UiButton>
                </Fieldset>
            </Flex>

        </UiPopover>
    )
}
export default LinkInline