import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-center mt-20'>
            <div className="card  w-96 bg-slate-50 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Badhon Chaki</h2>
                    <h3 className='text-lg'>Something about me?</h3>
                    <p>Im just 19 years old boy just admitted into a university recently</p>
                    <div className="card-actions justify-center">
                        <a href='https://github.com/Chaki360' className="btn btn-sm">Click to see my Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;