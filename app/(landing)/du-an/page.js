"use client";
import Paginations from "../../../components/Paginations/Paginations";

import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "../../../data/data";
import { HiHome } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoFilter } from "react-icons/io5";


export default function Projects() {
  const [selected, setSelected] = useState("All");
  const [totalPage, setTotalPage] = useState(Math.ceil(data.length / 12));
  console.log(totalPage);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [ProjectsPagination, setProjectsPagination] = useState([]);
  useEffect(() => {
    const numberItem = currentPage * 12;
    const dataFilter= data.filter((item) => {
      if (selected === "All") {
        return item;
      } else {
        return item.type.includes(selected);
      }
    })
     const dataSlice = dataFilter.slice(numberItem - 12, numberItem);
    setProjectsPagination(dataSlice);
    setTotalPage(Math.ceil(dataFilter.length / 12))
  }, [currentPage,selected]);
  return (
    <>
      <div className="flex items-center max-xs:flex-col">
        <div className="flex items-center justify-center md:justify-start space-x-2 px-4 sm:px-10 md:px-[80px] lg:mx-[200px] xl:mx-[390px] h-[40px] my-6">
          <HiHome />
          <Link href="/">Trang Chủ</Link>
          <RiArrowRightSLine />
          <p>Dự Án</p>
        </div>
        <div className=" flex items-center space-x-2 ">
          <label className="flex items-center space-x-2" htmlFor="type"><IoFilter /> <span>Bộ Lọc</span></label>
          <select name="type" id="type" onChange={(e) => {
            setSelected(e.target.value)
            setCurrentPage(1);
          } }>
            <option value="All">Tất Cả</option>
            <option value="Nội Thất">Nội Thất</option>
            <option value="Sân Khấu Sự Kiện">Sân Khấu Sự Kiện</option>
            <option value="Quà Tặng">Quà Tặng</option>
            <option value="Xe Diễu Hành">Xe Diễu Hành</option>
            <option value="Trang Trí Ánh Sáng">Trang Trí Ánh Sáng</option>
            <option value="Biển Quảng Cáo">Biển Quảng Cáo</option>


          </select>
        </div>
      </div>
      <h1 className="md:px-[80px] lg:mx-[200px] xl:mx-[390px] text-2xl">Tổng Hợp Dự Án Của <strong>Không Gian Ý Tưởng</strong></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-10 md:px-[30px] mt-[40px] min-h-[900px]">
        {ProjectsPagination.map((item) => (
          <Link
            state={item}
             href={item.slug}
            key={item.name}
            className="overflow-hidden group"
          >
            <img
              className="w-full h-[220px] sm:h-[250px] object-cover rounded-lg transition-all group-hover:scale-105 group-hover:brightness-50 group-hover:cursor-pointer duration-500"
              src={item.cardImage.src}
              alt={item.name}
            />
            <p className="mt-[10px] font-medium text-[16px] sm:text-[18px] group-hover:text-[#0f50a8] group-hover:cursor-pointer">
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-[40px]">
        <Paginations
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      </div>
    </>
  );
}