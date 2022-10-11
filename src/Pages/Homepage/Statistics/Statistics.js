import React from 'react';

const Statistics = () => {
    return (
        <section className='flex justify-center mt-4 bg-slate-50' >
            <div className="stats stats-vertical gap-10 lg:stats-horizontal shadow-sm">
                <div className="stat">

                    <div className="stat-value text-primary">75000</div>
                    <div className="stat-title">User Visitors</div>
                    <div className="stat-desc text-primary">Average in Quarter</div>
                </div>
                <div className="stat">

                    <div className="stat-value text-primary">35000</div>
                    <div className="stat-title">User Registered</div>
                    <div className="stat-desc text-primary">Feb 1st - September 25th</div>
                </div>

                <div className="stat">

                    <div className="stat-value text-primary">7,200</div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-desc text-primary">Average in month</div>
                </div>

                <div className="stat">

                    <div className="stat-value text-primary">2,500</div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-desc text-primary">Last 30 days</div>
                </div>
                <div className="stat">

                    <div className="stat-value text-primary">15+</div>
                    <div className="stat-title">Partners</div>
                    <div className="stat-desc text-primary">Within 2 years</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-violet-700">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value text-primary">24/7</div>
                    <div className="stat-title">Live customer's Support</div>
                    <div className="stat-desc text-primary">We ensure the best</div>
                </div>

            </div>

        </section>
    );
};

export default Statistics;