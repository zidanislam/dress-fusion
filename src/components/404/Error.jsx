import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Link to="/" className='text-indigo-700 font-semibold flex justify-center'><button className='border border-indigo-700 rounded-lg px-5 py-3 mt-4'>Return Home</button></Link>
            <img src="https://i.ibb.co/HV2vs0N/404.jpg" className='w-2/5 m-auto' alt="" />
        </div>
    );
};

export default Error;