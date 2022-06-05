import WithNav from "layouts/WithNav";
import { useGetBlockchain } from "services/swr/useGetBlocks";



export default function Blocks(){


    const {data: blocks} = useGetBlockchain()

    return <div>
        <h2>All Blocks</h2>
        {blocks?.map((block, id) => <Block key={block.hash} data={block} />)}
    </div>
}





Blocks.getLayout = (page) => <WithNav>{page}</WithNav>