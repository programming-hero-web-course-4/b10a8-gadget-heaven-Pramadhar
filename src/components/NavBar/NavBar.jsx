import { NavLink, useLocation } from "react-router-dom";


const NavBar = () => {

    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive
                ? "border-b-2 border-white text-white bg-transparent"
                : "text-white bg-transparent hover:bg-transparent focus:bg-transparent"
        }>home</NavLink></li>
        <li><NavLink to="/statics"
            className={({ isActive }) =>
                isActive
                    ? "border-b-2 border-white text-white bg-transparent"
                    : "text-white bg-transparent hover:bg-transparent focus:bg-transparent"
            }
        >statics</NavLink> </li>
        <li><NavLink to="/dashboard" className={({ isActive }) =>
            isActive
                ? "border-b-2 border-white text-white bg-transparent"
                : "text-white bg-transparent hover:bg-transparent focus:bg-transparent"
        }>Dashboard</NavLink> </li>

    </>
    return (
        <div className="bg-purple-500 text-white space-y-32 rounded-lg">
        <div className="navbar max-w-6xl mx-auto flex justify-between items-center py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
        </div>
    );
};

export default NavBar;