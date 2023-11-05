import Aside from "../components/aside";


const AllFood = () => {
    return (
        <div>
            <div className="h-[320px] relative mb-[120px]">
                <img src="https://i.ibb.co/vwpF3VF/image-4.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <h1 className="text-5xl font-medium text-white uppercase border-b-4 pb-2 border-white">All Foods</h1>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-1">
                        <Aside />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFood;