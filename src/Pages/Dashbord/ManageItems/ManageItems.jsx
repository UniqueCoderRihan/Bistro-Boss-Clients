import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import UseMenu from '../../../hooks/UseMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
const ManageItems = () => {
    const [menu] = UseMenu();
    return (
        <div className='w-full'>
            <SectionTitle heading='Manage Items' subHeading='Hurry Up'></SectionTitle>
            <h2 className='text-3xl font-bold'>Total Items: {menu.length}</h2>
            <div className='px-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((row,index) => <tr>
                                    <th>
                                        {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {row.name}
                                    </td>
                                    <td><p className='text-end'>${row.price}</p></td>
                                    <th>
                                        <button className="btn btn-outline btn-warning">
                                            <FaEdit className='text-2xl'></FaEdit>
                                        </button>
                                    </th>
                                    <th>
                                        <button className="btn btn-outline bg-red-400">
                                            <FaTrashAlt className='text-2xl'></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;