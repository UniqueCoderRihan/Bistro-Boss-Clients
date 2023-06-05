import { useQuery } from "@tanstack/react-query";
import { FaRecycle, FaRegTrashAlt, FaUserShield, FaUsers } from 'react-icons/fa'
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const AllUsers = () => {
    const [axiosSecure]= useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        console.log('clicked');
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
        // hey Dev! Please note. Don't Forget to give , OtherWays You may felt error.
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch();
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Login Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleRemove = id => {

    }

    return (
        <div>
            <h2 className="text-center font-semibold text-3xl">Total Users: {users.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr className="bg-[#D1A054]">
                                <th className="bg-[#D1A054]"></th>
                                <th className="bg-[#D1A054]">Name</th>
                                <th className="bg-[#D1A054]">Email</th>
                                <th className="bg-[#D1A054]">Role</th>
                                <th className="bg-[#D1A054]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td> <button onClick={() => handleMakeAdmin(user)} className="text-2xl bg-[#D1A054] btn">
                                            {
                                                user.role === 'admin' ? 'admin' :
                                                    <FaUserShield></FaUserShield>
                                            }
                                        </button> </td>
                                        <td> <button onClick={() => handleRemove(user._id)} className="bg-red-800 text-white btn text-2xl"><FaRegTrashAlt></FaRegTrashAlt> </button> </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;