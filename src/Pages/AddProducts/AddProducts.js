import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const proceed = window.confirm('Everything OK?');
        if (proceed) {
            const url = `https://manufacturer-tribe-server-side.onrender.com/product`;
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
                    toast.success('Product added successfully ')
                    reset()
                })

        }

    };
    return (
        <section>
            <h1 className='text-4xl mb-8 mt-5  text-center font-bold text-violet-800'>Add a new product </h1>
            <div className=' items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 uppercase appearance-none rounded-none relative block w-full px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Enter product name' type='text' {...register("name")} />
                    <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Enter available quantity' type="number" {...register("availableQuantity")} />
                    <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Minimum order Quantity ' type="number" {...register("minimumOrder")} />
                    <textarea className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Description' type="text" {...register("description")} />
                    <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Image URL' type="text" {...register("image")} />
                    <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ' placeholder='Enter product price' type="text" {...register("price")} />
                    <input className=' bg-primary hover:bg-violet-600 text-white block w-full px-3 py-3' value='Add a product' type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddProducts;