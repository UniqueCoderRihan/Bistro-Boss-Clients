import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const Cart = ({row}) => {
    console.log(row);
    const {image,name,price,foodId} = row;
    return (
        <tr>
            <th>
                
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
                <button className="btn btn-ghost btn-xs text-2xl"><FaRegTrashAlt></FaRegTrashAlt> </button>
            </td>
        </tr>
    );
};

export default Cart;