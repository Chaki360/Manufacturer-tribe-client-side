import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import useAdmin from '../../../useAdmin/useAdmin';

const ProductsData = ({ product }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/product/${id}`);
    }

    return (
        <div className="card w-96 bg-slate-50 shadow-md">
            <figure className="px-10 pt-10">
                <img src={product.image} alt="nail gun" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="card-title text-2xl font-medium">{product.name}
                    <div className="badge badge-primary font-bold text-lg ">${product.price}</div>
                </h1>
                <h2 className='text-bold text-2xl'>Available Quantity:<span className='text-green-600'>{product.availableQuantity}</span></h2>
                <h2 className='text-bold text-2xl'>Minimum order:<span className='text-orange-600'>{product.minimumOrder}</span></h2>
                <p>{product.description}</p>
                {!admin && <button onClick={() => navigateToPurchase(product._id)} className="btn btn-primary">Purchase
                </button>}
            </div>
        </div>
    );
};

export default ProductsData;