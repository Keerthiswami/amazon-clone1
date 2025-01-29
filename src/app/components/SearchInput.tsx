'use client'

import React, { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    console.log(searchQuery);
  return (
    <div className='flex-1 h-10 mx-4 md:inline-flex items-center justify-between relative '>
      
     <input type="text" 
     placeholder='Search products'
     className='w-full h-full rounded-md px-2 
     placeholder:text-sm text-base text-black border-[3px]
     border-transparent outline-none
     focus-visible:border-amazonOrange'
     value={searchQuery}
     onChange={(e)=>setSearchQuery(e.target.value)}/>
     {searchQuery && (
        <MdOutlineClose onClick={()=>setSearchQuery('')}
        className='text-xl text-amazonLight hover:text-red-600 
        absolute right-14 duration-200 cursor-pointer'/>
     )}
    
    <span className='w-12 h-full bg-amazonOrange hover:bg-amazonOrangeDark 
    duration-200 cursor-pointer text-black text-2xl flex items-center justify-center
    rounded-tr-md rounded-br-md absolute-right-0'
    >
        <HiOutlineSearch />
    </span>
    </div>
  )
}

export default SearchInput
