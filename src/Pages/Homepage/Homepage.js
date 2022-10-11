import React, { useEffect, useState } from 'react';
import './Homepage.css'
import Banner from './Banner/Banner';
import ProductsData from './ProductsData/ProductsData';
import Statistics from './Statistics/Statistics';
import CustomersReview from './CustomersReview/CustomersReview';
import PricingPlan from '../PricingPlan/PricingPlan';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-tribe-server-side.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-tribe-server-side.onrender.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div >
            <Banner></Banner>
            <h1 className='text-4xl mb-4 mt-5  text-center font-bold text-violet-800'>Our All Available Products</h1>
            <div className='products justify-items-center bg-violet-50'>
                {products.slice(0, 9).map(product => <ProductsData key={product._id} product={product}></ProductsData>)}
            </div>
            <div className='text-center mt-8 mb-4'>
                <Link to='/all-products' className=" link text-cyan-600 font-medium mb-5">See All Products</Link>
            </div>
            <h1 className='text-4xl mb-4 mt-5 text-center  font-bold text-violet-800'>Trusted by thousands of user</h1>
            <Statistics></Statistics>
            <PricingPlan></PricingPlan>
            <h1 className='text-4xl mb-4 mt-5 text-center  font-bold text-violet-800'>What customer says about us</h1>
            <div className='review justify-items-center'>
                {reviews.map(review => <CustomersReview key={review._id} review={review}></CustomersReview>)}
            </div>


        </div>
    );
};

export default Homepage;