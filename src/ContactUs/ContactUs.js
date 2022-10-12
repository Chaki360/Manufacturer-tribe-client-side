import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi"
import { FaMailBulk } from "react-icons/fa"
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className='contact-page bg-violet-50'>
            <div className='text-center lg:pr-0 pr-6'>
                <h1 className='text-4xl mb-4 mt-5 text-center font-bold text-violet-800'>Contact Anytime to Our Expert </h1>
                <p className='font-normal text-xl'>Contact us to speak with one of our team members about how we can help<br /> you mitigate risk, see around the corner, and gain the upper hand.</p>



            </div>
            <div className='lg:flex lg:flex-row flex flex-col lg:px-40 px-4 lg:gap-16 gap-6'>
                <div className='text-white lg:my-20 mt-4'>
                    <div className='flex lg:pl-0 pl-4 gap-4 lg:mb-14 mb-6 text-black'>
                        <div>
                            <FiPhoneCall className='h-10 w-10 text-violet-500' />
                        </div>
                        <div>
                            <p>Talk to our Expert</p>
                            <p>+1512-555-0474</p>
                        </div>
                    </div>
                    <div className='flex lg:pl-0 pl-4 gap-4 lg:mb-14 mb-6 text-black'>
                        <div>
                            <FaMailBulk className='h-10 w-10 text-violet-500' />
                        </div>
                        <div>
                            <p>Our Email</p>
                            <p>tribe@manufacturer.query</p>
                        </div>
                    </div>
                    <div className='flex lg:pl-0 pl-4 gap-4 text-black'>
                        <div>
                            <HiLocationMarker className='h-10 w-10 text-violet-500' />
                        </div>
                        <div>
                            <p>Our Office</p>
                            <p>3994 W Old Rd #30
                                Warsaw, Indiana(IN), 46580</p>
                        </div>
                    </div>
                </div>
                <div className='text-white mx-auto lg:mt-4 lg:mb-28 mb-12'>
                    <form >
                        <div className='lg:flex lg:flex-row flex flex-col gap-3 py-6'>
                            <input className='lg:w-96 w-80 h-12 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' type="text" name="name" placeholder='Write Your Name' required />
                            <input value="" className='lg:w-96 w-80 h-12 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' type="email" name="email" placeholder='Write Your Email' required />

                        </div>
                        <div className='lg:flex lg:flex-row flex flex-col gap-3 py-6'>
                            <input className='lg:w-96 w-80 h-12 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' type="text" placeholder='Write Your Company Name' required />
                            <input value="" className='lg:w-96 w-80 h-12 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' type="text" placeholder='Write Your Query Subject' required />
                        </div>

                        <textarea className=' lg:w-[780px] lg:h-32 w-80 h-[150px]  pt-6 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' name="message" id="" placeholder='Write Your Message' required></textarea>
                        <div className='flex justify-center'>
                            <input type="submit" className=' px-3 py-1 border border-violet-500 relative group overflow-hidden font-medium bg-violet-600 text-white inline-block transition-all duration-200 ease-out transform translate-y-0 rounded-md group-hover:h-full opacity-90 sm:btn-md md:btn-md lg:btn-lg shadow lg:mt-6 mt-4 hover:bg-violet-700' value="Submit Query" />

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;