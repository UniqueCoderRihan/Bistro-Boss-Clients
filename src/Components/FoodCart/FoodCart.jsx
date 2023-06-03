import React, { useContext } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../hooks/UseCart';

const FoodCart = ({ item }) => {
    const [cart,refetch] = UseCart();
    const { user } = useContext(AuthContex);
    const { name, recipe, image, category, price,_id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const hanldeAddToCart = menuItem => {
        if (user && user.email ) {
            const cartItem ={foodId:_id,name,image,price,email:user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added On Cart!!',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Before Order You Need to Login ',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                navigate('/login',{state:{from:location}})
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="A Picture of Food" /></figure>
            <p className='bg-black text-white px-4  absolute right-0 mr-4 mt-2 rounded-lg'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}!</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => hanldeAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4">Add to Cart </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;