import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";


const TopFoods = () => {
    const axios = useAxios();

    const { data, isFetching } = useQuery({
        queryKey: ["food"],
        queryFn: async () => {
            const res = await axios.get("/topFoods");
            return res;
        }
    })

    return (
        <div className="container mx-auto px-4 my-[120px]">
            <h1 className="text-[#E32F22] lobster-font text-4xl md:text-5xl lg:text-6xl text-center">Top Picks of the Menu</h1>
            <p className="text-center max-w-lg mx-auto text-[#9A9A9A] text-sm md:text-base font-medium mt-4">Discover flavor artistry with our top menu picks. Beloved by countless food enthusiasts, find your new obsession today!</p>
            <div className="mt-[50px]">
                {
                    isFetching ?
                        <div className="h-[200px] flex items-center justify-center">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                        :
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    data?.data?.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem} />)
                                }
                            </div>
                            <div className="relative max-w-fit mx-auto mt-10">
                            <span className="w-full h-full absolute border-4 border-red-100 -right-2 -bottom-2 z-0"></span>
                            <Link to="/allFoods">
                                <button className="py-2 px-8 lg:py-3 lg:px-14 bg-red-100 text-xl lg:text-2xl font-semibold text-[#E32F22] lobster-font relative">See More</button>
                            </Link>
                        </div>
                        </>
                }
            </div>
        </div>
    );
};

export default TopFoods;