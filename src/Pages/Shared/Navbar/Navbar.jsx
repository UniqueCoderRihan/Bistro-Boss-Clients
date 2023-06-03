import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { AuthContex } from '../../../Providers/AuthProvider';
import UseCart from '../../../hooks/UseCart';

const Navbar = () => {
    const { user, logout } = useContext(AuthContex);
    const [cart] = UseCart();
    const location = useLocation();
    const isLogin = location.pathname.includes('login');
    const handleLogout = () => {
        logout()
    }
    const NavOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li><Link to='/order/salad'>Order</Link></li>
        <li>
            <Link to='/'>
                <button className="btn">
                    <FaCartPlus className=' mr-2'></FaCartPlus>
                    <div className="badge badge-secondary">+ {cart.length ||0} </div>
                </button>
            </Link>
        </li>

        {
            user && <><li><button onClick={handleLogout} className='btn btn-ghost'>Logout</button></li></> || <li><Link to='/login'>Login</Link></li>}
    </>

    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-xl bg-black text-white bg-opacity-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {NavOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">Bistro-Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;