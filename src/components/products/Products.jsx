import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../product/Product';

const Products = () => {  
  const products = useLoaderData();

    return (
        <div className="grid gap-5 lg:grid-cols-3">
           {
            products.map((product)=><Product key={product._id} product={product}/>)
           } 
        </div>
    );
};

export default Products;