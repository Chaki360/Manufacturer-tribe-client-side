import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success(' Your review added successfully ')
                reset()
            })



    };
    return (
        <section>
            <h1 className='text-4xl mb-4 mt-5  text-center font-bold text-violet-800'>Give us your feedback below</h1>
            <div className=' items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Your Image URL from imgBB' type="text" {...register("userImage")} />
                    <input className='mb-2 appearance-none rounded-none relative block w-full px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Your name' type='text' {...register("userName")} />
                    <input className='mb-2 uppercase appearance-none rounded-none relative block w-full px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='product you bought' type='text' {...register("productName")} />
                    <select type="text" className="select mb-2 appearance-none rounded-none relative block w-full px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm max-w-xs"{...register("rating")}>
                        <option disabled selected>Select Your Review</option>

                        <option>5</option>
                        <option>4.5</option>
                        <option>4</option>
                        <option>3.5</option>
                        <option>3</option>
                        <option>2.5</option>
                        <option>2</option>
                        <option>1.5</option>
                        <option>1</option>
                    </select>
                    <textarea className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Write your comment' type="text" {...register("comment")} />

                    <input className=' bg-primary hover:bg-violet-600 text-white block w-full px-3 py-3' value='Add a review' type="submit" />
                </form>
            </div>
        </section>
    );
};

export default Review;