import React from 'react'
import Playvideo from '../assets/components/Playvideo'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SpecialSignUp from '../assets/components/SpecialSignUp'

function About() {
    return (
        <div className='c_aboutDiv'>
            <div className='w-full h-[500px] bg-[url(/menupage.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
                <h2 className='text-[55px] tracking-[6px] leading-none bold-text text-white c_aboutH2'>ABOUT</h2>
            </div>
            <div className='w-full flex flex-col justify-center items-center py-28 bg-[#F4F1EB]'>
                <p className='text-[33px] text-red-600 Courgette-text ml-0'>Italian Restaurant</p>
                <h2 className='text-[55px] tracking-[6px] leading-none bold-text c_aboutH2'>OUR STORY</h2>
                <p className='text-center w-[55vw] mt-10 leading-8 text-gray-600 c_aboutP'>Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec hate diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.</p>
            </div>

            <Playvideo />

            <div className='flex justify-between items-center w-full h-[80vh] bg-[#EDEDED] px-[15vw] gap-[120px] c_sliderafter c_aboutrecipe'>
                <div className='w-[550px] flex justify-center items-center flex-col'>
                    <p className='text-[33px] text-red-600 Courgette-text'>Delicious</p>
                    <h2 className='text-[55px] tracking-[6px] leading-none bold-text mb-10 recipep'>RECIPES</h2>
                    <p className='text-center opacity-[.7] text-[18px] c_sliderp'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                    <Link className='flex justify-center items-center mt-8 text-[15px] opacity-[.7] tracking-wider hover:text-red-600 duration-500'>OUR STORY <FaLongArrowAltRight />
                    </Link>
                </div>


                <div className='w-[440px] rounded-lg overflow-hidden c_aboutimg'>
                    <img src="/our-story-01.jpg.webp" alt="" />
                </div>
            </div>
            <div className='flex flex-row-reverse justify-between items-center w-full h-[80vh] bg-[#EDEDED] px-[15vw] gap-[120px] c_sliderafter c_aboutrecipe'>
                <div className='w-[550px] flex justify-center items-center flex-col'>
                    <p className='text-[33px] text-red-600 Courgette-text'>Romantic</p>
                    <h2 className='text-[55px] tracking-[6px] leading-none bold-text mb-10 restaurantp'>RESTAURANT</h2>
                    <p className='text-center opacity-[.7] text-[18px] c_sliderp'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                    <Link className='flex justify-center items-center mt-8 text-[15px] opacity-[.7] tracking-wider hover:text-red-600 duration-500'>OUR STORY <FaLongArrowAltRight />
                    </Link>
                </div>


                <div className='w-[440px] rounded-lg overflow-hidden c_aboutimg'>
                    <img src="/our-story-01.jpg.webp" alt="" />
                </div>
            </div>
            <div className='w-full h-[500px] bg-[url(/bg-cover-video-02.webp)] bg-no-repeat bg-cover bg-fixed flex justify-center items-center'></div>
            <div className='w-full flex flex-col justify-center items-center mt-16'>
                <p className='text-[33px] text-red-600 Courgette-text'>Meet Ours</p>
                <h2 className='text-[55px] tracking-[6px] leading-none bold-text mb-10 '>CHEF</h2>
            </div>

            <div className='w-full flex justify-center items-center gap-8 px-40 py-16 c_about-testimonial'>
                <div className='flex-1 flex flex-col rounded-xl items-center justify-center text-center border-gray-300 border-[2px] px-6 relative py-20'><img className='rounded-full w-[100px] h-[100px] absolute top-[-50px] border-red-600 border-[4px] cursor-pointer' src="/chef1.webp" alt="" /> <h2 className='bold-text tracking-wider'>Peter Hart</h2><p className='text-gray-500'>CHEF</p><p className='text-gray-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum assumenda fuga voluptate et.</p></div>
                <div className='flex-1 flex flex-col rounded-xl items-center justify-center text-center border-gray-300 border-[2px] px-6 relative py-20'><img className='rounded-full w-[100px] h-[100px] absolute top-[-50px] border-red-600 border-[4px] cursor-pointer' src="/chef2.webp" alt="" /> <h2 className='bold-text tracking-wider'>Joyce Bowman</h2><p className='text-gray-500'>CHEF</p><p className='text-gray-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum assumenda fuga voluptate et.</p></div>
                <div className='flex-1 flex flex-col rounded-xl items-center justify-center text-center border-gray-300 border-[2px] px-6 relative py-20'><img className='rounded-full w-[100px] h-[100px] absolute top-[-50px] border-red-600 border-[4px] cursor-pointer' src="/chef3.webp" alt="" /> <h2 className='bold-text tracking-wider'>Peter Hart</h2><p className='text-gray-500'>CHEF</p><p className='text-gray-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum assumenda fuga voluptate et.</p></div>
            </div>
            <SpecialSignUp />

        </div>
    )
}

export default About