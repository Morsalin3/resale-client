import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../contexts/AuthProvider';
import useAdmin from '../Hook/useAdmin';
import useBuyer from '../Hook/useBuyer';
import useSeller from '../Hook/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(Authcontext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content font-bold">

                    { isAdmin &&
                         <>
                        <li><Link to='/dashboard/allsellers'>All Seller</Link></li>
                        <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>    
                        <li><Link to='/dashboard/addaproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                        </>                        
                    }       
                    { isSeller &&
                         <>  
                        <li><Link to='/dashboard/addaproduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                        </>                        
                    }       
                    { isBuyer &&
                         <>  
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        </>                        
                    }                                   
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;