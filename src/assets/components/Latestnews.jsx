import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

function Latestnews() {
    return (
        <>
            <div className='w-full items-center flex justify-center flex-col pt-[7vw]'>
                <p className='Courgette-text text-[30px] leading-[-100px] text-red-600 mb-[-10px] new_p'>Latest News</p>
                <h2 className='bold-text text-[50px] tracking-[7px] text-black whitespace-nowrap leading-[-10px]'>THE BLOG</h2>
            </div>
            <div className='w-full flex justify-center items-center mt-10 gap-[30px] pb-20 c_news_div'>
                <div>
                    <div className='w-[370px] overflow-hidden rounded-xl mb-[60px]'>
                        <img className='rounded-xl hover:scale-[1.2] ease-in-out duration-500' src="blog1.webp" alt="" />
                    </div>
                    <h2 className='regular-text text-xl mt-[-30px] mb-[15px] tracking-widest'>BEST PLACES FOR WINE</h2>
                    <p className='text-[18px] opacity-[.7] w-[370px]'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                    <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>CONTINUE READING<FaLongArrowAltRight />
                    </Link>
                </div>
                <div>
                    <div className='w-[370px] overflow-hidden rounded-xl mb-[60px]'>
                        <img className='rounded-xl hover:scale-[1.2] ease-in-out duration-500' src="blog2.webp" alt="" />
                    </div>
                    <h2 className='regular-text text-xl mt-[-30px] mb-[15px] tracking-widest'>DEGGS AND CHEESE</h2>
                    <p className='text-[18px] opacity-[.7] w-[370px]'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                    <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>CONTINUE READING<FaLongArrowAltRight />
                    </Link>
                </div>
                <div>
                    <div className='w-[370px] overflow-hidden rounded-xl mb-[60px]'>
                        <img className='rounded-xl hover:scale-[1.2] ease-in-out duration-500' src="blog3.webp" alt="" />
                    </div>
                    <h2 className='regular-text text-xl mt-[-30px] mb-[15px] tracking-widest'>STYLE THE WEDDING PARTY</h2>
                    <p className='text-[18px] opacity-[.7] w-[370px]'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                    <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>CONTINUE READING <FaLongArrowAltRight />
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Latestnews