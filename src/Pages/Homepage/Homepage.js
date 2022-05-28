import React, { useEffect, useState } from 'react';
import './Homepage.css'
import Banner from './Banner/Banner';
import ProductsData from './ProductsData/ProductsData';
import Statistics from './Statistics/Statistics';
import CustomersReview from './CustomersReview/CustomersReview';
import PricingPlan from '../PricingPlan/PricingPlan';

const Homepage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://manufacture-tribe.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://manufacture-tribe.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div >
            <Banner></Banner>
            <h1 className='text-4xl mb-4 mt-5  text-center font-bold text-violet-800'>Our Products</h1>
            <div className='products bg-violet-50'>
                {products.map(product => <ProductsData key={product._id} product={product}></ProductsData>)}
            </div>
            <h1 className='text-4xl mb-4 mt-5 text-center  font-bold text-violet-800'>Trusted by thousands of user</h1>
            <Statistics></Statistics>
            <PricingPlan></PricingPlan>
            <h1 className='text-4xl mb-4 mt-5 text-center  font-bold text-violet-800'>What customer says about us</h1>
            <div className='review'>
                {reviews.map(review => <CustomersReview key={review._id} review={review}></CustomersReview>)}
            </div>


        </div>
    );
};

export default Homepage;