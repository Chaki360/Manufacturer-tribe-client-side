import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?people=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [orders]);

    const handleCancelOrder = id => {

        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`Order has been canceled `)

            })

    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>User Name</th>
                            <th>Ordered Product</th>
                            <th>Ordered Quantity</th>
                            <th>User email</th>
                            <th>Address</th>
                            <th>Payment</th>
                            <th>Cancellation</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map(order => <tr>
                            <td>{order.userName}</td>
                            <td>{order.productName}</td>
                            <td>{order.orderNumber}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td><Link to='/payment' className="btn btn-sm btn-success">Pay</Link></td>

                            <section>

                                <td><label for="tribal-modal" className="btn-error text-slate-100 rounded-md px-1 py-1 text-md modal-button">Remove</label></td>


                                <input type="checkbox" id="tribal-modal" className="modal-toggle" />
                                <div className="modal bg-violet-50">
                                    <div className="modal-box">
                                        <label for="tribal-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="font-bold text-lg ">Product name:<span className='text-emerald-500'> {order.productName}</span></h3>
                                        <p className="py-4 text-lg">Order Quantity:<span className='text-blue-500'>{order.orderNumber}</span></p>

                                        <button for='tribal-model' onClick={() => handleCancelOrder(order._id)} className='btn-error flex justify-center text-white items-center rounded px-1 py-1'>Confirm Remove</button>

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

export default MyOrders;