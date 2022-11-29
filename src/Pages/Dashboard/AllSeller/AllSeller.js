import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {
  const {data: sellers = [] } = useQuery({  
    queryKey: ['buyers'],
    queryFn: async () => {
        const res = await fetch('http://localhost:5000/users/sellers');
        const data = await res.json();
        return data;
        
    } 
});
    return (
        <div>
            <h3 className='text-3xl font-bold'>All Sellers</h3>
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
              sellers.map((seller, i) => <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                {/* <td>{seller?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllSeller;