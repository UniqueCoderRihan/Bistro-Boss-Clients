import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContex } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {googleSign} = useContext(AuthContex);
    const handleGoogle=()=>{
        googleSign()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className='divider'></div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogle} className='btn btn-circle btn-outline'>
                    <FaGoogle className='mx-auto'></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;