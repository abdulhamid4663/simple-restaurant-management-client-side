import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import FoodItem from "../components/FoodItem";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";


const FoodItems = () => {
    const { category } = useParams()
    const axios = useAxios()

    const { data, isFetching } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const res = await axios.get(`/foods?category=${category}`)
            return res;
        }
    })

    return (
        <div>
            <Helmet>
                <title>AL-AMAL || {category}</title>
            </Helmet>
            <div className="h-[220px] md:h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/3rSVL0q/image-6.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white uppercase border-b-4 pb-2 border-white">{category}</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 my-[120px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        isFetching ?
                            <div className="h-[200px] flex items-center justify-center">
                                <span className="loading loading-spinner loading-lg"></span>
                            </div>
                            :
                            data?.data?.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodItems;