import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { CiShoppingCart } from "react-icons/ci";


const CartButton = () => {
  return (
    <Link href={'/cart'} className='headerItem text-xs text-gray-100 relative '>
        <CiShoppingCart className='w-auto h-8 object-cover'/>
   
        
          <p className='text-xs text-white font-bold mt-3'>Cart</p>
          <span className='absolute text-amazonOrangeDark text-sm
          top-1  left-[21px] font-semibold'>0</span>
          </Link>
  )
}

export default CartButton
