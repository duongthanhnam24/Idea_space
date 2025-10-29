
import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SlideLayout from '../SlideLayout';
import { EffectCards } from 'swiper/modules';
import xuongmay1 from "../../assests/images/xuong-may-1.jpg"
import xuongmay2 from "../../assests/images/xuong-may-2.jpg"
import xuongmay3 from "../../assests/images/xuong-may-3.jpg"
import xuongmay4 from "../../assests/images/xuong-may-4.jpg"
import xuongmay5 from "../../assests/images/xuong-may-5.jpg"
import xuongmay6 from "../../assests/images/xuong-may-6.jpg"
import xuongmay7 from "../../assests/images/xuong-may-7.jpg"
import xuongmay8 from "../../assests/images/xuong-may-8.jpg"

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
            <SwiperSlide><img src={xuongmay1} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay2} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay3} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay4} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay5} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay6} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay7} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>
            <SwiperSlide><img src={xuongmay8} className="w-[500px] h-auto object-cover max-sm:w-[300px]" ></img></SwiperSlide>

        </SlideLayout>
    )
}