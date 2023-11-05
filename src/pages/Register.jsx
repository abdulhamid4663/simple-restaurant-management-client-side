import { BsCardImage, BsFillPersonFill } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import { IoIosLock, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";


const Register = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="h-[800px] items-center justify-center relative">
            <img src="https://i.ibb.co/8drjmGb/55028613-fast-food-seamless-pattern-hand-drawn-food-background-background-template-for-your-design-v.jpg" alt="" className="w-full h-full object-cover opacity-10 absolute" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="hidden lg:flex max-w-3xl mx-auto my-[120px]">
                    <div className="grid flex-grow card place-items-center">
                        <form onSubmit={handleSubmit} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <div className="flex">
                                    <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                        <BsFillPersonFill className="text-2xl" />
                                    </div>
                                    <input type="text" name="email" placeholder="ex: John Doe" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <div className="flex">
                                    <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                        <IoMdMail className="text-2xl" />
                                    </div>
                                    <input type="email" name="email" placeholder="ex: john@email.com" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <div className="flex">
                                    <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                        <BsCardImage className="text-2xl" />
                                    </div>
                                    <input type="text" name="Photo Url" placeholder="ex: john-doe.png" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">
                                    <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                        <IoIosLock className="text-2xl" />
                                    </div>
                                    <input type="password" name="password" placeholder="ex: 123456" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn rounded-none bg-base-300 ">Register</button>
                            </div>
                        </form>
                        <p className="font-bold text-sm text-center">Already have an account? <Link to="/login" className="text-[#E32F22]">Login</Link></p>
                    </div>
                    <div className="divider divider-horizontal">OR</div>
                    <div className="grid flex-grow items-start">
                        <button className="btn rounded-none flex gap-3 items-center bg-base-300 justify-center py-3">
                            <GrGoogle />
                            Login with Google
                        </button>
                    </div>
                </div>
                {/* Mobile Login Form */}
                <div className="max-w-3xl mx-auto lg:hidden my-[120px]">
                    <div className="grid flex-grow items-start p-8">
                        <button className="btn rounded-none flex gap-3 items-center bg-base-300 justify-center py-3">
                            <GrGoogle />
                            Login with Google
                        </button>
                    </div>
                    <div className="divider divider-vertical px-8">OR</div>
                    <form onSubmit={handleSubmit} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <BsFillPersonFill className="text-2xl" />
                                </div>
                                <input type="text" name="email" placeholder="ex: John Doe" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <IoMdMail className="text-2xl" />
                                </div>
                                <input type="email" name="email" placeholder="ex: john@email.com" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <BsCardImage className="text-2xl" />
                                </div>
                                <input type="text" name="Photo Url" placeholder="ex: john-doe.png" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex">
                                <div className="w-14 h-14 bg-base-200 flex items-center justify-center">
                                    <IoIosLock className="text-2xl" />
                                </div>
                                <input type="password" name="password" placeholder="ex: 123456" className="w-full border-2 py-3 px-5 focus:outline-none active:outline-none" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn rounded-none bg-base-300 ">Register</button>
                        </div>
                    </form>
                    <p className="font-bold text-sm text-center">Already have an account? <Link to="/login" className="text-[#E32F22]">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;