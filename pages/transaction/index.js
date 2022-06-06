import { violet } from "@radix-ui/colors";
import { Block } from "components/molecules/Block";
import { Transaction } from "components/molecules/Transaction";
import WithNav from "layouts/WithNav";
import { useRouter } from "next/router";
import { useGetBlockById } from "services/swr/useGetBlockById";
import { useGetBlockchain } from "services/swr/useGetBlocks";
import { useGetPendingTransactions } from "services/swr/useGetPendingTransactions";



export default function Blocks(){


    const {data} = useGetPendingTransactions()
    const { bx } = useRouter().query
    const {data: blockData} = useGetBlockById(bx)

    if(bx){
        return <div>
            <span style={{color:violet.violet11}}>{blockData?.transactions?.length} transactions found</span>
            <h2 style={{color:violet.violet11}}>All transactions for block {bx}</h2>
        
            {blockData?.transactions?.map((item, id) => <Transaction key={item?.hash} data={item} />)}
        </div>
    }

    return  <div>
        <span style={{color:violet.violet11}}>{data?.length} transactions found</span>
        <h2 style={{color:violet.violet11}}>All transactions</h2>
        
        {data?.map((item, id) => <Transaction key={item?.hash} data={item} />)}
    </div>
}





Blocks.getLayout = (page) => <WithNav>{page}</WithNav>