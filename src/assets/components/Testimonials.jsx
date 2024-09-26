import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Testimonials() {
  return (
    <>
      <div>
        <div className="carousel_section_2">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className='opacity-0' src="slider1.jpg" alt="" />
              <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-black z-[2] text-center'>
                <p className='Courgette-text text-[30px] leading-[-100px] text-red-600 mb-[-10px]'>Customers Say</p>
                <h2 className='bold-text text-[50px] tracking-[7px] whitespace-nowrap leading-[-10px]'>REVIEW</h2>
                <div className='flex justify-center my-10'>
                  <img style={{ width: "120px", height: "120px", borderRadius: "50%", border: "5px solid red" }} className='' src="testimonial1.webp" alt="" />
                </div>
                <p className='text-gray-500 tracking-wider'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, expedita explicabo iste eveniet quasi dolorum."</p>
                <div className='flex justify-center mt-3 text-red-600'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
                <p className='text-gray-500 tracking-wider text-[14px] mt-5'>MARIE SIMONS - NEW YORK</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className='opacity-0' src="slider1.jpg" alt="" />
              <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-black z-[2] text-center'>
                <p className='Courgette-text text-[30px] leading-[-100px] text-red-600 mb-[-10px]'>Customers Say</p>
                <h2 className='bold-text text-[50px] tracking-[7px] whitespace-nowrap leading-[-10px]'>REVIEW</h2>
                <div className='flex justify-center my-10'>
                  <img style={{ width: "120px", height: "120px", borderRadius: "50%", border: "5px solid red" }} className='' src="testimonial2.webp" alt="" />
                </div>
                <p className='text-gray-500 tracking-wider'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, expedita explicabo iste eveniet quasi dolorum."</p>
                <div className='flex justify-center mt-3 text-red-600'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
                <p className='text-gray-500 tracking-wider text-[14px] mt-5'>MARIE SIMONS - NEW YORK</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className='opacity-0' src="slider1.jpg" alt="" />
              <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-black z-[2] text-center'>
                <p className='Courgette-text text-[30px] leading-[-100px] text-red-600 mb-[-10px]'>Customers Say</p>
                <h2 className='bold-text text-[50px] tracking-[7px] whitespace-nowrap leading-[-10px]'>REVIEW</h2>
                <div className='flex justify-center my-10'>
                  <img style={{ width: "120px", height: "120px", borderRadius: "50%", border: "5px solid red" }} className='' src="testimonial3.webp" alt="" />
                </div>
                <p className='text-gray-500 tracking-wider'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, expedita explicabo iste eveniet quasi dolorum."</p>
                <div className='flex justify-center mt-3 text-red-600'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
                <p className='text-gray-500 tracking-wider text-[14px] mt-5'>MARIE SIMONS - NEW YORK</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className='opacity-0' src="slider1.jpg" alt="" />
              <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-black z-[2] text-center'>
                <p className='Courgette-text text-[30px] leading-[-100px] text-red-600 mb-[-10px]'>Customers Say</p>
                <h2 className='bold-text text-[50px] tracking-[7px] whitespace-nowrap leading-[-10px]'>REVIEW</h2>
                <div className='flex justify-center my-10'>
                  <img style={{ width: "120px", height: "120px", borderRadius: "50%", border: "5px solid red" }} className='' src="testimonial1.webp" alt="" />
                </div>
                <p className='text-gray-500 tracking-wider'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, expedita explicabo iste eveniet quasi dolorum."</p>
                <div className='flex justify-center mt-3 text-red-600'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
                <p className='text-gray-500 tracking-wider text-[14px] mt-5'>MARIE SIMONS - NEW YORK</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className='opacity-0' src="slider1.jpg" alt="" />
              <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-black z-[2] text-center'>
                <p className='Courgette-text text-[30px] leading-[-100px] text-red-600 mb-[-10px]'>Customers Say</p>
                <h2 className='bold-text text-[50px] tracking-[7px] whitespace-nowrap leading-[-10px]'>REVIEW</h2>
                <div className='flex justify-center my-10'>
                  <img style={{ width: "120px", height: "120px", borderRadius: "50%", border: "5px solid red" }} className='' src="testimonial2.webp" alt="" />
                </div>
                <p className='text-gray-500 tracking-wider'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, expedita explicabo iste eveniet quasi dolorum."</p>
                <div className='flex justify-center mt-3 text-red-600'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
                <p className='text-gray-500 tracking-wider text-[14px] mt-5'>MARIE SIMONS - NEW YORK</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className='opacity-0' src="slider1.jpg" alt="" />
              <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]	text-black z-[2] text-center'>
                <p className='Courgette-text text-[30px] leading-[-100px] text-red-600 mb-[-10px]'>Customers Say</p>
                <h2 className='bold-text text-[50px] tracking-[7px] whitespace-nowrap leading-[-10px]'>REVIEW</h2>
                <div className='flex justify-center my-10'>
                  <img style={{ width: "120px", height: "120px", borderRadius: "50%", border: "5px solid red" }} className='' src="testimonial3.webp" alt="" />
                </div>
                <p className='text-gray-500 tracking-wider'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, expedita explicabo iste eveniet quasi dolorum."</p>
                <div className='flex justify-center mt-3 text-red-600'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
                <p className='text-gray-500 tracking-wider text-[14px] mt-5'>MARIE SIMONS - NEW YORK</p>

              </div>
            </SwiperSlide>

          </Swiper>
        </div>

      </div>
    </>
  )
}

export default Testimonials