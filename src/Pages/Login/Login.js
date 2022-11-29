import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../contexts/AuthProvider';
import useToken from '../../Hook/useToken';


const Login = () => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const {signIn, googleSignin} = useContext(Authcontext);
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace:true});
    }

    const handleLogin = data =>{
        console.log(data);
        signIn(data.email, data.password)
        .then(result=>{
            const user = result.user;
            toast.success('Login Successfully')
            setLoginUserEmail(data.email)
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message);
            setLoginError(error.message)
        })
    };

    const handleGoogleSignIn =()=>{
        googleSignin()
        .then(result=>{
            const user = result.user;
            setLoginUserEmail(user?.email)
            console.log(user);
            saveUser(user?.displayName, user?.email)
            navigate(from, {replace: true});
            toast.success('Login Successfully');
        })
        .catch(error=>console.log(error))
    };

    const saveUser =(name, email,) =>{
        const user ={name, email, role:"buyer"};
        console.log(user)

        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('save user',data);
            
        })
    }
       
   


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Login</h2>
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
                <p className='mt-3'>New to Swap <Link className='text-info' to ='/signup'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;