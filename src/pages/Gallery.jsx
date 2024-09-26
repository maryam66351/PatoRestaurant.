import React from 'react'
import { Link } from 'react-router-dom'
import { HiMiniEnvelope } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";


function Gallery() {
    return (
        <>
            <div className='w-full h-[500px] bg-[url(/reservationtopbgslider.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
                <h2 className='text-[55px] tracking-[6px] leading-none bold-text text-white c_galleryh2'>GALLERY</h2>
            </div>
            <div className='w-full flex justify-center items-center gap-5 py-20 c_gallerylinks'>
                <Link className='bg-black text-white px-5 py-[3px] rounded-lg regular-text'>ALL PHOTO</Link><Link className='regular-text'>INTERIOR</Link><Link className='regular-text'>FOOD</Link><Link className='regular-text'>EVENTS</Link><Link className='regular-text'>VIP GUESTS</Link>
            </div>

            <div className='w-full flex flex-col justify-center items-center gap-8 px-10 pb-16'>
                <div className='w-full flex gap-6 pr-0 c_galler'>
                    <div className='flex-1 group rounded-lg overflow-hidden relative'>
                        <img className='w-[100%] hover:scale-[1.2] duration-500' src="/photo-gallery-1.jpg.webp" alt="" />
                        <div className='w-full h-full group-hover:opacity-[.7] group-hover:bg-red-600 duration-500 absolute top-0 left-0 z-10 pointer-events-none'></div>
                        <div className='p-6 rounded-full bg-white absolute duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-[.7] pointer-events-none'>
                            <IoSearch />
                        </div>
                    </div>
                    <div className='flex-1 group rounded-lg overflow-hidden relative'>
                        <img className='w-[100%] hover:scale-[1.2] duration-500' src="/photo-gallery-2.jpg.webp" alt="" />
                        <div className='w-full h-full group-hover:opacity-[.7] group-hover:bg-red-600 duration-500 absolute top-0 left-0 z-10 pointer-events-none'></div>
                        <div className='p-6 rounded-full bg-white absolute duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-[.7] pointer-events-none'>
                            <IoSearch />
                        </div>
                    </div>
                    <div className='flex-1 group rounded-lg overflow-hidden relative'>
                        <img className='w-[100%] hover:scale-[1.2] duration-500' src="/photo-gallery-3.webp" alt="" />
                        <div className='w-full h-full group-hover:opacity-[.7] group-hover:bg-red-600 duration-500 absolute top-0 left-0 z-10 pointer-events-none'></div>
                        <div className='p-6 rounded-full bg-white absolute duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-[.7] pointer-events-none'>
                            <IoSearch />
                        </div>
                    </div>
                </div>

                <div className='w-full flex gap-6 pr-0 c_galler'>
                    <div className='flex-1 group rounded-lg overflow-hidden relative'>
                        <img className='w-[100%] hover:scale-[1.2] duration-500' src="/photo-gallery-4.webp" alt="" />
                        <div className='w-full h-full group-hover:opacity-[.7] group-hover:bg-red-600 duration-500 absolute top-0 left-0 z-10 pointer-events-none'></div>
                        <div className='p-6 rounded-full bg-white absolute duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-[.7] pointer-events-none'>
                            <IoSearch />
                        </div>
                    </div>
                    <div className='flex-1 group rounded-lg overflow-hidden relative'>
                        <img className='w-[100%] hover:scale-[1.2] duration-500' src="/photo-gallery-5.webp" alt="" />
                        <div className='w-full h-full group-hover:opacity-[.7] group-hover:bg-red-600 duration-500 absolute top-0 left-0 z-10 pointer-events-none'></div>
                        <div className='p-6 rounded-full bg-white absolute duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-[.7] pointer-events-none'>
                            <IoSearch />
                        </div>
                    </div>
                    <div className='flex-1 group rounded-lg overflow-hidden relative'>
                        <img className='w-[100%] hover:scale-[1.2] duration-500' src="/photo-gallery-6.webp" alt="" />
                        <div className='w-full h-full group-hover:opacity-[.7] group-hover:bg-red-600 duration-500 absolute top-0 left-0 z-10 pointer-events-none'></div>
                        <div className='p-6 rounded-full bg-white absolute duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-[.7] pointer-events-none'>
                            <IoSearch />
                        </div>
                    </div>
                </div>
                <div className='w-full flex gap-6 pr-0 c_galler'>
                    <div className='flex-1 group rounded-lg overflow-hidden relative'>
                        <img className='w-[100%] hover:scale-[1.2] duration-500' src="/photo-gallery-7.webp" alt="" />
                        <div className='w-full h-full group-hover:opacity-[.7] group-hover:bg-red-600 duration-500 absolute top-0 left-0 z-10 pointer-events-none'></div>
                        <div className='p-6 rounded-full bg-white absolute duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-[.7] pointer-events-none'>
                            <IoSearch />
                        </div>
                    </div>
                    <div className='flex-1 group rounded-lg overflow-hidden relative'>
                        <img className='w-[100%] hover:scale-[1.2] duration-500' src="/photo-gallery-8.webp" alt="" />
                        <div className='w-full h-full group-hover:opacity-[.7] group-hover:bg-red-600 duration-500 absolute top-0 left-0 z-10 pointer-events-none'></div>
                        <div className='p-6 rounded-full bg-white absolute duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-[.7] pointer-events-none'>
                            <IoSearch />
                        </div>
                    </div>
                    <div className='flex-1 group rounded-lg overflow-hidden relative'>
                        <img className='w-[100%] hover:scale-[1.2] duration-500' src="/photo-gallery-9.webp" alt="" />
                        <div className='w-full h-full group-hover:opacity-[.7] group-hover:bg-red-600 duration-500 absolute top-0 left-0 z-10 pointer-events-none'></div>
                        <div className='p-6 rounded-full bg-white absolute duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 opacity-0 group-hover:opacity-[.7] pointer-events-none'>
                            <IoSearch />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center gap-2 pb-16'>
                <Link className=' px-4 py-2 text-center bg-black text-white rounded-full'>1</Link><Link className=' px-4 py-2 text-center text-black border-[#222222 ] border-[1px] rounded-full hover:bg-black hover:text-white duration-300'>2</Link><Link className=' px-4 py-2 text-center text-black border-[#222222 ] border-[1px] rounded-full hover:bg-black hover:text-white duration-300'>3</Link>
            </div>

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

export default Gallery