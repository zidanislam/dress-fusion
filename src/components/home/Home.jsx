import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const products =useLoaderData();
    return (
        <>
            <h2>products {products.length}</h2>
        </>
    );
};

export default Home;