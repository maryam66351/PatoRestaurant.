import React from 'react'
import { Link } from 'react-router-dom'

function OurMenu() {
    return (
        <div className='c_our_menu'>
            <div className='w-full flex justify-center items-center flex-col bg-[#F5F2EC] pt-[100px] pb-[30px] c_menu'>
                <p className='text-[36px] text-red-600 Courgette-text'>Discover</p>
                <h2 className='text-[58px] tracking-[9px] leading-none bold-text mb-10'>OUR MENU</h2>
            </div>

            <div className='flex w-full gap-8 justify-center items-center bg-[#F4F0EB] c_menu_1'>

                <div className='flex gap-8 c_menu_1_1'>
                    <div className='w-[370px] h-[550px] bg-slate-500 rounded-xl relative overflow-hidden'>
                        <img className='object-cover w-[370px] h-[550px] hover:scale-[1.1] ease-in-out duration-500' src="/menu1.webp" alt="" />
                        <Link className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hover:bg-red-600 duration-500 hover:text-white bg-[#ffffffce] px-9 py-4 tracking-widest rounded-xl regular-text text-[20px]' to="/">LUNCH</Link>
                    </div>
                    <div className='w-[370px] h-[550px] bg-slate-500 rounded-xl relative overflow-hidden'>
                        <img className='object-cover w-[370px] h-[550px] hover:scale-[1.1] ease-in-out duration-500' src="/menu2.webp" alt="" />
                        <Link className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hover:bg-red-600 duration-500 hover:text-white bg-[#ffffffce] px-9 py-4 tracking-widest rounded-xl regular-text text-[20px]' to="/">DINNER</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-10 c_menu_1_2'>
                    <div className='h-[255px] w-[370px] rounded-lg overflow-hidden relative'>
                        <img className='hover:scale-[1.1] ease-in-out duration-500 h-full' src="/menu3.webp" alt="" />
                        <Link className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hover:bg-red-600 duration-500 hover:text-white bg-[#ffffffce] px-9 py-4 tracking-widest rounded-xl regular-text text-[20px]' to="/">DRINK</Link>
                    </div>
                    <div className='h-[255px] w-[370px] rounded-lg overflow-hidden relative'>
                        <img className='hover:scale-[1.1] ease-in-out duration-500 h-full' src="/menu4.webp" alt="" />
                        <Link className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hover:bg-red-600 duration-500 hover:text-white bg-[#ffffffce] px-9 py-4 tracking-widest rounded-xl regular-text text-[20px]' to="/">STARTERS</Link>
                    </div>
                </div>
            </div>
          
                <div className='flex justify-center items-center bg-[#F4F0EB] gap-8 pt-10 pb-36 c_menu_2'>
                    <div className='h-[255px] w-[780px] rounded-lg overflow-hidden relative bg-black'>
                        <img className='h-[255px] w-[780px] hover:scale-[1.1] ease-in-out duration-500' src="/menu5.webp" alt="" />
                        <Link className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hover:bg-red-600 duration-500 hover:text-white bg-[#ffffffce] px-9 py-4 tracking-widest rounded-xl regular-text text-[20px]' to="/">HAPPY HOUR</Link>
                    </div>
                    <div className='h-[255px] w-[370px] rounded-lg overflow-hidden relative bg-black'>
                        <img className='hover:scale-[1.1] ease-in-out duration-500 h-[255px]' src="/menu6.webp" alt="" />
                        <Link className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hover:bg-red-600 duration-500 hover:text-white bg-[#ffffffce] px-9 py-4 tracking-widest rounded-xl regular-text text-[20px]' to="/">DESSERT</Link>
                    </div>
                </div>
        
        </div>

    )
}

export default OurMenu