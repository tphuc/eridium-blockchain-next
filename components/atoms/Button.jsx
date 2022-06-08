import { styled } from "stitches.config";
import { Button as AriaButton } from "ariakit";
import {  grayA, violet } from "@radix-ui/colors";

const Button = styled(AriaButton, {
    display: 'flex',
    height: '35px',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    'white-space': 'nowrap',
    'border-radius': '12px',
    'border-style': 'none',
    transition:"0.24s ease all",
    fontWeight:300,
    backgroundColor: violet.violet11,
    'padding-left': '1rem',
    'padding-right': '1rem',
    'font-size': '1rem',
    'line-height': '1.5rem',
    'color': 'hsl(0, 0%, 100%)',
    '&:focus':{
        outline:"none",
        boxShadow:`0px 0px 0px 2px ${grayA.grayA7}`
    },
    "&:hover": {
        backgroundColor: violet.violet10
    }
})

export default Button;