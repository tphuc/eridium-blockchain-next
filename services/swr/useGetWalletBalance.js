

import { axiosInstance } from 'axios.config'
import useSWR from 'swr'



const fetcher = async (url, address) => {
    let res = await axiosInstance.get(url, {
   
        params: { address } 
        
    })
    return res?.data
}


export function useGetWalletBalance(address) {
    const { data, error, mutate } = useSWR(address ? ['/wallet-balance', address]:null, fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
