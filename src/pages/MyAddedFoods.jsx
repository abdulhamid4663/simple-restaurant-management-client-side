import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import MyFoodCard from "../components/MyFoodCard";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const MyAddedFoods = () => {
    const { user } = useAuth();
    const axios = useAxios();

    const { data, isFetching, isError, error, refetch } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const res = await axios.get(`/allFoods?email=${user?.email}`)
            return res;
        }
    });

    if(isError) {
        toast.error(error)
        return;
    }

    return (
        <div>
            <Helmet>
                <title>AL-AMAL || My Added Foods</title>
            </Helmet>
            <div className="h-[220px] md:h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/3rSVL0q/image-6.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
                    <h2 className="text-3xl text-center font-medium text-red-100 uppercase mb-6">-- My Added Foods --</h2>
                </div>
            </div>
            <div className="container mx-auto px-4 my-[120px]">
                <div className="w-full">
                    {
                        isFetching ?
                            <div className="h-[200px] flex items-center justify-center">
                                <span className="loading loading-spinner loading-lg"></span>
                            </div>
                            :
                            <div className="grid grid-cols-1 gap-6">
                                {
                                    data?.data?.map(foodItem => <MyFoodCard key={foodItem._id} myFood={foodItem} refetch={refetch} />)
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyAddedFoods;