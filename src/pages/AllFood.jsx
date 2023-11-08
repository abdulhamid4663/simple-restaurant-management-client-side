import { useEffect, useState } from "react";
import FoodItem from "../components/FoodItem";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useCategories from "../hooks/useCategories";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const AllFood = () => {
    const axios = useAxios();
    const { data } = useCategories();
    const [foodCategory, setFoodCategory] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [filterValue, setFilterValue] = useState("");
    const [countFoods, setCountFoods] = useState(0)
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9
    const foodPages = Math.ceil(countFoods / itemsPerPage);
    const pages = [...Array(foodPages).keys()];
    
    useEffect(() => {
        axios.get('/foodsCount')
        .then(res => {
            setCountFoods(res.data.count)
        })
        .catch(error => {
            console.log(error.message);
        });
    }, [axios]);
    
    const getFoods = async () => {
        const res = await axios.get(`/foods?category=${foodCategory}&search=${searchValue}&filter=${filterValue}&page=${currentPage}`)
        return res
    }
    
    const { data: foods, isLoading, isError, error } = useQuery({
        queryKey: ["food", foodCategory, searchValue, filterValue, currentPage],
        queryFn: getFoods
    })
    
    const handleCategories = category => {
        setFoodCategory(category)
        setCountFoods(foods?.data?.length)
        setCurrentPage(0)
        setSearchValue('')
    }

    if (isError) {
        toast.error(error)
    }

    const handleSearch = e => {
        e.preventDefault();
        setSearchValue(e.target.search.value)
        setCountFoods(foods?.data?.length);
        setCurrentPage(0)
    }

    const handleFilter = e => {
        setFilterValue(e.target.value)
    }

    return (
        <div>
            <Helmet>
                <title>AL-AMAL || All Foods</title>
            </Helmet>
            <div className="h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/3rSVL0q/image-6.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white uppercase border-b-4 pb-2 border-white">All Foods</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 my-[120px]">
                <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-4 gap-6">
                    <div className="lg:col-span-2 xl:col-span-1">
                        <div className="bg-red-50 rounded-xl py-[50px] px-4 lg:pl-8 sticky top-24">
                            <form onSubmit={handleSearch} className="">
                                <input type="text" name="search" placeholder="Search..." className="input input-bordered w-full" />
                                <button className="btn btn-accent mt-4">Search</button>
                            </form>
                            <div className="mt-6 mb-10">
                                <label className="label">
                                    <span className="label-text">Filter:</span>
                                </label>
                                <select onChange={handleFilter} defaultValue={'Choose one to filter'} className="select w-full">
                                    <option disabled>Choose one to filter</option>
                                    <option value="desc" >High to Low</option>
                                    <option value="asc">Low to High</option>
                                </select>
                            </div>
                            <h2 className="text-[30px] text-[#414549] font-medium">Categories</h2>
                            <dir>
                                {
                                    data?.data?.map(category =>
                                        <div key={category._id} className="flex items-center gap-2">
                                            <IoIosCheckmarkCircle className="text-[#E32F22]" />
                                            <button onClick={() => handleCategories(category.category)} className="block text-sm font-bold text-[#414549] mb-1 hover:text-[#E32F22] transition-all ease-in-out">
                                                {category.category}
                                            </button>
                                        </div>
                                    )
                                }
                            </dir>
                        </div>
                    </div>
                    <div className="flex flex-col lg:col-span-3">
                        {
                            isLoading ?
                                <div className="h-[200px] flex items-center justify-center">
                                    <span className="loading loading-spinner loading-lg"></span>
                                </div>
                                :
                                <div className="flex-grow">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {
                                            foods?.data?.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem} />)
                                        }
                                    </div>
                                </div>
                        }
                        <div className="flex justify-end gap-2 mt-8">
                            {
                                pages.map(page => <button onClick={() => setCurrentPage(page)} key={page} className="btn bg-red-100">{page + 1}</button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFood;