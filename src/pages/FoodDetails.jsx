import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
    const { category, id } = useParams()
    const axios = useAxios();
    const [foodItem, setFoodItem] = useState({})
    const { _id, name, image, price, madeBy, origin, ingredients, procedure } = foodItem;

    useEffect(() => {
        axios.get(`/foods/${id}`)
            .then(res => {
                setFoodItem(res.data)
            })
    }, [axios, id])

    return (
        <div>
            <Helmet>
                <title>AL-AMAL || Food Details</title>
            </Helmet>
            <div className="h-[220px] md:h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/3rSVL0q/image-6.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
                    <h2 className="text-3xl text-center font-medium text-red-100 uppercase mb-6">-- Food Details --</h2>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white uppercase border-b-4 pb-2 border-white max-w-fit mx-auto">{name}</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 my-[120px]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-2">
                            <div className="h-[300px] md:h-[400px] relative">
                                <span className="w-full h-full absolute border-4 rounded-2xl border-red-100 -right-2 -bottom-2 z-0"></span>
                                <img src={image} alt="" className="rounded-2xl w-full h-full object-cover relative" />
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <h1 className="text-4xl text-[#414549] font-medium">{name}</h1>
                            <div className="flex items-center">
                                <h1 className="text-slate-500 text-lg font-medium">Category: </h1>
                                <Link to={`/allFoods/${category}`}>
                                    <h1 className="text-slate-400 text-lg font-medium hover:text-[#E32F22] transition-all max-w-fit ml-1">{category}</h1>
                                </Link>
                            </div>

                            <h2 className="text-slate-500 text-lg font-medium mt-8">Origin: <span className="text-slate-400">{origin}</span></h2>
                            <h3 className="text-slate-500 text-lg font-medium">Ingredients:
                                <span>{ingredients?.map((ingredient, index) =>
                                    <strong className="text-slate-400" key={index}> {ingredient}, </strong>
                                )}
                                </span>
                            </h3>
                            <p className="text-slate-500 font-medium mt-8">Procedure: <span className="text-slate-400">{procedure}</span></p>
                            <p className="text-[#F76F2A] text-3xl font-bold mt-6">${price}</p>

                            <div className="flex items-end justify-between">
                                <div className="relative max-w-fit mt-8">
                                    <span className="w-full h-full absolute border-4 border-red-100 -right-2 -bottom-2 z-0"></span>
                                    <Link to={`/allFoods/${category}/${name}/${_id}`}>
                                        <button className="py-2 px-8 lg:py-3 lg:px-14 bg-red-100 text-xl lg:text-2xl font-semibold text-[#E32F22] lobster-font relative z-10">Order</button>
                                    </Link>
                                </div>
                                <h1 className="text-[#414549] text-sm font-bold">Made By: <span className="text-slate-400">{madeBy}</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;