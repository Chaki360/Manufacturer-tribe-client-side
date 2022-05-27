import React from 'react';
import { toast } from 'react-toastify';
import useProducts from '../../../UseProducts/UseProducts';



const DeleteProduct = () => {
    const [products] = useProducts();

    const handleDeleteProduct = id => {

        const url = `https://manufacture-tribe.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`product successfully removed `)

            })

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Price per pics</th>
                            <th>Available</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map(product => <tr>

                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.availableQuantity}</td>


                            <section>

                                <td><label for="tribal-modal" className="btn-error text-slate-100 rounded-md px-1 py-1 text-md modal-button">Remove</label></td>


                                <input type="checkbox" id="tribal-modal" className="modal-toggle" />
                                <div className="modal bg-violet-50">
                                    <div className="modal-box">
                                        <label for="tribal-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="font-bold text-lg ">Product name:<span className='text-emerald-500'> {product.name}</span></h3>
                                        <p className="py-4 text-lg">Price per pics:<span className='text-blue-500'>${product.price}</span></p>

                                        <button for='tribal-model' onClick={() => handleDeleteProduct(product._id)} className='btn-error flex justify-center text-white items-center rounded px-1 py-1'>Confirm Remove</button>

                                    </div>
                                </div>
                            </section>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeleteProduct;