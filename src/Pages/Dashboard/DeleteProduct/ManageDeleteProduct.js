import React from 'react';
import { toast } from 'react-toastify';


const ManageDeleteProduct = ({ product }) => {
    const handleDeleteProduct = id => {


        const url = `https://manufacture-tribe.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('product successfully removed ')

            })

    }
    return (
        <tr>

            <td>{product.name}</td>
            <td>${product.price}</td>

            <section>

                <label for="tribal-modal" className="btn-error text-slate-100 rounded-md px-1 py-1 modal-button">Remove</label>


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
        </tr>
    );
};

export default ManageDeleteProduct;