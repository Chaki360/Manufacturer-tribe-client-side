import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        const url = `https://manufacture-tribe.herokuapp.com/review`;
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
        <div className=' items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='User Image URL' type="text" {...register("userImage")} />
                <input className='mb-2 appearance-none rounded-none relative block w-full px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Your name' type='text' {...register("userName")} />
                <input className='mb-2 appearance-none rounded-none relative block w-full px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='product name' type='text' {...register("productName")} />
                <input className='mb-2 appearance-none rounded-none relative block w-full px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='give your rating' type='text' {...register("rating")} />
                <textarea className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Write your comment' type="text" {...register("comment")} />

                <input className=' bg-primary hover:bg-violet-600 text-white block w-full px-3 py-3' value='Add a review' type="submit" />
            </form>
        </div>
    );
};

export default Review;