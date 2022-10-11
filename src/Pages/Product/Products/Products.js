import React, { useEffect, useState } from 'react';
import ProductsData from '../../Homepage/ProductsData/ProductsData';
import './products.css'
const Products = () => {



    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-tribe-server-side.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <h1 className='text-4xl mb-10 mt-20  text-center font-bold text-violet-800'>Our All Available Products</h1>
            <div className=' all-products justify-items-center bg-violet-50'>
                {products.map(product => <ProductsData key={product._id} product={product}></ProductsData>)}
            </div></div>
    );
};

export default Products;