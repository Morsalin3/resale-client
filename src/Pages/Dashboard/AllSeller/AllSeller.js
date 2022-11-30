import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../contexts/AuthProvider';

const AllSeller = () => {
  const {user} = useContext(Authcontext)
  const {data: sellers = [], refetch } = useQuery({  
    queryKey: ['buyers'],
    queryFn: async () => {
        const res = await fetch('https://resale-server-one.vercel.app/users/sellers');
        const data = await res.json();
        return data;
        
    } 
});

const handleDeleteSeller = (id, name) =>{
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

const handleVerify = email =>{
   fetch (`https://resale-server-one.vercel.app/users/admin/${email}`,{
      method: 'PUT',
       headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
       }
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
      toast.success('verify seller successful.')
      refetch();


   });
}

    return (
        <div>
            <h3 className='text-3xl font-bold mb-5'>All Sellers</h3>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              sellers.map((seller, i) => <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td><button onClick={() => handleVerify(seller.email)} className='btn btn-xs btn-primary'>{seller?.isVerified ==='verified' ? 'verified' :'verify seller'} </button></td>

                <td><button onClick={()=>handleDeleteSeller(seller._id, seller.name)} className='btn btn-xs btn-warning'>Delete</button></td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllSeller;