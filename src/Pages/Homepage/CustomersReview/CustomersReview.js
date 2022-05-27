import React from 'react';
import '../Homepage.css'
const CustomersReview = ({ review }) => {
    return (
        <div>
            <div className="card lg:max-w-lg px-4 bg-base-100 shadow-xl">
                <div className="h-32 w-32">
                    <img src={review.userImage} alt="" className="rounded-full object-cover h-full w-full shadow-md" />
                    <h2 className="text-lg text-bold">{review.userName}</h2>
                </div>
                <div className="card-body">
                    <h2 className="text-yellow-600 text-xl text-bold">Rating:{review.rating}star</h2>
                </div>
                <h2 className="card-title text-2xl text-primary">{review.productName}</h2>
                <p>{review.comment}</p>

            </div>
        </div>

    );
};

export default CustomersReview;