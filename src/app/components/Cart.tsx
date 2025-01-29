"use client"
import React from 'react'
import ShoppingCart from './ShoppingCart'
import ProccedToBuy from './ProceedToBuy'
import { useAppSelector } from '../../lib1/hooks/redux';
import { getCart } from '../../../redux/cartSlice';

const Cart = () => {
    const cart = useAppSelector(getCart);
    let totalPrice = 0;
    cart.cart.forEach((item:any) => {
        totalPrice += item.price * item.quantity;
    });
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className='flex w-full justify-between'>
                <ShoppingCart cart={cart} totalPrice={totalPrice}/>
                <ProccedToBuy length={cart.cart.length} totalPrice={totalPrice}/>
            </div>
        </div>
    )
}

export default Cart