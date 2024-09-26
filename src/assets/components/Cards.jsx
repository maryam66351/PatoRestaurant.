import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

function Cards() {
    return (
        <div className='w-full h-[calc(100vh-50px)] flex justify-center items-center gap-[30px] c_Cards'>
            <div>
                <div className='w-[370px] overflow-hidden rounded-xl mb-[60px]'>
                    <img className='rounded-xl hover:scale-[1.2] ease-in-out duration-500' src="card1.webp" alt="" />
                </div>
                <h2 className='regular-text text-xl mt-[-30px] mb-[15px] tracking-widest'>ROMANTIC RESTAURANT</h2>
                <p className='text-[18px] opacity-[.7] w-[370px]'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>LEARN MORE <FaLongArrowAltRight />
                </Link>
            </div>
            <div>
                <div className='w-[370px] overflow-hidden rounded-xl mb-[60px]'>
                    <img className='rounded-xl hover:scale-[1.2] ease-in-out duration-500' src="card2.webp" alt="" />
                </div>
                <h2 className='regular-text text-xl mt-[-30px] mb-[15px] tracking-widest'>DELICIOUS FOOD</h2>
                <p className='text-[18px] opacity-[.7] w-[370px]'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>LEARN MORE <FaLongArrowAltRight />
                </Link>
            </div>
            <div>
                <div className='w-[370px] overflow-hidden rounded-xl mb-[60px]'>
                    <img className='rounded-xl hover:scale-[1.2] ease-in-out duration-500' src="card3.webp" alt="" />
                </div>
                <h2 className='regular-text text-xl mt-[-30px] mb-[15px] tracking-widest'>RED WINES YOU LOVE</h2>
                <p className='text-[18px] opacity-[.7] w-[370px]'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                <Link to="/" className='flex  items-center mt-8 text-[13px] opacity-[.7] tracking-wider gap-4 light-text opacity-[.7] hover:text-red-600 duration-500'>LEARN MORE <FaLongArrowAltRight />
                </Link>
            </div>
        </div>
    )
}

export default Cards