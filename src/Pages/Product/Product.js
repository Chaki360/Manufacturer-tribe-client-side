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
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const [user, loading] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const url = `http://localhost:5000/order`;
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
                toast.success('Your order placed')
                reset()
            });



    };

    return (
        <div>
            <div className="flex mt-24 max-h-screen w-full">
                <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
                    <div className=" lg:w-2/3 h-64 w-72 align-middle text-center dark:bg-gray-800"> <h3 className="font-bold text-lg ">Your Name:<span className='text-emerald-500'> {user?.displayName}</span></h3>
                        <h3 className=" text-lg">Your Email:<span className='text-blue-500'> {user?.email}</span></h3>
                        <div className='mt-4'>
                            <h3 className=" text-xl ">Product Name:<span className='text-blue-500 font-bold'> {product.name}</span></h3>
                            <h3 className=" text-lg">Price per pics:<span className='text-amber-500 font-semibold text-md'> ${product.price}</span></h3>
                            <h3 className=" text-lg">Available:<span className='text-teal-500'> {product.availableQuantity}</span></h3>
                            <h3 className=" text-lg">Minimum Order:<span className='text-fuchsia-500'> {product.minimumOrder}</span></h3>
                        </div>

                    </div>
                    <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-96 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col lg:mr-16">
                                <label className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal ">Product Name</label>
                                <input type="text" className="text-gray-600 px-2 mb-2 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-700 dark:focus:border-violet-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" value={product.name} {...register("productName")} />
                            </div>
                            <div className="flex flex-col lg:mr-16">
                                <label className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal ">Your Name</label>
                                <input type="text" className="text-gray-600 px-2 mb-2 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-700 dark:focus:border-violet-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" value={user.displayName} {...register("userName")} />
                            </div>
                            <div className="flex flex-col lg:mr-16">
                                <label className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal ">Your Email</label>
                                <input type="text" className="text-gray-600 px-2 mb-2 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-700 dark:focus:border-violet-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" value={user.email} {...register("email")} />
                            </div>
                            <div className="flex flex-col lg:mr-16">
                                <label className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal ">Address</label>
                                <input autocomplete="off" type="text" className="text-gray-600 px-2 mb-2 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-700 dark:focus:border-violet-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Enter your address here" {...register("address")} />
                            </div>
                            <div className="flex flex-col lg:mr-16">
                                <label className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Phone</label>
                                <input type="text" className="text-gray-600 px-2 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-700 dark:focus:border-violet-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Your Phone number" {...register("phone")} />
                            </div>
                            <div className="flex flex-col lg:mr-16">
                                <label for="email" className="text-gray-800  dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Order number</label>
                                <input type="number" className="text-gray-600 px-2 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-700 dark:focus:border-violet-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Number you want to order" {...register("orderNumber")} />
                            </div>


                            <input type='submit' value="place order" className=" mt-4 text-md font-semibold bg-primary transition duration-150 uppercase ease-in-out hover:bg-violet-600 rounded text-white px-8 flex justify-center py-1"></input>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;