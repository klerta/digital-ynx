import React from 'react';
import Image from 'next/image';

type ServiceCardProps = {
  icon: string
  title: string
  description: string
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className='max-w-[370px] flex justify-center h-[225px] lg:h-[420px] rounded-[11px] lg:rounded-[20px] shadow-card bg-white'>
      <div className='flex flex-col p-3 lg:p-[3rem] items-center gap-1 lg:gap-5'>
        <div className='h-12 lg:h-20'>
          <Image className='w-[30px] lg:w-full' src={icon} alt={`${title} icon`} />
        </div>
        <p className='lg:h-10 text-brand text-[11px] lg:text-[20px] text-center font-[500]'>{title}</p>
        <p className='text-center font-[300] text-[11px] lg:text-[20px] leading-3 lg:leading-6'>{description}</p>
      </div>
    </div>
  );
};


export default ServiceCard;