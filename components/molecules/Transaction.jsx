import { gray, violet } from "@radix-ui/colors"
import Link from "next/link"
import { styled } from "stitches.config"
import truncateMiddle from "truncate-middle"


const Container = styled('div', {
    boxSizing:"border-box",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gridTemplateRows: "1fr 1fr",
    gridAutoFlow: "column",
    alignContent:"end",
    gridRowGap: 0,
    padding: ".5rem",
    marginBottom: 2,
    background: gray.gray1,
    borderRadius: 10,
    border: `1px solid ${gray.gray4}`,
    transition: "0.2s ease all",
    cursor: "default",
    '&:hover': {
        background: gray.gray2
    },
   
    "@mobile":{
        gridAutoFlow:"row"
    },
    "@bp1":{
        gridAutoFlow:"column"
    },
})


const truncate = (text) => {
    return truncateMiddle(text || '', 10, 5, '...')
}


export function Transaction({ data }) {
    return <Container>
        <div>Tx: <Link href={`/transaction/${data?.hash}`}>{truncate(data?.hash)}</Link></div>
        <div>
            <span style={{ fontSize: "small", color: violet.violet12 }}>{new Date(data?.timestamp).toLocaleString()}</span>
        </div>

        <div>From: <Link href={`/address/${data.fromAddress}`}>{truncate(data?.fromAddress)}</Link></div>
        <div>To: <Link  href={`/address/${data.toAddress}`}>{truncate(data?.toAddress)}</Link></div>

        <div style={{ fontSize: "small", whiteSpace: "nowrap" }}>
            Amount: <span style={{ fontSize: "small", color: violet.violet11 }}> {data?.amount}</span>
        </div>

    </Container>
}