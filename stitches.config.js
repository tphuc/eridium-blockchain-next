import { createStitches } from "@stitches/react"


export const { styled, getCssText, keyframes, globalCss } = createStitches({
    media: {
        mobile: '(min-width: 480px)',
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
})