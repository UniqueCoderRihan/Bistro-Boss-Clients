import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const SingUp = () => {

    const { createUser } = useContext(AuthContex);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset()
            })
    }



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
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <div className="flex">
                                        <p className="label-text-alt link link-hover">Alredy have an Account? <span><Link to='/login'>Login</Link></span> </p>

                                    </div>
                                </label>
                            </div>

                            <input type="submit" value="SingUp" className='btn btn-primary w-full' />
                        </form>

                        <p className='text-center'>Or</p>
                        <div>
                            <button className='btn btn-primary btn-outline w-full'>  Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;