import truncateMiddle from "truncate-middle"


export const truncate = (text) => {
    return truncateMiddle(text || '', 20, 5, '...')
}
