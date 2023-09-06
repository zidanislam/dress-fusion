import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import React from 'react';

const CartIcon = () => {
    return (
        <div className='flex justify-center align-middle relative cursor-pointer'>
            <ShoppingCartIcon className='h-10 w-10 p-2 fixed border border-black bg-black text-white rounded-full bottom-5 right-20 z-50 drop-shadow-xl'/>
            
        </div>
    );
};

export default CartIcon;