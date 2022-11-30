import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Authcontext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(Authcontext);

    const url =`http://localhost:5000/products?email=${user?.email}`;

    const {data: products = [], refetch} = useQuery({
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
    })
    return (
        <div>
            <h3 className='text-3xl font-bold mb-5'>My Products:{products.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
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
                                <td>
                                <button className='btn btn-info'>{product.status}</button>
                                </td>
                                <td>
                                    {/* <label onClick={()=> setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label> */}
                                    <button className="btn btn-accent ">Delete</button>
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