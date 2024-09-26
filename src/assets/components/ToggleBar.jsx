import React from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";


function ToggleBar({ setHToggle, hToggle, handleToggle }) {
    return (
        <>

            <div className={`w-[400px] h-screen ctoggle flex flex-col justify-center items-center bg-white py-16 fixed top-0 z-50 duration-500 ${hToggle ? "right-0" : "right-[-500px]"}`}>
                <IoCloseOutline onClick={handleToggle} className='ml-auto text-[30px] shrink-0 mt-[-20px] mr-10 cursor-pointer  hover:text-red-600 duration-500' />
                <ul className='text-center list-none tracking-wider'>
                    <li className='mb-2'><Link to="/">HOME</Link></li>
                    <li className='mb-2'><Link to="/menu">MENU</Link></li>
                    <li className='mb-2'><Link to="/gallery">GALLERY</Link></li>
                    <li className='mb-2'><Link to="/about">ABOUT</Link></li>
                    <li className='mb-2'><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>

                <Link to="/reservation" ><p className='bg-black px-10 py-2 rounded-lg text-white text-[13px] mt-5 mb-10'>RESERVATION</p></Link>


                <div className='flex-1 text-center'>
                    <h3 className=' text-black regular-text mb-6 text-[18px] tracking-wider'>GALLERY</h3>
                    <div className='flex gap-2'>
                        <img className='w-[5.3vw] h-[5.3vw] object-cover ' src="fg1.webp" alt="" /><img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg2.webp" alt="" /><img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg3.webp" alt="" /><img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg4.webp" alt="" />
                    </div>
                    <div className='flex gap-2 my-2'>
                        <img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg5.webp" alt="" /><img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg6.webp" alt="" /><img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg7.webp" alt="" /><img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg8.webp" alt="" />
                    </div>
                    <div className='flex gap-2'>
                        <img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg9.webp" alt="" /><img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg10.webp" alt="" /><img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg11.webp" alt="" /><img className='w-[5.3vw] h-[5.3vw] object-cover' src="fg12.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToggleBar