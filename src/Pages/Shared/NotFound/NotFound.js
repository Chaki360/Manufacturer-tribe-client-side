import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-slate-50">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/SrnxrVR/dogyy-confused.png" alt='' className='max-w-md' />
                    <div>
                        <h1 className="text-5xl font-bold text-red-600">Sorry! We are unable to find that page</h1>
                        <p className="py-6">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?</p>
                        <Link to='/' className="btn btn-primary text-violet-100">Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;