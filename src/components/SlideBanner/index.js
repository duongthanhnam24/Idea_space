import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../../src/assests/images/banner-tb-1.jpg";
import image2 from "../../../src/assests/images/banner-tb-1.jpg";
import image3 from "../../../src/assests/images/banner-tb-1.jpg";
import image4 from "../../../src/assests/images/banner-tb-1.jpg";
import image5 from "../../../src/assests/images/banner-tb-1.jpg";
import image6 from "../../../src/assests/images/banner-tb-1.jpg";
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
      {[image1, image2, image3, image4, image5, image6].map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`banner-${index}`}
            className="object-cover w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </SlideLayout>
  );
}
