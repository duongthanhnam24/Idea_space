import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
export default function Project() {
  const [item, setItem] = useState({});
  const location = useLocation();
  const product = location.state;
  const params = useParams().slug;

  const [embedUrl, setEmbedUrl] = useState("");
  useEffect(() => {
    if (product) {
      console.log(item, "before 1");

      // Nếu có product trong location.state thì dùng luôn
      setItem(product);

      console.log(item, "after 1");

      // Lấy video nếu có
      if (product?.media?.video) {
        const videoId = new URL(product.media.video).searchParams.get("v");
        setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
      }
    } else {
      // Nếu không có product -> tìm trong data
      const findProduct = data.find((item) => item.slug === `/du-an/${params}`);
      if (findProduct) {
        console.log(item, "before 2");

        setItem(findProduct);
        console.log(item, "after 2");

        if (findProduct?.media?.video) {
          const videoId = new URL(findProduct.media.video).searchParams.get(
            "v"
          );
          setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
        }
      }
    }
  }, [product, params]);

  return (
    <>
      {!!item ? (
        <div className="max-w-full px-4 sm:px-6 md:px-10 lg:mx-[200px] xl:mx-[390px] space-y-10">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center space-x-2 !h-[40px] my-6 text-sm sm:text-base">
            <HiHome />
            <Link to="/">Trang Chủ</Link>
            <RiArrowRightSLine />
            <Link to="/du-an">Dự Án</Link>
            <RiArrowRightSLine />
            <p>{item.name}</p>
          </div>

          {/* Tiêu đề */}
          <h1 className="text-[18px] sm:text-[20px] md:text-[22px] font-medium">
            {item.name}
          </h1>

          {/* Video */}
          {!!item?.media?.video && (
            <div className="flex justify-center w-full video-container">
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
          {item?.media?.image.map((img, index) => {
            return (
              <div key={index} className="flex flex-col w-full">
                <img
                  src={img}
                  className="w-full sm:w-[600px] md:w-[700px] lg:w-[800px] object-cover"
                />
                <p className="mt-2 text-sm text-center sm:text-base">
                  {item.name}
                </p>
              </div>
            );
          })}
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
