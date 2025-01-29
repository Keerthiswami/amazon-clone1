import React from 'react'
import Link from 'next/link'
const Favorite = () => {
  return (
    <Link href={'/favorite'} className='headerItem text-xs text-gray-100 hidden lg:inline-flex flex-col justify-center item-start relative'>
        <p>Marked</p>
        <p className='text-white font-bold'>& Favorite</p>
        <span className='absolute right-0 top-2 w-4 h-4 border-[1px]
        border-gray-400 headerItem px-0 text-xs text-amazonOrangeDark font-md rounded-sm'>0</span>
    </Link>
  )
}

export default Favorite
