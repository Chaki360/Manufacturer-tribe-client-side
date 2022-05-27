import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?people=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user]);

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
                            <th>Order Cancellation</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map(order => <tr>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>{order.orderNumber}</td>

                            <td><progress className="progress w-20"></progress>

                            </td>
                            <td> <button className="btn btn-xs btn-success px-2">Approve</button></td>
                            <td><button className="btn btn-xs btn-error text-white">Cancel Order</button></td>


                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;