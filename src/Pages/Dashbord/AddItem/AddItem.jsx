import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log()
    };
    console.log(errors);
    return (
        <div className='w-full'>
            <SectionTitle heading='Add an Item' subHeading='What is new?'></SectionTitle>
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input {...register("name", {required: true, maxLength: 120})} type="text" placeholder="Type Name here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select className="select select-bordered" {...register("category", { required: true })}>
                        <option disabled selected>Pick one</option>
                        <option>Pizza</option>
                        <option>Salad</option>
                        <option>Drinks</option>
                        <option>Soup</option>
                        <option>Dessert</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input {...register("price", {required: true, maxLength: 80})} type="number" placeholder="Price:" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea {...register("details", {required: true, maxLength: 500})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <input className='btn btn-sm mt-4' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;