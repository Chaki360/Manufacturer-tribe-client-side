import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const Product = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://manufacture-tribe.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const proceed = window.confirm('Everything OK?');
        if (proceed) {
            const url = `https://manufacture-tribe.herokuapp.com/order`;
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
                    toast.success(' Purchase ')
                    reset()
                })

        }

    };

    return (
        <div className='h-screen bg-violet-50 flex items-center justify-center'>
            <form className='shadow-lg border-2' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' readOnly >{user.displayName}</h3>
                <h3 className=' mb-2 w-80 appearance-none rounded-none relative block px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' readOnly>{user.email}</h3>
                <h3 className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ' placeholder='Item name' type="text" readOnly >Product Name:{product.name}</h3>
                <h3 className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ' placeholder='Item price per one' type="text" readOnly>Price: ${product.price}</h3>
                <h3 className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ' placeholder='Item price per one' type="text" readOnly>Available Product: {product.availableQuantity}</h3>
                <h3 className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' readOnly >Minimum Order: {product.minimumOrder}</h3>
                <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="number" {...register("orderQuantity")} />
                <input className=' bg-primary hover:bg-secondary text-white block w-full px-5 py-3' value='CONFIRM PURCHASE' type="submit" />
            </form>
        </div>
    );
};

export default Product;