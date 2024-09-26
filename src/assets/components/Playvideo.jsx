import React from 'react'
import { IoMdPlay } from "react-icons/io";


function Playvideo() {
    return (
        <>
            <div className='w-full h-screen flex justify-center items-center bg-[url(/ourvideo.jpg)] bg-cover bg-fixed'>
                <div className='w-full text-center p_vid'>
                    <p className='Courgette-text text-[34px] leading-[-100px] text-red-600 mb-[-10px]'>Discover</p>
                    <h2 className='bold-text text-[60px] tracking-[7px] text-white whitespace-nowrap leading-[-10px]'>OUR VIDEO</h2>
                    <div className='w-16 h-16 rounded-full flex justify-center items-center m-auto bg-white hover:scale-[1.2] duration-700 hover:bg-red-600 hover:opacity-[.7] hover:text-white cursor-pointer'>
                        <IoMdPlay className='text-[20px]' />
                    </div>


                </div>

            </div>
        </>
    )
}

export default Playvideo