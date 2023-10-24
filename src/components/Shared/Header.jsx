import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';
import { AuthContext } from "../AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import './dark-mode.css';
import DarkModeToggleButton from "../DarkMode/DarkMode";
const Header = () => {
    // const [user, setuser] = useState(null);
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.displayName);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }



    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/addproduct"}>Add Product</NavLink></li>
        <li><NavLink to={"/cart"}>Cart<FaCartPlus className="text-xl"></FaCartPlus> </NavLink></li>
    </>
    return (


        <div className={`navbar gap-1 mb-8 py-4 shadow-md bg-orange-500`}>
            <img className="lg:flex justify-center items-center w-28 md:w-40 " src="https://i.ibb.co/m84FVRj/automotives-logo.png" alt="" />
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden w-96 lg:flex">
                <ul className="menu menu-horizontal ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <div className="flex justify-center text-xs md:text-sm w-auto items-center border rounded-full px-2">
                    <p className="font-semibold">
                        {user?.displayName ? user.displayName.slice(0, 10) : null}
                    </p>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 flex rounded-full">
                            <img src={user?.photoURL ? user.photoURL : <BiUserCircle></BiUserCircle>} />
                        </div>
                    </label>
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn rounded-md btn-sm">SignOut</button> :
                        <div className='flex justify-center items-center gap-2'>

                            <Link to={"/login"}>
                                <button className="btn hover:bg-purple-950 rounded-md btn-sm text-red-700 font-bold">Login</button>
                            </Link>

                        </div>

                }
            </div>
            <img src="" alt="" />  
            <DarkModeToggleButton></DarkModeToggleButton>          
        </div>
    );
};

export default Header;