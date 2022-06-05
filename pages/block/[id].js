import { gray, violet } from "@radix-ui/colors";
import { Box } from "components/atoms/Box";
import WithNav from "layouts/WithNav";
import { useRouter } from "next/router";
import { useGetBlockById } from "services/swr/useGetBlockById";
import { useGetBlockchain } from "services/swr/useGetBlocks";
import { styled } from "stitches.config";
// import { truncate } from "utils";
import truncate from "truncate";
const Span = styled('div', {
    fontSize:"normal",
    display:"block",
    whiteSpace:"normal",
    wordWrap:"break-word",
    color: violet.violet12,
    variants: {
        variant: {
            title: {
                fontWeight:500
            },
            text: {
                fontWeight:300
            }
            
        }
    },
    defaultVariants: {
        variant: 'text'
    }

    
})

export default function BlockID(){


    const {id} = useRouter().query
    const {data} = useGetBlockById(id)
    console.log(data)

    return <div>
        <h2 style={{color:violet.violet11}}>Block #{id}</h2>
        <Box css={{
            display:"grid",
            gridTemplateColumns:"150px minmax(0, 1fr)",
            maxWidth:"100vw",
            gridGap:"10px",
            background: gray.gray1,
            border:`1px solid ${gray.gray4}`,
            padding:"1em",
            borderRadius:10
        }}>
          

            <Span variant={'title'}>Block number</Span>
            <Span>{data?.number}</Span>

            <Span variant={'title'}>Timestamp</Span>
            <Span>{new Date(data?.timestamp).toLocaleString()}</Span>

            <Span variant={'title'}>Mine by</Span>
            <Span>{data?.miningData?.toAddress}</Span>

            <Span variant={'title'}>Reward </Span>
            <Span>{data?.miningData?.amount} Eri</Span>

            <Span variant={'title'}>Hash</Span>
            <Span>{data?.hash}</Span>

            <Span variant={'title'}>Parent hash</Span>
            <Span>{data?.previousHash}</Span>

            <Span variant={'title'}>Transactions</Span>
            <Span>{data?.transactions?.length} transactions</Span>
        </Box>

        
    </div>
}





BlockID.getLayout = (page) => <WithNav>{page}</WithNav>