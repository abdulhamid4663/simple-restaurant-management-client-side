import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="bg-[#F2F2F2] pt-20 pb-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div className="">
                    <p className="text-sm font-normal text-center md:text-right text-[#9A9A9A]">Chicago, IL<br />
                        60606 123, New Lenox</p>
                </div>
                <div className="">
                    <Link to="/" className="normal-case text-xl flex items-center gap-2 md:gap-2 ">
                        <img src="https://i.ibb.co/0nf0pL8/unnamed-removebg1-preview.png" alt="Logo" className="w-20 lg:w-24 p-4 lg:p-2" />
                        <div>
                            <h1 className="lobster-font text-[#E32F22] font-bold text-xl lg:text-3xl py-0 my-0">Al-Amal</h1>
                            <span className="text-sm lg:text-base font-bold text-gray-500 tracking-[3px]">Restaurant</span>
                        </div>
                    </Link>
                </div>
                <div className="">
                    <p className="text-sm font-normal text-center md:text-start text-[#9A9A9A]">Call us 24/7<br />
                        <strong className="text-lg flex items-center gap-2"><IoIosCall className="text-red-300 text-xl lg:text-2xl" /> <span className="font-bold hover:text-[#E32F22] transition-all cursor-pointer ease-linear">094 711 80 58</span></strong></p>
                </div>
            </div>
            <div className="grid grid-flow-col order-2 gap-4 justify-center pt-10">
                <a className="w-10 h-10 bg-white rounded-full flex justify-center items-center hover:text-[#E32F22] cursor-pointer transition-all ease-linear">
                    <BiLogoTwitter className="text-2xl"/>
                </a>
                <a className="w-10 h-10 bg-white rounded-full flex justify-center items-center hover:text-[#E32F22] cursor-pointer transition-all ease-linear">
                    <BiLogoFacebook className="text-2xl"/>
                </a>
                <a className="w-10 h-10 bg-white rounded-full flex justify-center items-center hover:text-[#E32F22] cursor-pointer transition-all ease-linear">
                    <BiLogoInstagram className="text-2xl"/>
                </a>
            </div>
            <div className="text-center">
                <p className="pt-20 text-[#9A9A9A] text-sm">Al-Amal &copy; 2023. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;