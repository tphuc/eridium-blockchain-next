import { gray, violet } from "@radix-ui/colors"
import Link from "next/link"
import { styled } from "stitches.config"
import truncateMiddle from "truncate-middle"


const Container = styled('div', {
    display: "grid",
    gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",
    padding: ".5rem",
    marginBottom: 2,
    background: gray.gray1,
    borderRadius: 10,
    border: `1px solid ${gray.gray4}`,
    transition: "0.2s ease all",
    cursor: "default",
    '&:hover': {
        background: gray.gray2
    }
})


const truncate = (text) => {
    return truncateMiddle(text || '', 10, 5, '...')
}


export function Block({ data }) {
    return <Container>
        <div>Bx: <Link href='/'>{data.number?.toString()}</Link></div>
        <div>Miner: <Link href='/'>{truncate(data?.miningData?.toAddress)}</Link></div>
        <div>
            <span style={{ fontSize: "small", color: violet.violet12 }}>{new Date(data.timestamp).toLocaleString()}</span>
        </div>
        <div style={{fontSize:"small"}}>
            Reward: <span style={{ fontSize: "small", color: violet.violet11 }}>{data?.miningData?.amount}</span>
        </div>

    </Container>
}