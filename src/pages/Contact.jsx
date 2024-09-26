import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall, IoIosTime } from "react-icons/io";



function Contact() {
    return (
        <div className='c_contactpage'>
            <div className='w-full h-[500px] bg-[url(/blogslider.webp)] bg-no-repeat bg-cover bg-fixed flex justify-center items-center'>
                <h2 className='text-[55px] tracking-[6px] leading-none bold-text text-white c_contactH2'>CONTACT</h2>
            </div>
            <div className='w-[100%] h-[450px] pt-10 rounded-xl overflow-hidden bg-[#EFEFEF]'>
                <iframe className='w-[77%] h-full m-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1718273528619!5m2!1sen!2s"></iframe>
            </div>

            <div className='w-full flex flex-col justify-center m-auto py-16 bg-[#EFEFEF]'>

                <div className='w-full text-center'>
                    <h2 className='light-text text-2xl  my-8 tracking-widest'>SEND US A MESSAGE</h2>
                </div>
                <div className='flex w-[70%] justify-center items-center gap-10 m-auto c_contactpage_inputsdiv'>
                    <div className='flex-1'>
                        <label htmlFor="">Name</label>
                        <input className='w-full bg-white outline-none border-gray-300 border-[1px] px-2 py-3 rounded-lg' placeholder='Name' type="text" />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="">E-mail</label>
                        <input className='w-full bg-white outline-none border-gray-300 border-[1px] px-2 py-3 rounded-lg' placeholder='E-mail' type="text" />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="">Phone</label>
                        <input className='w-full bg-white outline-none border-gray-300 border-[1px] px-2 py-3 rounded-lg' placeholder='Phone' type="text" />
                    </div>
                </div>

                <div className='w-[70%] m-auto mt-6 c_contactpage_textarea'>
                    <label htmlFor="">Message</label>
                    <textarea className='w-full outline-none px-2 py-3 rounded-lg' name="" id="" placeholder='Message' style={{ height: "200px" }}></textarea>
                </div>
                <Link className='bg-black text-white w-[100px] py-2 text-center rounded-lg m-auto tracking-wider mt-10 hover:bg-red-600 duration-500'>SUBMIT</Link>
            </div>


            {/* ================================= */}
            <div className='w-full flex justify-center  gap-10 bg-[#EFEFEF] px-36 pb-16 c_contactpage_location'>
                <div className='flex-1 flex gap-5'>
                    <div>
                        <FaLocationDot className='text-xl' />

                    </div>
                    <div className=''>
                        <h2 className='text-2xl regular-text tracking-wider'> LOCATION</h2>
                        <p className='text-[14px] text-gray-500 mt-3'>8th floor, 379 Hudson St,<br /> New York, NY 10018</p>
                    </div>
                </div>
                <div className='flex-1 flex gap-5'>
                    <div>
                        <IoIosCall
                            className='text-xl' />

                    </div>
                    <div>
                        <h2 className='text-2xl regular-text tracking-wider'>
                            CALL US</h2>
                        <p className='text-[14px] text-gray-500 mt-3'>(+1) 96 716 6879
                        </p>
                    </div>
                </div>
                <div className='flex-1 flex gap-5'>
                    <div>
                        <IoIosTime
                            className='text-xl' />

                    </div>
                    <div className=''>
                        <h2 className='text-2xl regular-text tracking-wider'> LOCATION</h2>
                        <p className='text-[14px] text-gray-500 mt-3'>09:30 AM – 11:00 PM <br />
                            Every Day
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact