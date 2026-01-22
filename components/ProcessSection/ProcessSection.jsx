
import { ProcessIcon } from './Icons';
import Image from 'next/image';




export const ProcessSection = ({ step, isActive, sectionRef }) => {

  return (
    <div 
      ref={sectionRef}
      className={`h-[700px] flex items-center justify-center py-16 px-4 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-40 grayscale'}`}
      id={`step-${step.id}`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Visuals */}
        <div className={`order-2 md:order-1 relative group transition-transform duration-500 ${isActive ? 'translate-x-0' : '-translate-x-10'}`}>
          <div className="absolute -inset-4 bg-linear-to-r from-blue-100 to-blue-50 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
          <Image
          width={400} height={400}
            src={step.imagePlaceholder.src} 
            alt={step.title} 
            className="relative rounded-xl shadow-2xl w-full object-cover h-[400px] border-4 border-white"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg border border-gray-100 hidden md:block">
            <div className="bg-blue-900 p-3 rounded-full text-white">
                <ProcessIcon name={step.iconName} className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className={`order-1 md:order-2 space-y-6 transition-transform duration-500 ${isActive ? 'translate-x-0' : 'translate-x-10'}`}>
          <div className="flex items-center space-x-4">
             <span className="text-6xl font-bold text-blue-400 select-none">0{step.id}</span>
             <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            {step.description}
          </p>

          <div className="prose prose-blue text-gray-500">
             <p>{step.detailedContent}</p>
          </div>

          
        </div>
      </div>
    </div>
  );
};