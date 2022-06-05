import { styled } from "stitches.config";
import { Button as AriaButton } from "ariakit";
import {  violet } from "@radix-ui/colors";

const Button = styled(AriaButton, {
    display: 'flex',
    height: '30px',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    'white-space': 'nowrap',
    'border-radius': '0.5rem',
    'border-style': 'none',
    backgroundColor: violet.violet11,
    'padding-left': '1rem',
    'padding-right': '1rem',
    'font-size': '1rem',
    'line-height': '1.5rem',
    'color': 'hsl(0, 0%, 100%)',
    "&:hover": {
        backgroundColor: violet.violet10
    }
})

export default Button;