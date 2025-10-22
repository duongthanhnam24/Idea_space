import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from 'react-icons/ri';
export default function Project() {
    const [item, setItem] = useState({});
    const location = useLocation();
    const product = location.state;
    const params = useParams().slug;

    const [embedUrl, setEmbedUrl] = useState('');
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
            const findProduct = data.find(item => item.slug === `/du-an/${params}`);
            if (findProduct) {
                console.log(item, "before 2");

                setItem(findProduct);
                console.log(item, "after 2");

                if (findProduct?.media?.video) {
                    const videoId = new URL(findProduct.media.video).searchParams.get("v");
                    setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
                }
            }
        }
    }, [product, params]);

    return (
        <>

            {
                !!item ? (
                    <div className="mx-[390px] space-y-10">
                        <div className="flex items-center space-x-2  !h-[40px] my-6 ">
                            <HiHome />
                            <Link to='/'>
                                Trang Chủ
                            </Link>
                            <RiArrowRightSLine />
                            <Link to='/du-an'>
                                Dự Án
                            </Link>
                           < RiArrowRightSLine />
                            <p >
                                {item.name}
                            </p>
                        </div>

                        <h1 className="text-[22px] font-medium ">{item.name}</h1>
                        {!!item?.media?.video && (
                            <div className="video-container">
                                <iframe
                                    width="560"
                                    height="315"
                                    src={embedUrl}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                        {item?.media?.image.map((img, index) => {
                            return (
                                <div key={index} className="">
                                    <img src={img} className="w-[800px]  object-cover" />
                                    <p>{item.name}</p>
                                </div>
                            )
                        })}
                    </div>) : (
                    <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                        <div className="flex animate-pulse space-x-4">
                            <div className="size-10 rounded-full bg-gray-200"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 rounded bg-gray-200"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                                        <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                                    </div>
                                    <div className="h-2 rounded bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </>
    )
}