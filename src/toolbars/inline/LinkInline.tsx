import React from "react"
import UiButton from "react-open-rich-editor/components/UiButton"
import UiPopover from "react-open-rich-editor/components/UiPopover"


const LinkInline = () => {

    return (
        <UiPopover
            trigger={(
                <UiButton>
                    添加链接
                </UiButton>
            )}
        >

        </UiPopover>
    )
}
export default LinkInline