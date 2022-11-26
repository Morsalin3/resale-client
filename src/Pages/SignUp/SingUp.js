import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SingUp = () => {
    const { register, formState: { errors },reset, handleSubmit } = useForm();

    const handleSignUp = data => {
        reset();
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sing Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Name</span></label>
                        <input type='text'
                            {...register("Name", {
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
                            <option defaultValue='normal user'>Normal User</option>
                            <option value="seller">Seller</option>
                            
                        </select>
                    </div>

                    <input className='btn btn-info w-full mt-5' value='Login' type="submit" />
                    {/* <div>
                        {loginError && <p className='text-error'>{loginError}</p>}
                    </div> */}
                </form>
                <p>Already have an account <Link className='text-info' to='/login'>Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SingUp;