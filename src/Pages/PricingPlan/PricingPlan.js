import React from 'react';

const PricingPlan = () => {
    return (
        <div className='bg-violet-50 justify-items-center'>
            <h1 className='text-4xl mt-5  text-center font-bold text-violet-800'>Our Available Pricing Plans</h1>
            <div className="xl:mx-auto xl:container  py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">

                        <h1 className="md:text-5xl text-3xl font-bold leading-10 mb-4 mt-5 text-violet-800">
                            Work with our company
                        </h1>
                        <p className="text-base leading-5 mt-5 text-gray-600">
                            We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think
                        </p>

                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <div className="bg-violet-50 cursor-pointer shadow rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-primary">Startup</h2>
                                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-green-600">FREE</p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Full access to all features and no credit card required</p>
                        </div>
                        <div className="bg-violet-50 cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5  h-auto bg-violet-800 rounded-tl-md rounded-bl-md" />
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-primary">Growth And Establishment</h2>
                                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-blue-600">
                                        $50<span className="font-normal text-base">/mo</span>
                                    </p>
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                            </div>
                        </div>
                        <div className="bg-violet-50 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-primary">Expansion</h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-yellow-600">
                                    $100<span className="font-normal text-base">/mo</span>
                                </p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;