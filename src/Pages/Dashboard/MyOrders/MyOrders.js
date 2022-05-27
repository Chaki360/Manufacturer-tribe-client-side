import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
    }, [user]);

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
                            <td><button className="btn btn-sm btn-success">Pay</button></td>
                            <td><button className="btn btn-sm btn-error text-white">Cancel</button></td>


                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;