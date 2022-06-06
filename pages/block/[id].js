import { gray, violet } from "@radix-ui/colors";
import { Box } from "components/atoms/Box";
import WithNav from "layouts/WithNav";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetBlockById } from "services/swr/useGetBlockById";
import { useGetBlockchain } from "services/swr/useGetBlocks";
import { styled } from "stitches.config";
// import { truncate } from "utils";
import truncate from "truncate";
const GridItem = styled('div', {
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
          

            <GridItem variant={'title'}>Block number</GridItem>
            <GridItem>{data?.number}</GridItem>

            <GridItem variant={'title'}>Timestamp</GridItem>
            <GridItem>{new Date(data?.timestamp).toLocaleString()}</GridItem>

            <GridItem variant={'title'}>Mine by</GridItem>
            <GridItem>{data?.miningData?.toAddress}</GridItem>

            <GridItem variant={'title'}>Reward </GridItem>
            <GridItem>{data?.miningData?.amount} Eri</GridItem>

            <GridItem variant={'title'}>Hash</GridItem>
            <GridItem>{data?.hash}</GridItem>

            <GridItem variant={'title'}>Parent hash</GridItem>
            <GridItem>{data?.previousHash}</GridItem>

            <GridItem variant={'title'}>Transactions</GridItem>
            <GridItem >
                <Box css={{background:violet.violet4, display:'inline-block', padding:'5px 10px', borderRadius:'0.5rem', color:violet.violet10}}>
                    <Link href={`/transaction?bx=${data?.number}`}>
                        {`${data?.transactions?.length} transactions`}
                </Link>
                    </Box></GridItem>
        </Box>

        
    </div>
}





BlockID.getLayout = (page) => <WithNav>{page}</WithNav>