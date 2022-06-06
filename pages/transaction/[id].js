import { gray, violet } from "@radix-ui/colors";
import { Box } from "components/atoms/Box";
import WithNav from "layouts/WithNav";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetBlockById } from "services/swr/useGetBlockById";
import { useGetBlockchain } from "services/swr/useGetBlocks";
import { useGetTransactionByHash } from "services/swr/useGetTransactionByHash";
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

export default function TransactionID(){


    const {id} = useRouter().query
    const {data} = useGetTransactionByHash(id)


    return <div>
         <Link href='/'>Go back</Link>
        <h2 style={{color:violet.violet11}}>Transaction #{id}</h2>
       
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
          

            <Span variant={'title'}>Hash </Span>
            <Span>{data?.hash}</Span>

            <Span variant={'title'}>Timestamp</Span>
            <Span>{new Date(data?.timestamp).toLocaleString()}</Span>

            <Span variant={'title'}>From address</Span>
            <Span>{data?.fromAddress}</Span>

            <Span variant={'title'}>To address </Span>
            <Span>{data?.toAddress}</Span>


            <Span variant={'title'}>Amount</Span>
            <Span>{data?.amount}</Span>


        </Box>

        
    </div>
}





TransactionID.getLayout = (page) => <WithNav>{page}</WithNav>