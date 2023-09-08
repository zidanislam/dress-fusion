import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ListProduct from '../product/ListProduct';

const ListProducts = () => {
    const products = useLoaderData();
    return (
        <div className="grid gap-5 lg:grid-cols-1">
           {
            products.map((product)=><ListProduct key={product._id} product={product}/>)
           } 
        </div>
    );
};

export default ListProducts;