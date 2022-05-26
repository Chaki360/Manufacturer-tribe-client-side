import React from 'react';
import useProducts from '../../../UseProducts/UseProducts';
import ManageDeleteProduct from './ManageDeleteProduct';


const DeleteProduct = () => {
    const [products] = useProducts();

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Price per pics</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map(product => <ManageDeleteProduct key={product._id} product={product}>

                        </ManageDeleteProduct>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeleteProduct;