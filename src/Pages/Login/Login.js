import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../contexts/AuthProvider';


const Login = () => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const {signIn} = useContext(Authcontext);
    const [loginError, setLoginError] = useState('')

    const handleLogin = data =>{
        console.log(data);
        signIn(data.email, data.password)
        .then(result=>{
            const user = result.user;
            // console.log(user)
        })
        .catch(error=>{
            console.log(error.message);
            setLoginError(error.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                   <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Email</span></label>
                   <input type='email'
                    {...register("email",{
                        required:"email address is required"
                    })}
                    
                    className='input input-bordered w-full' />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                   </div>
                   <div className='form-control w-full max-w-xs'>
                   <label className='label'><span className='label-text'>Password</span></label>
                   <input type='password' {...register("password",{
                    required:"password is required",
                    minLength:{value:6, message:"password must be 6 characters or longer"}
                   })} className='input input-bordered w-full' />
                   {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                   </div> 
                   
                    <input className='btn btn-info w-full mt-5' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-error'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Swap <Link className='text-info' to ='/signup'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;