import React from 'react';
import UseCart from '../../../hooks/UseCart';
import Cart from './Cart';

const MyCart = () => {
    const [cart] = UseCart();
    
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2)
    return (
        <div className='w-full'>

            <div className='uppercase flex space-x-9 font-semibold'>
                <h2 className='text-3xl'>Total Items: {cart.length}</h2>
                <h2 className='text-3xl'>Total Price: {totalPrice}</h2>
                <button className='btn btn-warning btn-sm'>PAY</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>Food</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(row=> <Cart key={row._id} row={row}></Cart>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;