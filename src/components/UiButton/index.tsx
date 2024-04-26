import { styled } from "@stitches/react"

const UiButton = styled("div", {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: 'lightgray',
    },
    variants: {
        check: {
            true: {
                color: "#3f51bf"
            }
        }
    }
})

export default UiButton