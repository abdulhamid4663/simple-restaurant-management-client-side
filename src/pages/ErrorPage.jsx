import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="relative">
            <img src="https://i.ibb.co/8drjmGb/55028613-fast-food-seamless-pattern-hand-drawn-food-background-background-template-for-your-design-v.jpg" alt="" className="w-full h-full object-cover opacity-5 absolute" />
            <div className="flex min-h-screen justify-content items-center relative">

                <div className="w-80 lg:w-96 mx-auto px-4">
                    <div >
                        <img src="https://i.ibb.co/J3VPynn/images-removebg-preview.png" alt="" className="w-full" />
                    </div>
                    <h5 className="font-bold text-sm text-center my-6">{error.statusText} {error.status}</h5>
                    <div>
                        <h1 className="text-gray-500 text-2xl mc:text-3xl lg:text-4xl text-center">Ooopsss, order failed!</h1>
                        <Link to="/">
                            <button className="btn w-full rounded-none mt-6">
                                <HiOutlineArrowNarrowLeft className="text-xl" />
                                Go back to homepage
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;