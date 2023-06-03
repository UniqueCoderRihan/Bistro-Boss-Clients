import React from 'react';

const FoodCart = ({item}) => {
    const {name,recipe,image,category,price} = item;
    const hanldeAddToCart =menuItem=>{
        console.log(menuItem);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="A Picture of Food" /></figure>
            <p className='bg-black text-white px-4  absolute right-0 mr-4 mt-2 rounded-lg'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}!</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>hanldeAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4">Add to Cart </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;