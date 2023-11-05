import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import FoodItem from "../components/FoodItem";


const FoodItems = () => {
    const { category } = useParams()
    const axios = useAxios()
    const [foods, setFoods] = useState([]) 

    useEffect(() => {
        axios.get(`/foods?category=${category}`)
        .then(res => {
            setFoods(res.data)
        })
        
    }, [axios, category])

    return (
        <div>
            <div className="h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/vwpF3VF/image-4.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <h1 className="text-5xl font-medium text-white uppercase border-b-4 pb-2 border-white">{category}</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 my-[120px]">
                <div className="grid grid-cols-4 gap-6">
                    {
                        foods?.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodItems;