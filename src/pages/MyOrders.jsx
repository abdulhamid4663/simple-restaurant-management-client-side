import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import MyOrdersCard from "../components/MyOrdersCard";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const MyOrders = () => {
    const axios = useAxios();
    const { user } = useAuth();

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const res = await axios.get(`/orders?email=${user?.email}`)
            return res;
        }
    });

    if (isError) {
        toast.error(error)
    }

    const handleCancel = (id) => {
        axios.delete(`/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    toast.success("Your Order has been Cancelled Successfully");
                    refetch()
                }
            })
            .catch(error => {
                toast.error(error.message)
            });
    };

    return (
        <div>
            <div className="h-[220px] md:h-[320px] relative mb-[140px]">
                <img src="https://i.ibb.co/3rSVL0q/image-6.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
                    <h2 className="text-3xl text-center font-medium text-red-100 uppercase mb-6">-- My Orders --</h2>
                </div>
            </div>
            <div className="container mx-auto px-4 my-[120px]">
                {
                    isLoading ?
                        <div className="h-[200px] flex items-center justify-center">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                        :
                        <div className="grid grid-cols-1  gap-6">
                            {
                                data?.data?.map(order => <MyOrdersCard key={order._id} order={order} handleCancel={handleCancel} />)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default MyOrders;