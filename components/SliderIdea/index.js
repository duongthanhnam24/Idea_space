"use client"
import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { IoIosArrowDropright } from "react-icons/io";
import SlideLayout from "../SlideLayout";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

export function SlideIdea({ data }) {
  return (
    <SlideLayout
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      //   pagination={{
      //     clickable: true,
      //   }}
      modules={[Autoplay, Pagination]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 28,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.name}>
          <Link  href={item.slug} >
            <div className="p-3">
              <div className="w-full h-[200px] overflow-hidden rounded-xl">
                <img
                  src={item.cardImage.src}
                  alt={item.name}
                  className="object-cover w-full h-full transition-all duration-300 cursor-pointer hover:scale-110 hover:brightness-50"
                />
              </div>
              <h3 className="my-3 font-medium hover:text-[#0f50a8] cursor-pointer text-center sm:text-left">
                {item.name}
              </h3>
              {/* <p className="text-sm text-center text-gray-500 sm:text-base sm:text-left">
                {item.shortDescription}
              </p> */}
              <button className="transition-all mt-3 text-[18px] flex items-center justify-center sm:justify-start space-x-2 text-[#0f50a8] hover:ml-2">
                <span>XEM CHI TIẾT</span>
                <IoIosArrowDropright color="#0f50a8" />
              </button>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </SlideLayout>
  );
}
