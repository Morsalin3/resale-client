import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../contexts/AuthProvider';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const {user} = useContext(Authcontext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();

    const handleProduct = data => {
        const product = {
            category_id: data.category,
            seller_name: user?.displayName,
            email: user?.email,
            product_name: data.product,
            phone: data.phone,
            location: data.location,
            img: data.image,
            product_condition: data.condition,
            original_price: data.original_price,
            resale_price: data.resale_price,
            use_years: data.use_years,
            purchase_years: data.purachse_years,
            date: new Date(),
            status: "available"
        }
            console.log(product)
        //save product information to the database
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers:{
                'content-type':'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
            if(result.acknowledged){
                toast.success (`${data.product_name} is added successfully`)
                navigate('/dashboard/myproducts')
            }
           
        });     

    }

    return (


        <div className='w-96 p-7'>
            <h3 className='text-3xl font-bold mb-5'>Add Product</h3>
            <form onSubmit={handleSubmit(handleProduct)}>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Product Name</span></label>
                    <input type='text'{...register("product", {
                        required: true
                    })} className='input input-bordered w-full' />        
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Phone Number</span></label>
                    <input type='text'{...register("phone", {
                        required: true
                    })} className='input input-bordered w-full' />
                    {/* {errors.email && <p className='text-error'>{errors.email.message}</p>} */}
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Location</span></label>
                    <input type='text'{...register("location", {
                        required: true
                    })} className='input input-bordered w-full' />
                    {/* {errors.email && <p className='text-error'>{errors.email.message}</p>} */}
                </div>

                <div className='form-control w-full'>
                    <label className='label'><span className='label-text'>Category</span></label>
                    <select
                        {...register('category',{
                            required: true
                        })}
                        className="select input-bordered w-full max-w-xs">

                        <option value="1" selected>Apple</option>
                        <option value="2">Xiaomi</option>
                        <option value="3">Huawei</option>

                    </select>
                </div>
                <div className='form-control w-full'>
                    <label className='label'><span className='label-text'>Condition</span></label>
                    <select
                        {...register('condition')}
                        className="select input-bordered w-full max-w-xs">
                        <option value="Excellent" selected>Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Image URL</span></label>
                    <input type='text'{...register("image", {
                        required: true
                    })} className='input input-bordered w-full' />
                    {/* {errors.img && <p className='text-error'>{errors.img.message}</p>} */}
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Use Of Years</span></label>
                    <input type='text'{...register("use_years", {
                        required: true
                    })} className='input input-bordered w-full' />
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Purchase Of Years</span></label>
                    <input type='text'{...register("purachse_years", {
                        required: true
                    })} className='input input-bordered w-full' />
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>original price</span></label>
                    <input type='text'{...register("original_price", {
                        required: true
                    })} className='input input-bordered w-full' />
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Resale Price</span></label>
                    <input type='text'{...register("resale_price", {
                        required: true
                    })} className='input input-bordered w-full' />
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Description</span></label>
                    <textarea type='text'{...register("description", {
                        required: true
                    })} className='input input-bordered w-full' />
                    
                </div>

                <input className='btn btn-info w-full mt-8' value='Add Product' type="submit" />
               
            </form>
        </div>
    );
};

export default AddProduct;