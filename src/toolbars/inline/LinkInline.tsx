import { mauve, violet } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import React from "react"
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
                    <Input id="width" defaultValue="100%" />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="maxWidth">描述</Label>
                    <Input id="maxWidth" defaultValue="300px" />
                </Fieldset>
                <Fieldset>
                    <UiButton>添加</UiButton>
                </Fieldset>
            </Flex>

        </UiPopover>
    )
}
export default LinkInline