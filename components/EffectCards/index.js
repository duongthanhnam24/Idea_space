"use client";
import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SlideLayout from '../SlideLayout';
import { EffectCards } from 'swiper/modules';
import xuongmay1 from "../../public/assets/images/xuong-may-1.jpg"
import xuongmay2 from "../../public/assets/images/xuong-may-2.jpg"
import xuongmay3 from "../../public/assets/images/xuong-may-3.jpg"
import xuongmay4 from "../../public/assets/images/xuong-may-4.jpg"
import xuongmay5 from "../../public/assets/images/xuong-may-5.jpg"
import xuongmay6 from "../../public/assets/images/xuong-may-6.jpg"
import xuongmay7 from "../../public/assets/images/xuong-may-7.jpg"
import xuongmay8 from "../../public/assets/images/xuong-may-8.jpg"

export function EffectCard() {
    return (
        <SlideLayout loop={true} slidesPerView={1} centeredSlides={false}
            pagination={{
                dynamicBullets: false,
                clickable: false,
            }}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,

            }}
            modules={[EffectCards]}
            effect={'cards'}
            grabCursor={true}

        >
            <SwiperSlide><img src={xuongmay1.src} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay2.src} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay3.src} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay4.src} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay5.src} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay6.src} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay7.src} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay8.src} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>

        </SlideLayout>
    )
}