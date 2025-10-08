

import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { IoIosArrowDropright } from 'react-icons/io';
import SlideLayout from '../SlideLayout';
import {Autoplay, Pagination } from 'swiper/modules';

export function SlideIdea({data}) {
    return (
        <SlideLayout loop={true} slidesPerView={5} centeredSlides={true}

            autoplay={{
                delay: 6000,
                disableOnInteraction: false,

            }}
            modules={[Autoplay, Pagination]}>
            {data.map((item) => (
                <>
                    <SwiperSlide key={item.name}>
                        <div >
                            <div className=' w-[360px] h-[200px] overflow-hidden'>
                                <img src={item.image} className='transition-all object-cover w-full h-full hover:scale-110 hover:brightness-50 hover:cursor-pointer' alt='tu-hao-di-san' />
                            </div>
                            <h3 className='my-3 font-medium hover:text-[#0f50a8] hover:cursor-pointer'>{item.name}</h3>
                            <p className='text-gray-500'>
                                {item.shortDescription}
                            </p>
                            <button className='transition-all mt-3 text-[20px] flex items-center space-x-3 text-[#0f50a8] hover:ml-2 '><span>XEM CHI TIẾT</span> <IoIosArrowDropright color="#0f50a8" /></button>
                        </div>
                    </SwiperSlide>
                </>
            ))}


        </SlideLayout>
    )
}