import React from 'react';
import { useAppSelector } from '../../lib1/hooks/redux';
import { getCart } from '../../../redux/cartSlice';
import Image from "next/image";

const DeliveryAddress = () => {
    const cart = useAppSelector(getCart);
    return (
        <div>
            
            <div className='border-b border-gray-300 py-2'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-lg'>1. Delivery Address</h1>
                    <p className='text-sm'>Keerthana <br />
                        ABC Apartment <br />
                        INDIA, <br />
                        Add delivery instructions</p>
                </div>
            </div>
            <div className='border-b border-gray-300 py-2'>
                <div className='flex justify-between w-[50%]'>
                    <h1 className='font-bold text-lg'>2. Items and delivery</h1>
                </div>
                {
                    cart.cart.map((product: any) => {
                        return (
                            <div key={product.id} className='my-4'>
                                <div className='flex'>
                                    <Image src={product.image} alt={product.title} width={100} height={100} />
                                    <div className='ml-4'>
                                        <h1 className='font-bold'>{product.title}</h1>
                                        <p className='text-2xl font-bold py-2 '>{`$${product.price}`}</p>

                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default DeliveryAddress