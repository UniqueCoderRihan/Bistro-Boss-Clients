import React from 'react';
import { FaArrowRight, FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUncharted, FaUser, FaUsers, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import UseCart from '../hooks/UseCart';

const Dashbord = () => {
    const [cart] = UseCart();
    // TODO: Data load from Server Site about Admin role
    const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    {/* Sidebar content here */}
                    {/* TODO: Update the Icon From React Icons */}
                    <h2 className='text-3xl uppercase font-bold'>Bistro Boss</h2>
                    <h2 className='font-sans uppercase font-semibold text-2xl'>R e s t u r e n t</h2>
                    {isAdmin ? <>
                        <li> <NavLink to='/dashbord/userhome'> <FaHome></FaHome> Admin Home </NavLink> </li>
                        <li> <NavLink to='/dashbord/reservations'> <FaBook></FaBook> Manage Bookings </NavLink> </li>
                        <li> <NavLink to='/dashbord/history'> <FaUncharted></FaUncharted> Add Item </NavLink> </li>
                        <li> <NavLink to='/dashbord/history'> <FaArrowRight></FaArrowRight> Manage Items </NavLink> </li>
                        <li> <NavLink to='/dashbord/allusers'> <FaUsers></FaUsers> All Users </NavLink> </li>
                        
                    </> :
                        <>
                            <li> <NavLink to='/dashbord/userhome'> <FaHome></FaHome> User Home </NavLink> </li>
                            <li> <NavLink to='/dashbord/reservations'> <FaCalendarAlt></FaCalendarAlt> Reservations </NavLink> </li>
                            <li> <NavLink to='/dashbord/history'> <FaWallet></FaWallet> Payment History </NavLink> </li>
                            <li> <NavLink to='/dashbord/mycart'> <FaShoppingCart></FaShoppingCart> My Cart <div className="badge badge-secondary">+ {cart.length || 0} </div> </NavLink> </li>
                        </>}

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/'><FaShoppingCart></FaShoppingCart> Order</NavLink></li>
                    <li><NavLink to='/'><FaShoppingCart></FaShoppingCart> Menu</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;