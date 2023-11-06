import { useState } from "react";
import FoodItem from "../components/FoodItem";
import Aside from "../components/aside";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const AllFood = () => {
    const axios = useAxios();
    const [foodCategory, setFoodCategory] = useState("")

    const getFoods = async () => {
        const res = await axios.get(`/foods?category=${foodCategory}`)
        return res
    }

    const { data: foods, isLoading } = useQuery({
        queryKey: ["food", foodCategory],
        queryFn: getFoods
    })

    const handleCategories = category => {
        setFoodCategory(category)
    }

    console.log(foods);

    return (
        <div>
            <div className="h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/3rSVL0q/image-6.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white uppercase border-b-4 pb-2 border-white">All Foods</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 my-[120px]">
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-1">
                        <Aside handleCategories={handleCategories} />
                    </div>
                    <div className="col-span-3">
                        {
                            isLoading ?
                                <div className="h-[200px] flex items-center justify-center">
                                    <span className="loading loading-spinner loading-lg"></span>
                                </div>
                                :
                                <div className="grid grid-cols-3 gap-6">
                                    {
                                        foods?.data?.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem} />)
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFood;