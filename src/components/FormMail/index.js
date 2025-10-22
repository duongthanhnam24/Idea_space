import { useRef } from 'react';

import emailjs from '@emailjs/browser';
import background from "../../assests/images/background.jpg"
import Input from '../Input';
import { toast } from 'react-toastify';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ovyykmr', 'template_2fdg1sb', form.current, {
        publicKey: 'a3brA3Gu9OQvqs0uP',
      })
      .then(
        () => {
          toast("✅ Gửi Thành Công !")
        },
        (error) => {
         toast('Hiện Bạn Chưa Gửi Được Vui Lòng Thử Lại Hoặc Liên Hệ 0389944688');
        },
      );
  };

  return (
    <div className='relative '>
      <img src={background} className='w-full object-cover ' />
      <div className='absolute top-20 right-[66%] text-white space-y-4'>
        <p className='text-[22px] font-medium  border-b-2 border-[#0f50a8] w-fit'>YÊU CẦU TƯ VẤN</p>
        <p>Để lại thông tin liên hệ chúng tôi sẽ phản hồi lại ngay cho bạn!</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className='absolute  top-20 left-[50%] flex space-x-6'>
        <div className='flex flex-col space-y-6'>
          <Input name={"name"} type={"text"} placeholder={"Tên của bạn"} className={`w-[372px] h-[42px] p-2`} />
          <Input type="email" name="email" placeholder={"Email"}  className={`w-[372px] h-[42px] p-2`}/>
        </div>
        <div className='flex flex-col space-y-6'>
          <textarea className='w-[372px] h-[42px] p-2' name="message" placeholder='Để lại lời nhắn' />
          <button type='submit' className='w-[372px] h-[42px] bg-[#0f50a8] text-white hover:brightness-75'>Gửi</button>
        </div>
      </form>
      
    </div>

  );
};