

import { axiosInstance } from 'axios.config'
import useSWR from 'swr'



const fetcher = async (url) => {

    let res = await axiosInstance.get(url)

    return res?.data
}


export function useGetBlockchain() {
    const { data, error, mutate } = useSWR('/blockchain', fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
