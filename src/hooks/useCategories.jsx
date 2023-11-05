import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useCategories = () => {
    const axios = useAxios();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axios.get('/categories')
            return res
        }
    })
    
    return { data, isLoading, isError }
};

export default useCategories;