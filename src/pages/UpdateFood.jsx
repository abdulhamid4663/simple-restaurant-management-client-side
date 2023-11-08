import { BiDollar } from "react-icons/bi";
import { BsCardImage, BsGlobeAmericas } from "react-icons/bs";
import { FaBowlFood } from "react-icons/fa6";
import { HiOutlineInboxIn } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { MdFastfood } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const UpdateFood = () => {
    const { user } = useAuth();
    const axios = useAxios();
    const { id } = useParams();

    const { data, isFetching } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const res = await axios.get(`/foods/${id}`)
            return res;
        }
    });

    const [addedPhoto, setAddedPhoto] = useState(data?.data?.image);
    const handlePhotoUrl = (e) => {
        setAddedPhoto(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.options.value;
        const image = form.image.value;
        const price = form.price.value;
        const madeBy = form.madeBy.value;
        const origin = form.origin.value;
        const ingredients = form.ingredients.value;
        const procedure = form.procedure.value;
        const quantity = form.quantity.value;

        const ingredientsArray = ingredients.split(",")

        const updatedFood = {
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

        axios.put(`/foods/${id}`, updatedFood)
            .then(res => {
                console.log(res.data);
                toast.success("Your food has been updated successfully");
            })
            .catch(error => {
                toast.error(error.message)
            })

    };

    return (
        <div>
            <Helmet>
                <title>AL-AMAL || Update Food</title>
            </Helmet>
            <div className="h-[220px] md:h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/3rSVL0q/image-6.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
                    <h2 className="text-3xl text-center font-medium text-red-100 uppercase mb-6">-- Update a Food --</h2>
                </div>
            </div>
            <div className="my-[120px]">
                <form onSubmit={handleSubmit} className="card-body max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <div className="h-[250px] lg:h-[350px] border">
                            <img src={addedPhoto ? addedPhoto : data?.data?.image} className="w-full h-full object-contain" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <BsCardImage className="text-2xl" />
                                </div>
                                <input onChange={handlePhotoUrl} defaultValue={data?.data?.image} type="text" name="image" placeholder="ex: chicken-burger.png" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
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
                                <input type="text" name="name" defaultValue={data?.data?.name} placeholder="ex: chicken-burger" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category:</span>
                            </label>
                            {
                                isFetching ? ""
                                    :
                                    <select name="options" defaultValue={data?.data?.category} className="select rounded-none py-2 px-5 w-full bg-transparent">
                                        <option disabled>Pick one category</option>
                                        <option value="Salads">Salads</option>
                                        <option value="Taco">Taco</option>
                                        <option value="Pizza">Pizza</option>
                                        <option value="Soups">Soups</option>
                                        <option value="Burgers">Burgers</option>
                                        <option value="Pasta">Pasta</option>
                                        <option value="Sushi">Sushi</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Desserts">Desserts</option>
                                    </select>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity:</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <HiOutlineInboxIn className="text-2xl" />
                                </div>
                                <input type="text" name="quantity" defaultValue={data?.data?.quantity} placeholder="ex: 10" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
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
                                <input type="text" name="price" defaultValue={data?.data?.price} placeholder="ex: $14.64" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
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
                                <input type="text" name="origin" defaultValue={data?.data?.origin} placeholder="ex: Italy" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
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
                                <input type="text" name="ingredients" defaultValue={data?.data?.ingredients} placeholder="ex: tomato,potato,lemon" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Procedure:</span>
                            </label>
                            <textarea className="textarea border" defaultValue={data?.data?.procedure} name="procedure" placeholder="ex: tomato mixed with garlic." required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-base-300 rounded-none">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;