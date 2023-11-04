import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const navLinks = <>
        <NavLink
            to={`/`}
            className={({ isActive }) =>
                isActive
                    ? "text-[#E32F22] transition-all lg:pb-[2px]"
                    : "transition-all ease-in-out text-[#9a9a9a]"
            }
        >
            Home
        </NavLink>
        <span className="h-1 w-1 rounded-full bg-black"></span>
        <NavLink
            to={`/allFoods`}
            className={({ isActive }) =>
                isActive
                    ? "text-[#E32F22] transition-all lg:pb-[2px]"
                    : "transition-all ease-in-out text-[#9a9a9a]"
            }
        >
            All Foods
        </NavLink>
        <span className="h-1 w-1 rounded-full bg-black"></span>
        <NavLink
            to={`/blog`}
            className={({ isActive }) =>
                isActive
                    ? "text-[#E32F22] transition-all lg:pb-[2px]"
                    : "transition-all ease-in-out text-[#9a9a9a]"
            }
        >
            Blog
        </NavLink>
    </>

    return (
        <div className="container mx-auto">

            <div className="navbar bg-base-100 py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    <Link to="/" className="normal-case text-xl flex items-center gap-2 md:gap-2">
                        <img src="https://i.ibb.co/0nf0pL8/unnamed-removebg1-preview.png" alt="Logo" className="w-20 lg:w-24 p-4 lg:p-2 bg-slate-100 rounded-xl" />
                        <div>
                            <h1 className="lobster-font text-[#E32F22] font-bold text-xl lg:text-3xl py-0 my-0">Al-Amal</h1>
                            <span className="text-sm lg:text-base font-bold text-gray-500 tracking-[3px]">Restaurant</span>
                        </div>
                    </Link>

                </div>
                <div className="navbar-end flex gap-8">
                    <div className=" hidden lg:flex">
                        <ul className="flex items-center gap-4 text-lg font-bold">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="relative">
                        <span className="w-full h-full absolute border-4 border-red-100 -right-2 -bottom-2 z-0"></span>
                        <button className="py-2 px-8 lg:py-3 lg:px-14 bg-red-100 text-xl lg:text-2xl font-semibold text-[#E32F22] lobster-font relative z-10">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;