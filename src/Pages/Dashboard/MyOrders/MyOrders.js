import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init';


const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `https://manufacturer-tribe-server-side.onrender.com/order?email=${email}`
            const { data } = await axios.get(url)
            setOrders(data)
        }
        getOrders()
    }, [user])

    const handleCancelOrder = id => {

        const url = `https://manufacturer-tribe-server-side.onrender.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                toast.success(`Order has been canceled `)

            })

    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Your Name</th>
                            <th>Ordered Product</th>
                            <th>Ordered Quantity</th>
                            <th>Your email</th>
                            <th>Address</th>
                            <th>Payment</th>
                            <th>Cancellation</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map(order => <tr key={order._id}>
                            <td>{order.userName}</td>
                            <td>{order.productName}</td>
                            <td>{order.orderNumber}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td><Link to='/payment' className="btn btn-sm btn-success">Pay</Link></td>
                            <td><button onClick={() => handleCancelOrder(order._id)} className='btn btn-sm btn-error'> Cancel</button></td>



                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;