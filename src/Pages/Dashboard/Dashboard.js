import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../useAdmin/useAdmin';
import Loading from '../Shared/Spinner/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>


                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-52 bg-slate-50 text-base-content">
                        {!admin && <li><Link to='/dashboard/my-profile'>My Profile</Link></li>}
                        {!admin && <li><Link to='/dashboard'>My Orders</Link></li>}
                        {!admin && <li><Link to='/dashboard/review'>Review Us</Link></li>}
                        {admin && <li><Link to='/dashboard/all-users'>Manage Users</Link></li>}
                        {admin && <li><Link to='/dashboard/manage-orders'>Manage All Orders</Link></li>}
                        {admin && <li><Link to='/dashboard/add-product'>Add a product</Link></li>}
                        {admin && <li><Link to='/dashboard/delete-product'>Remove a product</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;