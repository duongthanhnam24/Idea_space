"use client"
import { useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Input from "../../../components/Input";
import { toast } from "react-toastify";

import Image from "next/image";

function Contact() {
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
    <>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.6168129276464!2d105.8661896696175!3d21.093929950025487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aa06641838f9%3A0x13c185b1662dcf49!2zQ8O0bmcgVHkgS2jDtG5nIEdpYW4gw50gVMaw4bufbmc!5e0!3m2!1svi!2s!4v1761044090897!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 mt-[40px] mb-[40px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-6">
          <div className="w-full space-y-4 md:w-1/2">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium pt-[38px] border-b-2 border-[#0f50a8] w-fit">
              Gửi Yêu Cầu
            </h2>
            <p className="text-sm sm:text-base">
              Chúng tôi ở đây vì doanh nghiệp của bạn, nếu còn thắc mắc về sản
              phẩm dịch vụ của chúng tôi hãy liên hệ để được tư vấn hoàn toàn
              miễn phí
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-5"
            >
              <div className="flex flex-col space-y-5 sm:flex-row sm:justify-between sm:space-x-4 sm:space-y-0">
                <Input
                  name={"name"}
                  type={"text"}
                  placeholder={"Tên của bạn"}
                  className="w-full sm:w-1/2 h-[42px] p-2 border-b-4 border-gray-100"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={"Email"}
                  className="w-full sm:w-1/2 h-[42px] p-2 border-b-4 border-gray-100"
                />
              </div>

              <Input
                name={"phone"}
                type={"number"}
                placeholder={"Số điện thoại"}
                className="w-full h-[42px] p-2 border-b-4 border-gray-100"
              />

              <textarea
                className="w-full min-h-[100px] p-2 border-b-4 border-gray-100"
                name="message"
                placeholder="Để lại lời nhắn"
              />

              <button
                type="submit"
                className="w-full bg-[#0f50a8] text-white hover:brightness-75 py-2"
              >
                Gửi
              </button>
            </form>
          </div>

          <div className="w-full md:w-2/5 p-[28px] sm:p-[38px] shadow-md rounded-md border-t-8 border-[#0f50a8] space-y-4">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium">
              Thông Tin Liên Hệ
            </h2>
            <p className="flex items-start">
              <span className="pr-4">
                <FaMapMarkerAlt />
              </span>
              Số 41 Đường Đông Hội, Đông Anh, Hà Nội
            </p>
            <p className="flex items-center">
              <span className="pr-4">
                <FaPhoneVolume />
              </span>
              Ông Đặng Xuân Thơ - Giám đốc Công ty: 0389944688
            </p>
            <p className="flex items-center">
              <span className="pr-4">
                <FaPhoneVolume />
              </span>
              Ông Đào Văn Độ - Phụ trách Tài chính – Kinh doanh: 098 3763405
            </p>
            <p className="flex items-center break-words">
              <span className="pr-4">
                <MdEmail />
              </span>
              ytuongkg.media@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
