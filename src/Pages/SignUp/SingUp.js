import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../contexts/AuthProvider';

const SingUp = () => {
    const { register, formState: { errors },reset, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(Authcontext)
    const [signUpError, setSignUpError] =useState('')
    const navigate = useNavigate();

    const handleSignUp = data => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user
            console.log(user)
            reset();
            toast.success('User create successfully')
            const userInfo = {
                displayName: data.name
            }
            console.log(userInfo)
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email, data.role )
            })
            .catch(error=>console.log(error))
        })
        .catch(error =>{
            console.log(error)
            setSignUpError(error.message)
        });
    };

    const saveUser =(name, email, role) =>{
        const user ={name, email, role};
        console.log(user)
        fetch('https://resale-server-one.vercel.app/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            getUserToken(email);
            console.log('save user',data);
            
        })
    };

    const getUserToken = email =>{
        fetch(`https://resale-server-one.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data=>{
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                navigate('/')
            }
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Sing Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Name</span></label>
                        <input type='text'
                            {...register("name", {
                                required: "Name address is required"
                            })}

                            className='input input-bordered w-full' />
                        {errors.Name && <p className='text-error'>{errors.Name?.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Email</span></label>
                        <input type='email'
                            {...register("email", {
                                required: "email address is required"
                            })}

                            className='input input-bordered w-full' />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Password</span></label>
                        <input type='password' {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: "password must be 6 characters or longer" }
                        })} className='input input-bordered w-full' />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>
                    <div className='form-control w-full'>
                        <label className='label'><span className='label-text'>Role</span></label>
                        <select {...register('role')}className="select input-bordered w-full max-w-xs">
                            <option value ='buyer' selected>User</option>
                            <option value ="seller">Seller</option>
                            
                        </select>
                    </div>

                    <input className='btn btn-info w-full mt-5' value='Sign Up' type="submit" />
                    <div>
                        {signUpError && <p className='text-error'>{signUpError}</p>}
                    </div>
                </form>
                <p className='mt-3'>Already have an account <Link className='text-info' to='/login'>Please login</Link></p>
                {/* <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
            </div>
        </div>
    );
};

export default SingUp;