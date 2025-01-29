import React from 'react'
import { BiCaretDown } from 'react-icons/bi'

const SigninButton = () => {
  return (
    <form action=''
     className='text-xs text-gray-100 flex-col justify-center items-start headerItem'>
      <p>Hi, SignIn</p>
      <button className='text-white font-bold flex items-center'>
        Account & Lists{" "}
        <span>
            <BiCaretDown />
        </span>
      </button>
    </form>
  )
}

export default SigninButton
