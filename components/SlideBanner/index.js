"use client";
import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../public/assets/images/banner-tb-1.jpg";
import image2 from "../../public/assets/images/slide1.jpg";
import image3 from "../../public/assets/images/slide2.jpg";
import image4 from "../../public/assets/images/slide3.jpg";
import image5 from "../../public/assets/images/slide4.jpg";
import SlideLayout from "../SlideLayout";
import { Autoplay, Pagination } from "swiper/modules";

export function SlideBanner() {
  return (
    <SlideLayout
      loop={true}
      slidesPerView={1}
      centeredSlides={false}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
    >
      {[image1, image2, image3, image4, image5].map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img.src}
            alt={`banner-${index}`}
            className="object-cover w-full "
          />
        </SwiperSlide>
      ))}
    </SlideLayout>
  );
}
