import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/orders', {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")} `
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        Navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user]);
    const handleDeleteOrder = id => {

        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.warning(`Order has ben deleted `)

            })

    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>User email</th>
                            <th>Ordered Product</th>
                            <th>Ordered Quantity</th>

                            <th>Payment status</th>
                            <th>Approval</th>
                            <th>Order Deletation</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map(order => <tr key={order._id}>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>{order.orderNumber}</td>

                            <td><progress className="progress w-20"></progress>

                            </td>
                            <td> <button className="btn btn-sm btn-success px-2">Approve</button></td>
                            <>

                                <td><label htmlFor="tribal-modal" className="btn-error text-slate-100 rounded-md px-1 py-1 text-md modal-button">Delete this order</label></td>


                                <input type="checkbox" id="tribal-modal" className="modal-toggle" />
                                <div className="modal bg-violet-50">
                                    <div className="modal-box">
                                        <p className="py-4 text-lg">User Email: <span className='text-blue-500'>{order.email}</span></p>
                                        <label for="tribal-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="font-bold text-lg ">Product name: <span className='text-emerald-500'> {order.productName}</span></h3>
                                        <p className="py-4 text-lg">Order Quantity: <span className='text-lime-600'>{order.orderNumber}</span></p>


                                        <button for='tribal-model' onClick={() => handleDeleteOrder(order._id)} className='btn-error flex justify-center text-white items-center rounded px-1 py-1'>Confirm Delete</button>

                                    </div>
                                </div>
                            </>


                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;