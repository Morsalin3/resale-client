import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(Authcontext);

    const url = `https://resale-server-one.vercel.app/bookings?email=${user?.email}`;

    const {data: bookings = [] , isLoading} = useQuery({
        queryKey: ["bookings"],
        queryFn: async () =>{
            const res = await fetch(url,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <progress className="progress progress-info w-56"></progress> 
    }
    return (
        <div>
            <h3 className='text-3xl font-bold m-10'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       { bookings &&
                        bookings?.map((booking, i)=> <tr key={booking._id}>
                        <th>{i+1}</th>
                        <td>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={booking.img} alt='' />
                            </div>
                        </div>
                        </td>
                        <td>{booking.product}</td>
                        <td>{booking.price}</td>
                        
                        <td>
                           <Link>
                            <button className='btn btn-sm btn-primary'>Pay</button>
                            </Link>                          
                            </td>
                    </tr> 
                    )
                       } 
                                              
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;