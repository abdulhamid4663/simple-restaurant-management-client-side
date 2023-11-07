import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import useAxios from "../hooks/useAxios";
import { HiOutlineInboxIn } from "react-icons/hi";
import { BiDollar } from "react-icons/bi";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const AddFood = () => {
    const [addedPhoto, setAddedPhoto] = useState('');
    const [optionValue, setOptionValue] = useState('');
    const axios = useAxios();
    const { user } = useAuth();

    const handlePhotoUrl = (e) => {
        setAddedPhoto(e.target.value)
    };

    const handleOptions = e => {
        setOptionValue(e.target.value)
    };

    const { data } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axios.get("/categories")
            return res;
        }
    });

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = optionValue;
        const image = form.image.value;
        const price = form.price.value;
        const madeBy = form.madeBy.value;
        const origin = form.origin.value;
        const ingredients = form.ingredients.value;
        const procedure = form.procedure.value;
        const quantity = form.quantity.value;

        const ingredientsArray = ingredients.split(",")

        const addedFood = {
            name,
            category,
            image,
            price,
            madeBy,
            origin,
            ingredients: ingredientsArray,
            procedure,
            quantity,
        }

        axios.post("/foods", addedFood)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success("Your food has been added successfully");
                }
            })
            .catch(error => {
                toast.error(error.message)
            })

    };

    return (
        <div>
            <div className="h-[220px] md:h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/3rSVL0q/image-6.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
                    <h2 className="text-3xl text-center font-medium text-red-100 uppercase mb-6">-- Add NEW Food --</h2>
                </div>
            </div>
            <div className="my-[120px]">
                <form onSubmit={handleSubmit} className="card-body max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <div className="h-[250px] lg:h-[350px] border">
                            {
                                addedPhoto ?
                                    <img src={addedPhoto} className="w-full h-full object-contain" />
                                    :
                                    <div className="h-[250px] lg:h-[350px] flex items-center justify-center">

                                        <span className="text-sm font-bold text-slate-400">Add a Photo link in Photo Url</span>
                                    </div>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <BsCardImage className="text-2xl" />
                                </div>
                                <input onChange={handlePhotoUrl} type="text" name="image" placeholder="ex: chicken-burger.png" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name:</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <FaBowlFood className="text-2xl" />
                                </div>
                                <input type="text" name="name" placeholder="ex: chicken-burger" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category:</span>
                            </label>
                            <select onChange={handleOptions} defaultValue={`Pick one category`} className="select rounded-none py-2 px-5 w-full bg-transparent">
                                <option disabled>Pick one category</option>
                                {
                                    data?.data?.map(category => <option key={category._id} defaultValue={category.category}>{category.category}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity:</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <HiOutlineInboxIn className="text-2xl" />
                                </div>
                                <input type="text" name="quantity" placeholder="ex: 10" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <BiDollar className="text-2xl" />
                                </div>
                                <input type="text" name="price" placeholder="ex: $14.64" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email:</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <IoMdMail className="text-2xl" />
                                </div>
                                <input type="email" name="madeBy" defaultValue={user ? user?.email : ""} disabled placeholder="ex: example@email.com" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Origin:</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <BsGlobeAmericas className="text-2xl" />
                                </div>
                                <input type="text" name="origin" placeholder="ex: Italy" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ingredients:</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <MdFastfood className="text-2xl" />
                                </div>
                                <input type="text" name="ingredients" placeholder="ex: tomato,potato,lemon" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Procedure:</span>
                            </label>
                            <textarea className="textarea border" name="procedure" placeholder="ex: tomato mixed with garlic." required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-base-300 rounded-none">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;