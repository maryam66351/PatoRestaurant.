import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


function AfterSlider() {
    return (
        <div className='flex justify-between items-center w-full h-[100vh] bg-[#EDEDED] px-[15vw] gap-[120px] c_sliderafter'>
            <div className='w-[550px] flex justify-center items-center flex-col'>
                <p className='text-[33px] text-red-600 Courgette-text'>Italian Restaurant</p>
                <h2 className='text-[55px] tracking-[6px] leading-none bold-text mb-10 '>WELCOME</h2>
                <p className='text-center opacity-[.7] text-[18px] c_sliderp'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                <Link className='flex justify-center items-center mt-8 text-[15px] opacity-[.7] tracking-wider hover:text-red-600 duration-500'>OUR STORY <FaLongArrowAltRight />
                </Link>
            </div>


            <div className='w-[440px] rounded-lg overflow-hidden'>
                <img src="/our-story-01.jpg.webp" alt="" />
            </div>
        </div>
    )
}

export default AfterSlider