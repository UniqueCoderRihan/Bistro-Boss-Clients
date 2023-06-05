import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const image_hosting_Key = import.meta.env.VITE_image_hosting_token;
const AddItem = () => {
    // console.log(image_hosting_Key);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_Hosting_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_Key}`
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image',data.image[0])
        fetch(image_Hosting_URL,{
            method:'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imageResponse=>{
            console.log(imageResponse);
        })
    };
    console.log(errors);
    return (
        <div className='w-full px-10'>
            <SectionTitle heading='Add an Item' subHeading='What is new?'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input {...register("name", { required: true, maxLength: 120 })} type="text" placeholder="Type Name here" className="input input-bordered w-full " />
                </div>
                <div className='flex'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue='PickOne' className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled >Pick one</option>
                            <option>Pizza</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Soup</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true, maxLength: 80 })} type="number" placeholder="Price:" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Pick a file</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full " {...register("image", { required: true })} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true, maxLength: 500 })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <input className='btn btn-sm mt-4' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;