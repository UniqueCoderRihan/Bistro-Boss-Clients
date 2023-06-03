import React from 'react';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li> <Link to='/dashbord/mycart'> <FaHome></FaHome> User Home </Link> </li>
                    <li> <Link to='/dashbord/mycart'> <FaCalendarAlt></FaCalendarAlt> Reservations </Link> </li>
                    <li> <Link to='/dashbord/mycart'> <FaWallet></FaWallet> Payment History </Link> </li>
                    <li> <Link to='/dashbord/mycart'> <FaShoppingCart></FaShoppingCart> My Cart </Link> </li>
                    <div className="divider"></div>
                    <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                    <li><Link to='/'><FaShoppingCart></FaShoppingCart> Order</Link></li>
                    <li><Link to='/'><FaShoppingCart></FaShoppingCart> Menu</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;