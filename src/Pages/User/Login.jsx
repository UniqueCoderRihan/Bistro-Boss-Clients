import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const Ref = useRef(null)
    const [diasble,setDiasble] = useState(true)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleVaildate=()=>{
        const userCaptchaValue = Ref.current.value;
        console.log(userCaptchaValue);
        if(validateCaptcha(userCaptchaValue)){
            setDiasble(false)
        }
        else{
            setDiasble(true)
        }
    }

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    return (
        <div className="hero min-h-screen bg-pink-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login Here !</h1>
                    <p className="py-6">If You Want to grow your activity,You need to must Login Our Community!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-pink-100">
                    <div className='card-body'>
                        <form onSubmit={handleLogin}>
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
                                        <p className="label-text-alt link link-hover">Are you new to? <span><Link to='/Register'>Register</Link></span> </p>
                                        <p className="label-text-alt link link-hover ml-12">Forget Password?</p>
                                    </div>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <LoadCanvasTemplate />
                                </label>
                                <input ref={Ref} type="captcha" name='captcha' required placeholder="Type Captcha" className="input input-bordered mb-5" />
                                <button onClick={handleVaildate} className='btn btn-outline btn-xs mb-2'>Validate</button>
                            </div>
                            <input disabled={diasble} type="submit" value="login" className='btn btn-primary w-full' />
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

export default Login;