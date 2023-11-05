import { useEffect, useState } from "react";
import FoodItem from "../components/FoodItem";
import Aside from "../components/aside";
import useFoods from "../hooks/useFoods";
import useAxios from "../hooks/useAxios";


const AllFood = () => {
    const { data } = useFoods();
    const axios = useAxios();
    const [foodItems, setFoodItems] = useState(null)
    const [filteredFoods, setFilteredFoods] = useState(null)

    useEffect(() => {
        axios.get(`/foods?category=${foodItems}`)
        .then(res => {
            setFilteredFoods(res.data)
            console.log(res.data);
        })
        
    }, [foodItems, axios])

    const handleCategories = category => {
        setFoodItems(category)
    }


    return (
        <div>
            <div className="h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/vwpF3VF/image-4.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <h1 className="text-5xl font-medium text-white uppercase border-b-4 pb-2 border-white">All Foods</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 my-[120px]">
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-1">
                        <Aside handleCategories={handleCategories} />
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-3 gap-6">
                            {
                                foodItems ? <>
                                    {
                                        filteredFoods?.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem} />)
                                    }
                                </>
                                    :
                                    <>
                                        {
                                            data?.data?.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem} />)
                                        }
                                    </>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFood;