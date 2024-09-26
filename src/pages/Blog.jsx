import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";

function Blog() {
    return (
        <div className='c_blog'>
            <div className='w-full h-[500px] bg-[url(/blogslider.webp)] bg-no-repeat bg-cover bg-fixed flex justify-center items-center'>
                <h2 className='text-[55px] tracking-[6px] leading-none bold-text text-white'>BLOG</h2>
            </div>


            <div className='w-full flex gap-10 px-44 py-10 c_blog_inner'>
                <div className='w-[70%]'>
                    <div className='w-full mt-5'>
                        <div className='w-full'>
                            <div className='w-[100%] h-[400px] bg-slate-400 rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover hover:scale-[1.2] duration-500' src="/blogslider.webp" alt="" />
                            </div>
                            <h2 className='light-text text-3xl  my-5 tracking-widest'>COOKING RECIPE DELICIOUS</h2>
                            <p className='text-[13px] opacity-[.7] mb-5'>by Admin |
                                December 28, 2018 |
                                Cooking, Food |
                                8 Comments</p>
                            <p className='text-[18px] opacity-[.7] text-wrap cblogp '>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>CONTINUE READING<FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        <div className='w-full'>
                            <div className='w-[100%] h-[400px] bg-slate-400 rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover hover:scale-[1.2] duration-500' src="/blog-06.webp" alt="" />
                            </div>
                            <h2 className='light-text text-3xl  my-5 tracking-widest'>COOKING RECIPE DELICIOUS</h2>
                            <p className='text-[13px] opacity-[.7] mb-5'>by Admin |
                                December 28, 2018 |
                                Cooking, Food |
                                8 Comments</p>
                            <p className='text-[18px] opacity-[.7] text-wrap cblogp'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>CONTINUE READING<FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        <div className='w-full'>
                            <div className='w-[100%] h-[400px] bg-slate-400 rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover hover:scale-[1.2] duration-500' src="/blog-07.webp" alt="" />
                            </div>
                            <h2 className='light-text text-3xl  my-5 tracking-widest'>COOKING RECIPE DELICIOUS</h2>
                            <p className='text-[13px] opacity-[.7] mb-5'>by Admin |
                                December 28, 2018 |
                                Cooking, Food |
                                8 Comments</p>
                            <p className='text-[18px] opacity-[.7] text-wrap cblogp'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>CONTINUE READING<FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        <div className='w-full'>
                            <div className='w-[100%] h-[400px] bg-slate-400 rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover hover:scale-[1.2] duration-500' src="/blog-068.webp" alt="" />
                            </div>
                            <h2 className='light-text text-3xl  my-5 tracking-widest'>COOKING RECIPE DELICIOUS</h2>
                            <p className='text-[13px] opacity-[.7] mb-5'>by Admin |
                                December 28, 2018 |
                                Cooking, Food |
                                8 Comments</p>
                            <p className='text-[18px] opacity-[.7] text-wrap cblogp'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>CONTINUE READING<FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>


                <div className='w-[30%] pl-10 border-gray-400 border-l-[1px] cblogSearch'>
                    <div className='w-full flex justify-between items-center border-black border-[1px] c_blog_search'>
                        <input className='w-full outline-none border-none bg-transparent pl-4' placeholder='Search' type="text" />
                        <div className='bg-gray-600 p-4 text-white'>
                            <LiaSearchSolid />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h2 className='light-text text-2xl'>CATEGORIES</h2>
                        <div className='light-text text-gray-600 flex flex-col gap-2 mt-4'>
                            <p>COOKING RECIPE</p>
                            <p>DELICIOUS FOODS</p>
                            <p>EVENTS DESIGN</p>
                            <p>RESTAURANT PLACE</p>
                            <p>WORDPRESS</p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h2 className='light-text text-2xl'>MOST POPULAR</h2>
                        <div className='light-text text-gray-600 flex flex-col gap-2 mt-4'>
                            <div className='flex gap-3'>
                                <img className='w-[100px] h-[80px] rounded-xl' src="blog1.webp" alt="" />
                                <div >
                                    <p className='text-[13px]'>BEST PLACES FOR WINE</p>
                                    <p className='text-[13px] mt-5'>3 days ago</p>
                                </div>

                            </div>
                        </div>
                        <div className='light-text text-gray-600 flex flex-col gap-2 mt-4'>
                            <div className='flex gap-3'>
                                <img className='w-[100px] h-[80px] rounded-xl' src="blog1.webp" alt="" />
                                <div >
                                    <p className='text-[13px]'>BEST PLACES FOR WINE</p>
                                    <p className='text-[13px] mt-5'>3 days ago</p>
                                </div>

                            </div>
                        </div>
                        <div className='light-text text-gray-600 flex flex-col gap-2 mt-4'>
                            <div className='flex gap-3'>
                                <img className='w-[100px] h-[80px] rounded-xl' src="blog1.webp" alt="" />
                                <div >
                                    <p className='text-[13px]'>BEST PLACES FOR WINE</p>
                                    <p className='text-[13px] mt-5'>3 days ago</p>
                                </div>

                            </div>
                        </div>
                        <div className='light-text text-gray-600 flex flex-col gap-2 mt-4'>
                            <div className='flex gap-3'>
                                <img className='w-[100px] h-[80px] rounded-xl' src="blog1.webp" alt="" />
                                <div >
                                    <p className='text-[13px]'>BEST PLACES FOR WINE</p>
                                    <p className='text-[13px] mt-5'>3 days ago</p>
                                </div>

                            </div>
                        </div>
                        <div className='light-text text-gray-600 flex flex-col gap-2 mt-4'>
                            <div className='flex gap-3'>
                                <img className='w-[100px] h-[80px] rounded-xl' src="blog1.webp" alt="" />
                                <div >
                                    <p className='text-[13px]'>BEST PLACES FOR WINE</p>
                                    <p className='text-[13px] mt-5'>3 days ago</p>
                                </div>

                            </div>
                        </div>
                        <div className='mt-10'>
                        <h2 className='light-text text-2xl'>ARCHIVE</h2>
                        <div className='light-text text-gray-600 flex flex-col gap-2 mt-4'>
                            <p>JULY 2018</p>
                            <p>JUNE 2018</p>
                            <p>MAY 2018</p>
                            <p>APRIL 2018   </p>
                            <p>MARCH 2018</p>
                            <p>FEBRUARY 2018</p>
                            <p>JANUARY 2018</p>
                            <p>DECEMBER 2017</p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center gap-2 pb-16'>
                <Link className=' px-4 py-2 text-center bg-black text-white rounded-full'>1</Link><Link className=' px-4 py-2 text-center text-black border-[#222222 ] border-[1px] rounded-full hover:bg-black hover:text-white duration-300'>2</Link><Link  className=' px-4 py-2 text-center text-black border-[#222222 ] border-[1px] rounded-full hover:bg-black hover:text-white duration-300'>3</Link>
            </div>
        </div>
    )
}

export default Blog