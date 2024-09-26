import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
            <div className="carousel_section">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="slider3.jpg" alt="" />
                        <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[60px] leading-[-100px] mb-[-15px]'>Welcome to</p>
                            <h2 className='bold-text text-[90px] tracking-[10px] whitespace-nowrap leading-[-10px]'>PATO PLACE</h2>
                            <Link to="/menu" className='text-red-400 text-[14px] font-light bg-white px-8 py-3 rounded-xl cursor-pointer mt-[20px]  hover:bg-red-600 duration-500 hover:text-white' >LOOK MENU</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="slider1.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[60px] leading-[-100px] mb-[-15px]'>Welcome to</p>
                            <h2 className='bold-text text-[90px] tracking-[10px] whitespace-nowrap leading-[-10px]'>PATO PLACE</h2>
                            <Link to="/menu" className='text-red-400 text-[14px] font-light bg-white px-8 py-3 rounded-xl cursor-pointer mt-[20px]  hover:bg-red-600 duration-500 hover:text-white' >LOOK MENU</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="slider2.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[60px] leading-[-100px] mb-[-15px]'>Welcome to</p>
                            <h2 className='bold-text text-[90px] tracking-[10px] whitespace-nowrap leading-[-10px]'>PATO PLACE</h2>
                            <Link to="/menu" className='text-red-400 text-[14px] font-light bg-white px-8 py-3 rounded-xl cursor-pointer mt-[20px]  hover:bg-red-600 duration-500 hover:text-white' >LOOK MENU</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="slider3.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[60px] leading-[-100px] mb-[-15px]'>Welcome to</p>
                            <h2 className='bold-text text-[90px] tracking-[10px] whitespace-nowrap leading-[-10px]'>PATO PLACE</h2>
                            <Link to="/menu" className='text-red-400 text-[14px] font-light bg-white px-8 py-3 rounded-xl cursor-pointer mt-[20px]  hover:bg-red-600 duration-500 hover:text-white' >LOOK MENU</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="slider4.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[60px] leading-[-100px] mb-[-15px]'>Welcome to</p>
                            <h2 className='bold-text text-[90px] tracking-[10px] whitespace-nowrap leading-[-10px]'>PATO PLACE</h2>
                            <Link to="/menu" className='text-red-400 text-[14px] font-light bg-white px-8 py-3 rounded-xl cursor-pointer mt-[20px]  hover:bg-red-600 duration-500 hover:text-white' >LOOK MENU</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="slider5.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[60px] leading-[-100px] mb-[-15px]'>Welcome to</p>
                            <h2 className='bold-text text-[90px] tracking-[10px] whitespace-nowrap leading-[-10px]'>PATO PLACE</h2>
                            <Link to="/menu" className='text-red-400 text-[14px] font-light bg-white px-8 py-3 rounded-xl cursor-pointer mt-[20px]  hover:bg-red-600 duration-500 hover:text-white' >LOOK MENU</Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
}
