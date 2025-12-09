"use client"
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import background from "../../public/assets/images/background.jpg";
import Input from "../Input";
import { toast } from "react-toastify";
export const  ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ovyykmr", "template_2fdg1sb", form.current, {
        publicKey: "a3brA3Gu9OQvqs0uP",
      })
      .then(
        () => {
          toast("✅ Gửi Thành Công !");
        },
        (error) => {
          toast(
            "Hiện Bạn Chưa Gửi Được Vui Lòng Thử Lại Hoặc Liên Hệ 0389944688"
          );
        }
      );
  };

  return (
    <section
      className="relative text-white bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background.src})`,
      }}
    >
      <div className="flex flex-col items-center justify-center px-2 py-16 mx-auto max-w-7xl lg:flex-row max-xl:mx-10">
        <div className="space-y-4 text-center lg:text-left lg:w-fit">
          <p className="text-[22px] font-medium border-b-2 border-[#0f50a8] w-fit mx-auto lg:mx-0">
            YÊU CẦU TƯ VẤN
          </p>
          <p className="text-sm md:text-base">
            Để lại thông tin liên hệ, chúng tôi sẽ phản hồi lại ngay cho bạn!
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full gap-6 p-6 ml-auto text-black rounded-lg shadow-lg md:flex-row"
        >
          <div className="flex flex-col flex-1 gap-4">
            <Input
              name="name"
              type="text"
              placeholder="Tên của bạn"
              className="w-full h-[42px] p-2 "
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full h-[42px] p-2"
            />
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <textarea
              name="message"
              placeholder="Để lại lời nhắn"
              className="w-full h-[90px] p-2 border border-gray-300 rounded bg-white"
            />
            <button
              type="submit"
              className="w-full h-[42px] bg-[#0f50a8] text-white rounded hover:brightness-90"
            >
              Gửi
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
