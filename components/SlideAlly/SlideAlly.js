'use client';

import SlideLayout from "../SlideLayout/index";
import aeon from "../../public/assets/images/aeon-logo.png"
import eurowindow from "../../public/assets/images/Logo-Eurowindow.webp"

import gamuda from "../../public/assets/images/logo-gamuda.png"

import muongthanh from "../../public/assets/images/logo-Muong-Thanh.jpg"

import vnpt from "../../public/assets/images/logo-vnpt.jpg"
import vnpay from "../../public/assets/images/vnpay-logo.jpg"
import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
export default function SlideAlly() {
     <div className="mt-24 mx-[287px] max-sm:mx-0 max-md:mx-0 max-lg:mx-10 max-xl:mx-10 max-2xl:mx-[100px] mb-[40px]">
                <p className="font-rosellinda text-[70px] font-medium text-[#0f50a8] text-center mb-[50px]">
                    Khách Hàng Đối Tác
                </p>
                <SlideLayout loop={true} slidesPerView={4} centeredSlides={true}

                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,

                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            
                            
                        },
                        640: {
                            slidesPerView: 2,
                           
                        },
                        768: {
                            slidesPerView: 4,
                            centeredSlides: true,
                            
                        },
                        1024: {
                            slidesPerView: 4,
                            
                        },
                        1280: {
                            slidesPerView: 4,
                            
                        },
                    }}
                    modules={[Autoplay, Pagination]}>

                    <SwiperSlide ><img src={aeon.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={eurowindow.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={gamuda.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpt.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpay.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={muongthanh.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpt.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpay.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={eurowindow.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={gamuda.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpt.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={eurowindow.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={gamuda.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                    <SwiperSlide><img src={vnpt.src} className=' object-contain  w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]' /></SwiperSlide>
                </SlideLayout>
            </div>
}