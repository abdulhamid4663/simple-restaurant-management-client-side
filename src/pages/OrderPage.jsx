import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";

const OrderPage = () => {
    const { id } = useParams()
    const axios = useAxios();
    const [foodItem, setFoodItem] = useState({})
    const { name, image, price, quantity } = foodItem;
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`/foods/${id}`)
            .then(res => {
                setFoodItem(res.data)
            })
    }, [axios, id])

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const itemPrice = form.price.value;
        const foodQuantity = form.quantity.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const date = form.date.value;

        const foodQuantityInt = Number.parseInt(foodQuantity);

        if (foodQuantityInt > quantity) {
            toast.error(`Sorry, There are only ${quantity} items are available.`)
            return;
        }

        const totalPrice = price * foodQuantityInt;

        const orderedFood = {
            foodName,
            itemPrice,
            quantity: foodQuantity,
            userName,
            email,
            date,
            totalPrice
        };

    }

    return (
        <div>
            <div className="h-[220px] md:h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/3rSVL0q/image-6.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
                    <h2 className="text-3xl text-center font-medium text-red-100 uppercase mb-6">-- Order Food --</h2>
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
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Name:</span>
                                    </label>
                                    <input type="text" name="foodName" disabled defaultValue={name} placeholder="Food Name" className="pl-6" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price:</span>
                                    </label>
                                    <input type="text" name="price" disabled defaultValue={price ? "$" + price : ""} placeholder="Price" className="pl-6" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity:</span>
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input type="text" name="quantity" defaultValue={1} placeholder="Add Quantity" className="input input-bordered pl-6 rounded-none" required />
                                        <span className="text-slate-500">Stock: {quantity}</span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name:</span>
                                    </label>
                                    <input type="text" name="userName" disabled defaultValue={user?.displayName} placeholder="Buyer Name" className="pl-6" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email:</span>
                                    </label>
                                    <input type="email" name="email" disabled defaultValue={user?.email} placeholder="email" className="pl-6" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date:</span>
                                    </label>
                                    <input type="date" name="date" placeholder="Date" className="input input-bordered pl-6 " required />
                                </div>
                                <div className="form-control mt-6">
                                    <div className="relative">
                                        <span className="w-full h-full absolute border-4 border-red-100 -right-2 -bottom-2 z-0"></span>
                                        <button className="py-2 px-8 lg:py-3 lg:px-14 bg-red-100 text-xl lg:text-2xl w-full font-semibold text-[#E32F22] lobster-font relative z-10">Order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;