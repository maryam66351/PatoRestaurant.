import React from 'react'
import { Link } from 'react-router-dom'

function ReservationMain() {
    return (
        <div className='c_reservationmain'>
            <div className='w-full h-[500px] bg-[url(/reservationtopbgslider.webp)] bg-no-repeat bg-cover flex justify-center items-center'>
                <h2 className='text-[55px] tracking-[6px] leading-none bold-text text-white c_reservationmainH2 '>RESERVATION</h2>
            </div>

            <div className='w-[550px] text-center  h-[80vh] m-auto pt-10 c_reservationmainform'>
                <p className='text-[34px] Courgette-text text-red-600'>Reservation</p>
                <h2 className='text-[50px] tracking-[6px] leading-none bold-text mb-10 bookt_p'>BOOK TABLE</h2>

                <div className='flex gap-10 text-left c_reservationinputdiv'>

                    <div className='w-[350px]' >
                        <label htmlFor="date">Date</label>
                        <input className='w-full pl-5 py-3 px-5 border-[#d6d6d6] border-[1px] rounded-lg' type="date" />
                    </div>
                    <div className='w-[350px]'>
                        <label htmlFor="Name">Name</label>
                        <input className='w-full pl-5 py-3 border-[#d6d6d6] border-[1px] rounded-lg' type="text" placeholder='Name' />
                    </div>
                </div>

                <div className='flex gap-10 text-left mt-5 c_reservationinputdiv'>

                    <div className='w-[350px]' >
                        <label htmlFor="date">Time</label>
                        <input className='w-full pl-5 py-3 px-5 border-[#d6d6d6] border-[1px] rounded-lg' type="time" />
                    </div>
                    <div className='w-[350px]'>
                        <label htmlFor="Name">Phone</label>
                        <input className='w-full pl-5 py-3 border-[#d6d6d6] border-[1px] rounded-lg' type="text" placeholder='Phone' />
                    </div>
                </div>
                <div className='flex gap-10 text-left mt-5 c_reservationinputdiv'>

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

            <div className='w-full flex gap-16 bg-[#ECECEC] px-36 py-28 c_reservationmainlastsec'>
                <div className='flex-1'>
                    <h2 className=' text-[23px] regular-text mb-6 tracking-wider'>RESERVE BY PHONE</h2>
                    <p>Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nothing vulputate , lectus vel volutpat efficitur, orci lacus sodales sem, sit amet quam: <span className='text-red-600'>(001) 345 6889</span> </p>
                </div>
                <div className='flex-1'>
                    <h2 className=' text-[23px] regular-text mb-6 tracking-wider'>FOR EVENT BOOKING</h2>
                    <p>Donec feugiat ligula rhoncus: <span className='text-red-600'>(001) 345 6889</span> , varius nisl sed, tinci-dunt lectus sodales sem. </p>
                </div>

            </div>
        </div>

    )
}

export default ReservationMain