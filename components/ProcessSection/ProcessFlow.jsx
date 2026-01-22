'use client'
import  { useState, useRef, useEffect } from 'react';

import { ProcessIcon } from './Icons';
import { ProcessSection } from './ProcessSection';
import image1 from '../../public/assets/images/ideaspaceabout.png'
import image2 from '../../public/assets/images/ideaspaceabout1.png'
import image3 from '../../public/assets/images/ideaspaceabout2.png'
import image4 from '../../public/assets/images/ideaspaceabout3.png'


const DEFAULT_STEPS = [
  {
    id: 1,
    title: "KHÔNG GIAN Ý TƯỞNG",
    description: "Ngay khi nhận được thông tin của khách hàng, Không Gian Ý Tưởng sẽ lập tức liên hệ để trao đổi nhu cầu và khảo sát hiện trạng.",
    iconName: "user",
    detailedContent: "Bắt đầu bằng việc thấu hiểu các nhu cầu và mong muốn của Khách hàng, Không Gian Ý Tưởng áp dụng những tiêu chuẩn marketing toàn cầu vào việc sáng tạo và thiết kế những ấn phẩm quảng cáo, trong đó có biển bảng quảng cáo, đảm bảo cho việc sản phẩm hay thương hiệu của Khách hàng sẽ được nhận diện một cách ấn tượng nhất và chuẩn mực nhất trên các phương tiện truyền thông như OOH, pano, billboard, outdoor hay các sản phẩm in ấn. Thiết kế quảng cáo là một trong những dịch vụ cốt lõi và quan trọng nhất của Không Gian Ý Tưởng.",
    imagePlaceholder: image1
  },
  {
    id: 2,
    title: "Báo giá và quy trình",
    description: "Sau khi thống nhất ý tưởng và báo giá, Không Gian Ý Tưởng sẽ soạn thảo hợp đồng và tiến hành ký kết.",
    iconName: "file",
    detailedContent: "Chúng tôi cung cấp bảng báo giá chi tiết từng hạng mục, vật liệu sử dụng minh bạch. Quy trình làm việc được timeline hóa rõ ràng để khách hàng dễ dàng theo dõi tiến độ. Hợp đồng pháp lý đảm bảo quyền lợi tối đa cho chủ đầu tư.",
    imagePlaceholder: image2
  },
  {
    id: 3,
    title: "Khảo sát và ký hợp đồng",
    description: "Hai bên thống nhất bản vẽ 3D cuối cùng, đo đạc lại thực tế và Không Gian Ý Tưởng tiến hành sản xuất.",
    iconName: "pen",
    detailedContent: "Bản vẽ 3D giúp bạn hình dung 99% không gian sau khi hoàn thiện. Sau khi chốt thiết kế, chúng tôi tiến hành đo đạc lần cuối (re-check) với độ chính xác tuyệt đối để đưa vào sản xuất tại xưởng, giảm thiểu sai số khi lắp đặt.",
    imagePlaceholder: image3
  },
  {
    id: 4,
    title: "Bàn giao và quyết toán",
    description: "Không Gian Ý Tưởng cam kết thi công đúng tiến độ, chất lượng; nghiệm thu và bàn giao công trình hoàn chỉnh.",
    iconName: "handshake",
    detailedContent: "Đội ngũ giám sát chặt chẽ quá trình thi công. Trước khi bàn giao, công trình được vệ sinh công nghiệp sạch sẽ. Chúng tôi thực hiện chính sách bảo hành, bảo trì dài hạn để bạn an tâm tận hưởng không gian sống mới.",
    imagePlaceholder: image4
  }
];



export const ProcessFlow = ({ steps = DEFAULT_STEPS, className = "" }) => {
  const [activeStepId, setActiveStepId] = useState(1);
  const sectionRefs = useRef([]);

  // Function to scroll to a specific section
  const scrollToStep = (id) => {
    const element = sectionRefs.current[id - 1];
    if (element) {
      const offset = 180; // Height of the sticky header + some buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveStepId(id);
    }
  };

  // Setup Intersection Observer to update active state on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Activate when element is in the middle of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepId = Number(entry.target.id.replace('step-', ''));
          setActiveStepId(stepId);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [steps]);

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Sticky Navigation Bar */}
      <div className="sticky top-[130px] z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-start py-6 overflow-x-auto no-scrollbar gap-4 md:gap-0">
            {steps.map((step, index) => {
              const isActive = activeStepId === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => scrollToStep(step.id)}
                  className={`flex flex-col items-center text-center group w-full min-w-[200px] transition-all duration-300 focus:outline-none`}
                >
                  {/* Icon Circle */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center border-2 mb-4 transition-all duration-300 relative
                    ${isActive 
                      ? 'bg-blue-900 border-blue-900 text-white scale-110 shadow-blue-200 shadow-lg' 
                      : 'bg-white border-blue-900 text-blue-900 hover:bg-blue-50'
                    }
                  `}>
                    <ProcessIcon name={step.iconName} className="w-8 h-8" />
                    
                    {/* Connector Line (Desktop only) */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute left-[100%] top-1/2 -translate-y-1/2 w-[calc(100vw/5)] h-[2px] bg-gray-200 -z-10" style={{ maxWidth: '200px' }} />
                    )}
                  </div>

                  {/* Text Content in Nav */}
                  <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                    <h3 className="font-bold text-sm uppercase mb-2 text-gray-800">{step.title}</h3>
                    
                  </div>
                  
                  {/* Active Indicator Line */}
                  <div className={`h-1 w-full mt-4 rounded-t-full transition-all duration-300 ${isActive ? 'bg-blue-600' : 'bg-transparent'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Content Sections */}
      <main className="flex-grow max-w-7xl mx-auto w-full max-sm:space-y-40 max-sm:mt-30 max-md:space-y-40 max-md:mt-30">
        {steps.map((step, index) => (
          <ProcessSection 
            key={step.id} 
            step={step} 
            isActive={activeStepId === step.id}
            sectionRef={(el) => (sectionRefs.current[index] = el)}
          />
        ))}
      </main>
    </div>
  );
};