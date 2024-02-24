import useSWR from "swr";
import fetcher from '@/lib/fetcher';

const useDataHook = () => {
    // const { data, error, isLoading } = useSWR('/api/movies', fetcher, {
    // const { data, error, isLoading };
    



    
    return {
        data,
        error,
        isLoading
    }
}

export default useDataHook;