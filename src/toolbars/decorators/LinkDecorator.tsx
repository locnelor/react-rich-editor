
import { styled } from "@stitches/react";
import React from "react";
import withDecorator from "react-open-rich-editor/libs/withDecorator";

const StyledLink = styled("a", {
    color: "#3f51bf",
    cursor: "pointer"
})
const LinkDecorator = withDecorator(({
    contentState,
    children,
    entityKey
}) => {
    const { href, ...rest } = contentState.getEntity(entityKey).getData();
    return (
        <StyledLink
            href={href}
            {...rest}
            target="_blank"
            title="link"
        >
            {children}
        </StyledLink>
    )
}, (block, callback, contentState) => {
    block.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === 'LINK'
            );
        }, (...arr) => {
            callback(...arr)
        }
    );
})
export default LinkDecorator