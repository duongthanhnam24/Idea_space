
import { href } from "react-router-dom";
import MessengerIcon from "../../assests/images/messenger_icon-removebg-preview.png";
import PhoneIcon from "../../assests/images/phone_icon-removebg-preview.png";
import ZaloIcon from "../../assests/images/zalo_icon-removebg-preview.png";
import { useEffect, useState } from "react";
export default function FloatingContactButtons() {
  const [Index, setIndex] = useState(0);
  const message = {
    href: 'https://m.me/thanh.nam.534310',
    image: MessengerIcon
  }
  const phone = {
    href: 'tel:0389944688',
    image: PhoneIcon
  }

  const zalo = {
    href: 'https://zalo.me/0389944688',
    image: ZaloIcon
  }
  const images = [message, phone, zalo];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);

    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>


      <div className="fixed bottom-6 left-4  w-[60px] h-[60px] overflow-hidden flex items-center justify-center border-8 border-[#0f50a8] rounded-full z-50">

        <div
          className="  flex justify-center items-center "

        >
          <a
            href={images[Index].href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <img
              key={Index}
              src={images[Index].image}
              alt="icon"
              className="w-[25px] h-[25px] object-contain animate-jump-in animate-once animate-ease-in animate-duration-800"
            />
          </a>

        </div>
      </div>
    </>
  );
}