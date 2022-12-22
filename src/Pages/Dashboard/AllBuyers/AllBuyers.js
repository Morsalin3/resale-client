import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

const {data: buyers = [], refetch } = useQuery({  
    queryKey: ['buyers'],
    queryFn: async () => {
        const res = await fetch('https://resale-server-one.vercel.app/users/buyers');
        const data = await res.json();
        return data;
        
    } 
});

const handleDeleteBuyer = (id, name) =>{
    fetch(`https://resale-server-one.vercel.app/users/${id}`,{
        method: 'DELETE',  
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data =>{
        if(data.deletedCount > 0){
            toast.success(`${name}, is delete successfully`)
            refetch();
        }
        console.log(data)
    })
};

    return (
        <div>
            <h3 className='text-3xl font-bold m-10'>All Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.role}</td>
                                <td><button onClick={()=> handleDeleteBuyer(buyer._id, buyer.name)} className='btn btn-xs btn-warning'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;