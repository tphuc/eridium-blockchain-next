import { violet } from "@radix-ui/colors";
import { Block } from "components/molecules/Block";
import WithNav from "layouts/WithNav";
import { useGetBlockchain } from "services/swr/useGetBlocks";



export default function Blocks(){


    const {data: blocks} = useGetBlockchain()

    return  <div>
        <h2 style={{color:violet.violet11}}>All Blocks</h2>
        {blocks?.map((block, id) => <Block key={block.hash} data={block} />)}
    </div>
}





Blocks.getLayout = (page) => <WithNav>{page}</WithNav>