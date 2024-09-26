import React from 'react'
import { HiMiniEnvelope } from "react-icons/hi2";


function SpecialSignUp() {
  return (
    <>
    <div className='w-full h-[250px] flex justify-center items-center gap-9 bg-[#EFEFEF] c_special'>
        <h2 className='regular-text text-[22px] tracking-widest opacity-[.9]' >SPECIALS SIGN UP</h2>
        <div className='flex w-[18vw] justify-center items-center border-[#8c8c8cbe] border-[1px] rounded-lg px-3 py-3 bg-white c_specialinnerdiv'>
            <input className='bg-transparent outline-none w-full' type="email" placeholder='Email Address' />
            <HiMiniEnvelope className='opacity-[.7]' />
        </div>
        <p className='bg-black px-14 py-3 rounded-lg text-white text-[13px] hover:bg-red-600 duration-500 hover:text-white cursor-pointer'>SIGN-UP</p>

    </div>
    </>
  )
}

export default SpecialSignUp