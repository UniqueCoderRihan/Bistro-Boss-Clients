import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const SingUp = () => {
    const navigate = useNavigate();
    const { createUser, userProfileUpdate } = useContext(AuthContex);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                userProfileUpdate(data.name, data.photoURL)
                    .then(() => {
                        const user = {name:data.name,email:data.email,password:data.password}
                        fetch('http://localhost:5000/users',{
                            method:'post',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(user)   
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'SingUp Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })
                    })
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="hero min-h-screen bg-pink-200 rounded-lg">
            <Helmet>
                <title>SignUp</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please SingUp Here !</h1>
                    <p className="py-6">If You Want to grow your activity,You need to must Login Our Community!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-pink-100">
                    <div className='card-body'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            {/* Photo URL SECTION */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URl" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>Profile Image is required</span>}
                            </div>
                            {/* Email Section */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            {/* Password Section */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <div className="flex">
                                        <p className="label-text-alt link link-hover">Alredy have an Account? <span><Link to='/login'>Login</Link></span> </p>

                                    </div>
                                </label>
                            </div>

                            <input type="submit" value="SingUp" className='btn btn-primary w-full' />
                        </form>
                            <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;