import { gray, violet } from "@radix-ui/colors";
import { Box } from "components/atoms/Box";
import { Transaction } from "components/molecules/Transaction";
import WithNav from "layouts/WithNav";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetBlockById } from "services/swr/useGetBlockById";
import { useGetBlockchain } from "services/swr/useGetBlocks";
import { useGetWalletBalance } from "services/swr/useGetWalletBalance";
import { useGetWalletTransacs } from "services/swr/useGetWalletTransacs";
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

export default function Address(){


    const {id} = useRouter().query
    const {data: balance} = useGetWalletBalance(id)
    const {data: transac} = useGetWalletTransacs(id)

    return <Box css={{color: violet.violet10}}>
        <p>Wallet: {id}</p>
        <h3>Balance: {balance}</h3>
        <p> {transac?.length} transactions</p>
        {transac?.map((item, id) => <Transaction key={item?.hash} data={item} />)}


        
    </Box>
}





Address.getLayout = (page) => <WithNav>{page}</WithNav>