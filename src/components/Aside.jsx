import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Aside = () => {
    const axios = useAxios();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("/categories")
            .then(res => {
                setCategories(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [axios])

    console.log(categories);
    return (
        <div className="bg-base-200 rounded-xl py-[50px] px-4 lg:pl-8">
            <h2 className="text-[30px] text-[#414549] font-medium">Categories</h2>
            <dir>
                {
                    categories.map(category =>
                        <div key={category._id} className="flex items-center gap-2">
                            <IoIosCheckmarkCircle className="text-[#E32F22]" />
                            <button className="block text-sm font-bold text-[#414549] mb-1 hover:text-[#E32F22] transition-all ease-in-out sticky top-52">
                                {category.category}
                            </button>
                        </div>
                    )
                }
            </dir>
        </div>
    );
};

export default Aside;