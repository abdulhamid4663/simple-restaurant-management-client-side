import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useFoods = () => {
    const axios = useAxios();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const res = await axios.get('/foods')
            return res
        }
    })

    return { data, isLoading, isError };
};

export default useFoods;