import Paginations from "../../components/Paginations/Paginations";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "../../data/data";
import { HiHome } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [ProjectsPagination, setProjectsPagination] = useState([]);
  const totalPage = Math.ceil(data.length / 12);
  useEffect(() => {
    const numberItem = currentPage * 12;
    const dataSlice = data.slice(numberItem - 12, numberItem);
    setProjectsPagination(dataSlice);
  }, [currentPage]);
  return (
    <>
      <div className="flex items-center justify-center md:justify-start space-x-2 px-4 sm:px-10 md:px-[80px] lg:mx-[200px] xl:mx-[390px] h-[40px] my-6">
        <HiHome />
        <Link to="/">Trang Chủ</Link>
        <RiArrowRightSLine />
        <p>Dự Án</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-10 md:px-[30px] mt-[40px] min-h-[900px]">
        {ProjectsPagination.map((item) => (
          <Link
            state={item}
            to={item.slug}
            key={item.name}
            className="overflow-hidden group"
          >
            <img
              className="w-full h-[220px] sm:h-[250px] object-cover rounded-lg transition-all group-hover:scale-105 group-hover:brightness-50 group-hover:cursor-pointer duration-500"
              src={item.cardImage}
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
