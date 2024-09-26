import React from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


function TopBtn({scrolled}) {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scroll
        });}
  return (
    <div onClick={scrollToTop} className={`text-white text-[25px] rounded-sm cursor-pointer bg-gray-500  hover:bg-red-600 duration-500 w-10 h-10 flex justify-center items-center  ${scrolled ? 'clicktotop':'hidden'} `}>
        <MdKeyboardDoubleArrowUp  />
    </div>
  )
}

export default TopBtn