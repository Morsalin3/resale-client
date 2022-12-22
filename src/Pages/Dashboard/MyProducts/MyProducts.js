import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(Authcontext);

    const url =`https://resale-server-one.vercel.app/products?email=${user?.email}`;

    const {data: products = [], refetch, isLoading} = useQuery({
        queryKey:['products'],
        queryFn: async() =>{
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data =await res.json();
            return data;
        }
    });

    const deleteProduct= (id, name) =>{
        fetch(`https://resale-server-one.vercel.app/products/${id}`,{
            method: "DELETE",
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast.success(`${name} is delete successfully`)
            }
            refetch();

        })
    }

    if(isLoading){
       return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <h3 className='text-3xl font-bold m-10'>My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Add</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={product.img} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.product_name}</td>
                                <td>{product.resale_price}</td>
                                <td><button className='btn btn-info'>Advertise</button></td>
                                <td>
                                <button className='btn btn-info'>{product.status}</button>
                                </td>
                                <td>
                                    <button onClick={()=> deleteProduct(product._id, product.product_name)} className="btn btn-accent ">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;