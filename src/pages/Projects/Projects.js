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
        const numberItem = currentPage * 12
        const dataSlice = data.slice(numberItem - 12, numberItem)
        setProjectsPagination(dataSlice)
    }, [currentPage]);
    return (


        <>
             <div className="flex items-center space-x-2 mx-[390px] !h-[40px] my-6 ">
                <HiHome />
                <Link to='/'>
                    Trang Chủ
                </Link>
                <RiArrowRightSLine />
                <p >
                    Dự Án
                </p>
               
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-h-[900px] px-[30px] mt-[40px]">
                {ProjectsPagination.map((item) => {
                    return (
                        <>
                            <Link state={item} to={item.slug} className="overflow-hidden group h-[290px]" key={item.name}>
                                <img className=" w-[446px] h-[251px] object-cover rounded-lg transition-all  group-hover:scale-105 group-hover:brightness-50 group-hover:cursor-pointer duration-500" src={item.cardImage} alt="" />
                                <p className="mt-[10px] font-medium group-hover:text-[#0f50a8] group-hover:cursor-pointer text-[18px]">{item.name}</p>
                            </Link>

                        </>
                    )
                })}
            </div>
            <div className="flex justify-center mt-[40px]">
                <Paginations currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
            </div>
        </>
    )
}