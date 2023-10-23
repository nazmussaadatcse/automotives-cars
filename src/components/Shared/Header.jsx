import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';


const Header = () => {
    const [user, setuser] = useState(null);


    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/addproduct"}>Add Product</NavLink></li>
        <li><NavLink to={"/login"}>Login</NavLink></li>
        <li><NavLink to={"/cart"}>Cart</NavLink></li>
    </>
    return (


        <div className="navbar my-4 py-4 shadow-md">
             <img className="lg:flex justify-center items-center w-40 hidden" src="https://i.ibb.co/jLMfjbx/Ivory-Black-Luxury-Minimalist-Personal-Name-Logo-removebg-preview.png" alt="" />
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
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <div className="flex justify-center items-center border rounded-full px-2">
                <p className="font-semibold">{user?.displayName}</p>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 flex rounded-full">
                        <img src={user?.photoURL? user.photoURL : <BiUserCircle></BiUserCircle>} />
                    </div>
                </label>
                </div>
                {
                    user ?
                        <button className="btn rounded-md btn-sm">SignOut</button> :
                        <div className='flex justify-center items-center gap-2'>

                            <Link to={"/login"}>
                                <button className="btn hover:bg-purple-950 rounded-md btn-sm text-red-700 font-bold">Login</button>
                            </Link>
                            
                        </div>

                }
            </div>
            <img className="flex justify-center items-center w-40 lg:hidden" src="https://i.ibb.co/jLMfjbx/Ivory-Black-Luxury-Minimalist-Personal-Name-Logo-removebg-preview.png" alt="" />
        </div>
    );
};

export default Header;