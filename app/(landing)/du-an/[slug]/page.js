"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";

import { usePathname } from 'next/navigation';
import { data } from "../../../../data/data";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import BadgeComponent from "../../../../components/Badge/Badge";
 
export default function Project() {
  const [item, setItem] = useState({});
  const [dataFilter, setDataFilter] = useState([]);
  const locations = usePathname();
  const params = locations.replace("/du-an/", "");
  
  const [embedUrl, setEmbedUrl] = useState("");
  useLayoutEffect(() => {
      const findProduct = data.find((item) => item.slug === `/du-an/${params}`);
      if (findProduct) {
        setItem(findProduct);
        const filter = data.filter((itemProject) => {
          return itemProject.type.some((type) => { return findProduct.type.includes(type)  && itemProject.slug !== findProduct.slug})
        })
        setDataFilter(filter);
        console.log(dataFilter);
        if (findProduct?.media?.video) {
          const videoId = new URL(findProduct.media.video).searchParams.get(
            "v"
          );
          setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
        }
      }
    

  }, [item, params]);


  return (
    <>
      {!!item ? (
        <div className="max-w-full px-4 sm:px-6 md:px-10 lg:mx-[200px] xl:mx-[250px] space-y-10">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center space-x-2 !h-[40px] my-6 text-sm sm:text-base">
            <HiHome />
            <Link href="/">Trang Chủ</Link>
            <RiArrowRightSLine />
            <Link href="/du-an">Dự Án</Link>
            <RiArrowRightSLine />
            <p>{item.name}</p>
          </div>

          {/* Tiêu đề */}
          <h1 className="text-[18px] sm:text-[20px] md:text-[22px] font-medium">
            {item.name}
          </h1>
          <BadgeComponent data={item.type} />
            <div className="flex max-xs:flex-col max-sm:flex-col max-md:flex-col max-xl:flex-col max-2xl:flex-col">

          {/* Video */}
          <div className="flex flex-col space-y-8">
            {!!item?.media?.video && (
              <div className="flex  w-full video-container">
                <iframe
                  className="w-full sm:w-[560px] h-[220px] sm:h-[315px] rounded-md"
                  src={embedUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {/* Hình ảnh */}
            
                <div className="flex flex-col">
                  {item?.media?.image.map((img, index) => {
                    return (
                      <div key={index} className="flex flex-col w-full">
                        <Image width={10000} height={1000}
                          src={img.src}
                          alt={`${item.name} - ${index}`}
                          className="w-full sm:w-[600px] md:w-[700px] lg:w-[800px] object-cover"
                        />
                        <p className="mt-2 text-sm  sm:text-base">
                          {item.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
          </div>

              <div className="ml-32 max-xs:ml-0 max-xs:mt-10 max-sm:ml-0 max-sm:mt-10 max-md:ml-0 max-md:mt-10 max-xl:ml-0 max-xl:mt-10 max-2xl:ml-0 max-2xl:mt-10">
                <h3 className="text-[30px] uppercase font-medium py-2">Các Dự Án Liên Quan</h3>
                <div className="border-b-2 w-[80px] border-[#235eb1]"></div>
                <div className="mt-4 space-y-3">
                  {dataFilter.map((itemRelated, index) => {
                    return (
                      <Link
                         href={itemRelated.slug}
                        state={itemRelated}
                        key={itemRelated.name}
                        className="flex  items-center space-x-4 p-4 shadow-lg w-[400px] max-xs:w-full max-sm:w-full max-md:w-full hover:shadow-2xl max-xl:w-full max-2xl:w-full">
                        <Image width={10000} height={1000} src={itemRelated.cardImage.src} alt={`${dataFilter.name} + ${index}`} className="w-[82px] h-[82px] object-cover" />
                        <p>
                          {itemRelated.name}
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

          
        </div>
      ) : (
        <div className="w-full max-w-sm p-4 mx-auto border border-blue-300 rounded-md">
          <div className="flex space-x-4 animate-pulse">
            <div className="bg-gray-200 rounded-full size-10"></div>
            <div className="flex-1 py-1 space-y-6">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 bg-gray-200 rounded"></div>
                  <div className="h-2 col-span-1 bg-gray-200 rounded"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}