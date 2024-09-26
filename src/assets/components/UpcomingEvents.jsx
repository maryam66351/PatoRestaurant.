import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

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
                    <SwiperSlide><img src="slider1.jpg" alt="" />
                        <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[34px] leading-[-100px] text-red-600 mb-[-10px] upcoming_1p'>Upcomming</p>
                            <h2 className='bold-text text-[60px] tracking-[7px] whitespace-nowrap leading-[-10px]'>EVENTS</h2>

                            <div className='flex w-[70vw] h-[400px] bg-white rounded-lg overflow-hidden mt-8 c_ucevents_card'>
                                <div className=' flex w-[50%] h-full overflow-hidden bg-red-600 c_ucevents_card_1'>
                                    <p style={{ writingMode: "vertical-rl" }} className='text-[13px] px-4 light-text upcev_p'>08:00 PM TUESDAY - 21 NOVEMBER 2024</p>
                                    <img className='w-[200px] h-[200px] object-cover' src="/upcomingevents.jpg" alt="" />
                                </div>
                                <div className='w-[50%] h-full flex flex-col justify-center items-center text-black c_ucevents_card_2nd'>
                                    <p className='medium-text text-[1.5vw]'> WINE DURING SPECIFIC NIGHTS</p>
                                    <p className='text-[14px] text-gray-500 px-7 light-text upc_loremp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, excepturi. dolor sit amet consectetur adipisicing elit. Saepe, excepturi.</p>
                                    <div className='flex gap-12 bold-text mt-10'>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>25</h2><p className='text-gray-400 medium-text'>DAYS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>09</h2><p className='text-gray-400 medium-text'>HOURS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>02</h2><p className='text-gray-400 medium-text'>MINUTES</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>32</h2><p className='text-gray-400 medium-text'>SECONDS</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="slider2.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[34px] leading-[-100px] text-red-600 mb-[-10px] upcoming_1p'>Upcomming</p>
                            <h2 className='bold-text text-[60px] tracking-[7px] whitespace-nowrap leading-[-10px]'>EVENTS</h2>

                            <div className='flex w-[70vw] h-[400px] bg-white rounded-lg overflow-hidden mt-8 c_ucevents_card'>
                                <div className=' flex w-[50%] h-full overflow-hidden bg-red-600 c_ucevents_card_1'>
                                    <p style={{ writingMode: "vertical-rl" }} className='text-[13px] px-4 light-text upcev_p'>08:00 PM TUESDAY - 21 NOVEMBER 2024</p>
                                    <img className='w-[200px] h-[200px] object-cover' src="/upcomingevents2.jpg" alt="" />
                                </div>
                                <div className='w-[50%] h-full flex flex-col justify-center items-center text-black c_ucevents_card_2nd'>
                                    <p className='medium-text text-[1.5vw]'> WINE DURING SPECIFIC NIGHTS</p>
                                    <p className='text-[14px] text-gray-500 px-7 light-text upc_loremp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, excepturi. dolor sit amet consectetur adipisicing elit. Saepe, excepturi.</p>
                                    <div className='flex gap-12 bold-text mt-10'>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>25</h2><p className='text-gray-400 medium-text'>DAYS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>09</h2><p className='text-gray-400 medium-text'>HOURS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>02</h2><p className='text-gray-400 medium-text'>MINUTES</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>32</h2><p className='text-gray-400 medium-text'>SECONDS</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="slider3.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[34px] leading-[-100px] text-red-600 mb-[-10px] upcoming_1p'>Upcomming</p>
                            <h2 className='bold-text text-[60px] tracking-[7px] whitespace-nowrap leading-[-10px]'>EVENTS</h2>

                            <div className='flex w-[70vw] h-[400px] bg-white rounded-lg overflow-hidden mt-8 c_ucevents_card'>
                                <div className=' flex w-[50%] h-full overflow-hidden bg-red-600 c_ucevents_card_1'>
                                    <p style={{ writingMode: "vertical-rl" }} className='text-[13px] px-4 light-text upcev_p'>08:00 PM TUESDAY - 21 NOVEMBER 2024</p>
                                    <img className='w-[200px] h-[200px] object-cover' src="/Upevents.jpg" alt="" />
                                </div>
                                <div className='w-[50%] h-full flex flex-col justify-center items-center text-black c_ucevents_card_2nd'>
                                    <p className='medium-text text-[1.5vw]'> WINE DURING SPECIFIC NIGHTS</p>
                                    <p className='text-[14px] text-gray-500 px-7 light-text upc_loremp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, excepturi. dolor sit amet consectetur adipisicing elit. Saepe, excepturi.</p>
                                    <div className='flex gap-12 bold-text mt-10'>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>25</h2><p className='text-gray-400 medium-text'>DAYS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>09</h2><p className='text-gray-400 medium-text'>HOURS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>02</h2><p className='text-gray-400 medium-text'>MINUTES</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>32</h2><p className='text-gray-400 medium-text'>SECONDS</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="slider4.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[34px] leading-[-100px] text-red-600 mb-[-10px] upcoming_1p'>Upcomming</p>
                            <h2 className='bold-text text-[60px] tracking-[7px] whitespace-nowrap leading-[-10px]'>EVENTS</h2>

                            <div className='flex w-[70vw] h-[400px] bg-white rounded-lg overflow-hidden mt-8 c_ucevents_card'>
                                <div className=' flex w-[50%] h-full overflow-hidden bg-red-600 c_ucevents_card_1'>
                                    <p style={{ writingMode: "vertical-rl" }} className='text-[13px] px-4 light-text upcev_p'>08:00 PM TUESDAY - 21 NOVEMBER 2024</p>
                                    <img className='w-[200px] h-[200px] object-cover' src="/Upevents.jpg" alt="" />
                                </div>
                                <div className='w-[50%] h-full flex flex-col justify-center items-center text-black c_ucevents_card_2nd'>
                                    <p className='medium-text text-[1.5vw]'> WINE DURING SPECIFIC NIGHTS</p>
                                    <p className='text-[14px] text-gray-500 px-7 light-text upc_loremp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, excepturi. dolor sit amet consectetur adipisicing elit. Saepe, excepturi.</p>
                                    <div className='flex gap-12 bold-text mt-10'>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>25</h2><p className='text-gray-400 medium-text'>DAYS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>09</h2><p className='text-gray-400 medium-text'>HOURS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>02</h2><p className='text-gray-400 medium-text'>MINUTES</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>32</h2><p className='text-gray-400 medium-text'>SECONDS</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="slider5.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[34px] leading-[-100px] text-red-600 mb-[-10px] upcoming_1p'>Upcomming</p>
                            <h2 className='bold-text text-[60px] tracking-[7px] whitespace-nowrap leading-[-10px]'>EVENTS</h2>

                            <div className='flex w-[70vw] h-[400px] bg-white rounded-lg overflow-hidden mt-8 c_ucevents_card'>
                                <div className=' flex w-[50%] h-full overflow-hidden bg-red-600 c_ucevents_card_1'>
                                    <p style={{ writingMode: "vertical-rl" }} className='text-[13px] px-4 light-text upcev_p'>08:00 PM TUESDAY - 21 NOVEMBER 2024</p>
                                    <img className='w-[200px] h-[200px] object-cover' src="/Upevents.jpg" alt="" />
                                </div>
                                <div className='w-[50%] h-full flex flex-col justify-center items-center text-black c_ucevents_card_2nd'>
                                    <p className='medium-text text-[1.5vw]'> WINE DURING SPECIFIC NIGHTS</p>
                                    <p className='text-[14px] text-gray-500 px-7 light-text upc_loremp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, excepturi. dolor sit amet consectetur adipisicing elit. Saepe, excepturi.</p>
                                    <div className='flex gap-12 bold-text mt-10'>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>25</h2><p className='text-gray-400 medium-text'>DAYS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>09</h2><p className='text-gray-400 medium-text'>HOURS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>02</h2><p className='text-gray-400 medium-text'>MINUTES</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>32</h2><p className='text-gray-400 medium-text'>SECONDS</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182439.jpg?t=st=1718097846~exp=1718101446~hmac=eb194172a4e0f8b93ab02ba29bf794e9af72155c4052d979211d2c9f075d42f8&w=1060" alt="" />
                    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-white z-[2] text-center'>
                            <p className='Courgette-text text-[34px] leading-[-100px] text-red-600 mb-[-10px] upcoming_1p'>Upcomming</p>
                            <h2 className='bold-text text-[60px] tracking-[7px] whitespace-nowrap leading-[-10px]'>EVENTS</h2>

                            <div className='flex w-[70vw] h-[400px] bg-white rounded-lg overflow-hidden mt-8 c_ucevents_card'>
                                <div className=' flex w-[50%] h-full overflow-hidden bg-red-600 c_ucevents_card_1'>
                                    <p style={{ writingMode: "vertical-rl" }} className='text-[13px] px-4 light-text upcev_p'>08:00 PM TUESDAY - 21 NOVEMBER 2024</p>
                                    <img className='w-[200px] h-[200px] object-cover' src="/Upevents.jpg" alt="" />
                                </div>
                                <div className='w-[50%] h-full flex flex-col justify-center items-center text-black c_ucevents_card_2nd'>
                                    <p className='medium-text text-[1.5vw]'> WINE DURING SPECIFIC NIGHTS</p>
                                    <p className='text-[14px] text-gray-500 px-7 light-text upc_loremp'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, excepturi. dolor sit amet consectetur adipisicing elit. Saepe, excepturi.</p>
                                    <div className='flex gap-12 bold-text mt-10'>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>25</h2><p className='text-gray-400 medium-text'>DAYS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>09</h2><p className='text-gray-400 medium-text'>HOURS</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>02</h2><p className='text-gray-400 medium-text'>MINUTES</p></div>
                                        <div><h2 className='text-red-500 text-[3vw] leading-[40px]'>32</h2><p className='text-gray-400 medium-text'>SECONDS</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
}
