import React from 'react'
import { FaLocationDot, FaEnvelope, FaFacebookF } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { LiaTripadvisor } from "react-icons/lia";





function Footer() {
    return (
        <>
            <div className='w-full flex h-[70vh] bg-[#222222] py-20 px-40 gap-14 footer_main_div'>
                <div className='flex flex-1 flex-col gap-10'>
                    <div>
                        <h3 className=' text-white text-[18px] regular-text mb-6 tracking-wider'>CONTACT US</h3>
                        <div className='flex items-center text-[#999999] gap-2'>
                            <FaLocationDot /> <p>8th floor, 379 Hudson St, New York, NY 10018</p>
                        </div>
                        <div className='flex items-center text-[#999999] gap-2 my-4'>
                            <IoIosCall />
                            <p>(+1) 96 716 6879</p>
                        </div>
                        <div className='flex items-center text-[#999999] gap-2'>
                            <FaEnvelope />

                            <p>contact@site.com</p>
                        </div>
                    </div>
                    <div className=' text-[#999999] mt-4'>
                        <h3 className=' text-white text-[18px] regular-text mb-6 tracking-wider'>OPENING TIMES</h3>
                        <p>09:30 AM – 11:00 PM</p>
                        <p>Every Day</p>
                    </div>

                </div>

                <div className=' flex-1 text-[#999999]'>
                    <h3 className=' text-white regular-text mb-6 text-[18px] tracking-wider'>LATEST TWITTER</h3>
                    <div className='flex gap-2 items-center '>
                        <FaTwitter className='text-white' />
                        <p className='text-red-500'>@colorlib</p>
                    </div>
                    <p className='text-[14px]'>Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
                    <p className='text-red-600 text-[14px]'>https://buff.ly/2zaSfAQ</p>
                    <p className='my-4 text-[12px]'>21 Dec 2017</p>
                    <div className='flex gap-2 items-center '>
                        <FaTwitter className='text-white' />
                        <p className='text-red-500'>@colorlib</p>
                    </div>
                    <p className='text-[14px]'>Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
                    <p className='text-red-600 text-[14px]'>https://buff.ly/2zaSfAQ</p>
                    <p className='my-4 text-[12px]'>21 Dec 2017</p>

                </div>

                <div className='flex-1 c_gallery'>
                    <h3 className=' text-white regular-text mb-6 text-[18px] tracking-wider'>GALLERY</h3>
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
            <div className='w-full flex justify-between items-center text-white h-[80px] bg-[#111111] px-40 c_footer_bottom'>
                <div className='flex items-center gap-4'>
                    <LiaTripadvisor className='text-[22px]  hover:text-red-600 duration-500 cursor-pointer'/>
                    <FaFacebookF className=' hover:text-red-600 duration-500 cursor-pointer' />
                    <FaTwitter className=' hover:text-red-600 duration-500 cursor-pointer'/>

                </div>
                <div className='flex'>
                    <p className='text-[#999999]'>@ 2017 PATO. &nbsp;</p>
                    <p className='cursor-pointer hover:text-red-600 duration-500'>Get The Theme</p>
                </div>
            </div>
        </>

    )
}

export default Footer