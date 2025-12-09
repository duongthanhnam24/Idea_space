"use client";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function SlideLayout({
  loop,
  slidesPerView,
  centeredSlides,
  pagination,
  autoplay,
  children,
  modules,
  effect,
  grabCursor,
  breakpoints,
}) {
  return (
    <>
      <Swiper
        loop={loop}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        pagination={pagination}
        autoplay={autoplay}
        modules={modules}
        effect={effect || ""}
        grabCursor={grabCursor || false}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </>
  );
}
