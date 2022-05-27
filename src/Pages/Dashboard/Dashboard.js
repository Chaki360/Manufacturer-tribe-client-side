import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='bg-violet-50'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/review'>Review Us</Link></li>
                        <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                        <li><Link to='/dashboard/add-product'>Add a product</Link></li>
                        <li><Link to='/dashboard/delete-product'>Delete a product</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;