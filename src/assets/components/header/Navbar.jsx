import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { LiaTripadvisor } from "react-icons/lia";
import { HiBars2 } from "react-icons/hi2";
import { useState, useEffect } from 'react';
import TopBtn from '../TopBtn';
import ToggleBar from '../ToggleBar';




function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hToggle, setHToggle] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleToggle = () => {
        setHToggle(prev => !prev);
    }

    return (
        <div>
            <div className={`w-full h-[100px] border-t-[7px] border-red-500 flex justify-between items-center px-[11.2vw] c_navbar duration-700 fixed z-10 top-0 ${scrolled ? 'bg-white' : 'bg-transparent'} max-w-[1600px]`}>

                <div>
                <Link to="/">
                <img className='cursor-pointer' src={` ${scrolled ? 'logo2.png.webp' : 'logo.png.webp'}`} alt="" />
                </Link> 
                </div>
                <div>
                    <ul className={`flex text-transform: uppercase gap-[45px] text-[13px] text-white regular-text `}>
                        <li><Link className={`${scrolled ? 'text-black' : 'text-white'}  hover:text-red-600 duration-500 cursor-pointer `} to='/'>Home</Link></li>
                        <li><Link className={`${scrolled ? 'text-black' : 'text-white'}  hover:text-red-600 duration-500 cursor-pointer `} to='/menu'>Menu</Link></li>
                        <li><Link className={`${scrolled ? 'text-black' : 'text-white'}  hover:text-red-600 duration-500 cursor-pointer `} to='/reservation'>Reservation</Link></li>
                        <li><Link className={`${scrolled ? 'text-black' : 'text-white'}  hover:text-red-600 duration-500 cursor-pointer `} to='/gallery'>Gallery</Link></li>
                        <li><Link className={`${scrolled ? 'text-black' : 'text-white'}  hover:text-red-600 duration-500 cursor-pointer `} to='/about'>About</Link></li>
                        <li><Link className={`${scrolled ? 'text-black' : 'text-white'}  hover:text-red-600 duration-500 cursor-pointer `} to='/blog'>Blog</Link></li>
                        <li><Link className={`${scrolled ? 'text-black' : 'text-white'}  hover:text-red-600 duration-500 cursor-pointer `} to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className={`flex justify-between items-center gap-[15px] text-[16px] text-white`}>
                    < LiaTripadvisor className={`text-[20px] n_icons  ${scrolled ? 'text-black' : ''} hover:text-red-600 duration-500 cursor-pointer `} />
                    <FaFacebookF className={`text-[17px] n_icons  ${scrolled ? 'text-black' : ''}  hover:text-red-600 duration-500 cursor-pointer`} />
                    <FaTwitter className={`text-[17px] n_icons  ${scrolled ? 'text-black' : ''}  hover:text-red-600 duration-500 cursor-pointer`} />
                    <div onClick={handleToggle} className='text-[38px] cursor-pointer '>
                        < HiBars2 className={` ${scrolled ? 'text-black' : ''}  hover:text-red-600 duration-500 cursor-pointer n_icons`} />
                    </div>

                </div>
            </div>
            <TopBtn scrolled={scrolled} />
            <ToggleBar setHToggle={setHToggle} hToggle={hToggle} handleToggle={handleToggle}/>
        </div>
    )
}

export default Navbar