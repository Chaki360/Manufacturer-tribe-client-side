import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';


const Nav = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth)
        navigate('/login')
        localStorage.removeItem()

    }
    const menuItems = <>
        <li>{user && <Link to='/dashboard' className=" text-violet-50 font-semibold">Dashboard</Link>}</li>

        <li><Link className='text-violet-50 font-semibold' to="/">Home</Link></li>
        <li><Link className='text-violet-50 font-semibold' to="/all-products">Products</Link></li>
        <li><Link className='text-violet-50 font-semibold' to="/all-reviews">Reviews</Link></li>

        <li><Link className='text-violet-50 font-semibold' to="/blogs">Blogs</Link></li>
        <li><Link className='text-violet-50 font-semibold' to="/about">About</Link></li>

        <li>{user && <span className=" text-emerald-300 subpixel-antialiased font-rubik text-2xl  font-bold">{user.displayName}</span>}</li>



        {
            user ?
                <button onClick={handleLogOut} className=" border bg-slate-100 text-indigo hover:text-white hover:bg-violet-500 px-2 py-1 rounded-md text-sm font-medium">Logout</button> : <button> <Link to='/login' className="border bg-slate-100 text-indigo hover:text-white hover:bg-violet-500 px-2 py-1 rounded-md text-sm font-medium">Login</Link></button>
        }
    </>
    return (
        <nav className="navbar  bg-primary shadow-2xl sticky z-50 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 shadow bg-violet-500 rounded-box w-24 ">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-violet-100 text-3xl font-bold">Manufacturer Tribe</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </nav>
    );
};

export default Nav;

