import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-violet-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='  w-screen ' src="https://i.ibb.co/GH2LsG6/stinger-cn100b-removebg-preview.png" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">We don't believe in <span className='text-red-600'>obstacles</span>,</h1>
                    <h1 className="text-5xl font-bold">Only believe in <span className='text-green-600'>success!</span></h1>

                    <p className="py-6">A nail gun is a convenient power tool that reduces the manual effort needed to perform tasks like framing a home, tacking on a new roof, or installing baseboards. In this review, the This Old House Reviews team details some of the best nail guns available to help you select a quality model for your next job.</p>
                    <button className="btn text-violet-100 btn-primary">Explore more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;