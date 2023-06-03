import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseCart from '../../../hooks/UseCart';

const Cart = ({ row }) => {
    const [cart,refetch] = UseCart();
    console.log(row);
    let i = 1;
    const { image, name, price, foodId, _id } = row;
    const handleRemove = (id) => {
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
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'delete'
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <tr>
            <th>
                {i++}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {name}
            </td>
            <td>${price}</td>
            <td>
                <button onClick={() => handleRemove(_id)} className="btn btn-ghost btn-xs text-2xl"><FaRegTrashAlt></FaRegTrashAlt> </button>
            </td>
        </tr>
    );
};

export default Cart;