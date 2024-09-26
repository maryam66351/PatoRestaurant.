import React from 'react'
import { Link } from 'react-router-dom'

function Reservation() {
    return (
        <>
            <div className='bg-[#EFEFEF] h-[100vh] flex gap-40 justify-center pt-[120px] px-[13vw] c_reserv_div'>

                <div className='w-[550px] text-center  h-[80vh]'>
                    <p className='text-[34px] Courgette-text text-red-600 '>Reservation</p>
                    <h2 className='text-[50px] tracking-[6px] leading-none bold-text mb-10 bookt_p'>BOOK TABLE</h2>

                    <div className='flex gap-10 text-left reserv_inp_div'>

                        <div className='w-[350px]' >
                            <label htmlFor="date">Date</label>
                            <input className='w-full pl-5 py-3 px-5 border-[#d6d6d6] border-[1px] rounded-lg' type="date" />
                        </div>
                        <div className='w-[350px]'>
                            <label htmlFor="Name">Name</label>
                            <input className='w-full pl-5 py-3 border-[#d6d6d6] border-[1px] rounded-lg' type="text" placeholder='Name' />
                        </div>
                    </div>

                    <div className='flex gap-10 text-left mt-5 reserv_inp_div'>

                        <div className='w-[350px]' >
                            <label htmlFor="date">Time</label>
                            <input className='w-full pl-5 py-3 px-5 border-[#d6d6d6] border-[1px] rounded-lg' type="time" />
                        </div>
                        <div className='w-[350px]'>
                            <label htmlFor="Name">Phone</label>
                            <input className='w-full pl-5 py-3 border-[#d6d6d6] border-[1px] rounded-lg' type="text" placeholder='Phone' />
                        </div>
                    </div>
                    <div className='flex gap-10 text-left mt-5 reserv_inp_div'>

                        <div className='w-[350px]'>
                            <label htmlFor="Name"  >People</label>
                            <select className=' w-full px-5 py-3 border-[#d6d6d6] border-[1px] rounded-lg' >
                                <option value="" disabled>Select an option</option>
                                <option value="people1">People 1</option>
                                <option value="people2">People 2</option>
                                <option value="people3">People 3</option>
                                <option value="people4">People 4</option>
                                <option value="people5">People 5</option>
                            </select>
                        </div>
                        <div className='w-[350px]'>
                            <label htmlFor="Name">Email</label>
                            <input className='w-full pl-5 py-3 border-[#d6d6d6] border-[1px] rounded-lg' type="email" placeholder='Email' />
                        </div>
                    </div>

                    <div className=' text-white px-8 py-3 rounded-md mt-7'>
                        <Link className='bg-black text-[14px] px-9 tracking-wider py-3 rounded-lg' to='/'>BOOK TABLE</Link>
                    </div>

                </div>


                <div className='w-[440px] h-[400px] rounded-lg overflow-hidden mt-5 reserv_img'>
                    <img className='w-[100%] hover:scale-[1.2] ease-in-out duration-500' src="/reservation.webp" alt="" />
                </div>

            </div>
        </>

    )
}

export default Reservation