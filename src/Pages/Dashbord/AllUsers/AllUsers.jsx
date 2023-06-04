import { useQuery } from "@tanstack/react-query";
import {FaRecycle, FaRegTrashAlt, FaUsers} from 'react-icons/fa'

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

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
                                users.map((user,index) =>
                                    <tr key={user._id}>
                                        <th>{index+1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td> <button className="text-2xl bg-[#D1A054] btn"> <FaUsers></FaUsers> </button> </td>
                                        <td> <button className="bg-red-800 text-white btn text-2xl"><FaRegTrashAlt></FaRegTrashAlt> </button> </td>
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