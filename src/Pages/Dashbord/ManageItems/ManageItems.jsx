import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import UseMenu from '../../../hooks/UseMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
const ManageItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const [menu, loading,refetch] = UseMenu();
    const handleRemove = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log('Deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        else {
                            Swal.fire(
                                'Opps',
                                'Try Again.',
                                'error'
                            )
                        }

                    })
            }
        })
    }
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
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((row, index) => <tr key={row._id}>
                                    <th>
                                        {index + 1}
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
                                        <button onClick={() => handleRemove(row._id)} className="btn btn-outline bg-red-400">
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