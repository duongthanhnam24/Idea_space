import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Project() {
    const location = useLocation();
    const product = location.state;
    const [embedUrl, setEmbedUrl] = useState('');
   useEffect(() => {
    if (!!product.media.video.length) {
     const videoId = new URL(product.media.video).searchParams.get("v");
     setEmbedUrl(`https://www.youtube.com/embed/${videoId}`)
   }
   } , [])
    
    return (
        <div className="mx-[390px] space-y-10">
            <h1 className="text-[22px] font-medium ">{product.name}</h1>
            {!!product.media.video.length && (
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
            {product.media.image.map((img) => {
                return (
                    <div className="">
                        <img src={img} className="w-[800px]  object-cover" />
                        <p>{product.name}</p>
                    </div>
                )
            })}
        </div>
    )
}