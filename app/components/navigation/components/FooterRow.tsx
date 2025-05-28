import React from 'react';
import Image from 'next/image';

type FooterRowProps = {
  icon: string
  content: string
}

const FooterRow = ({ icon, content }: FooterRowProps) => {
  return (
    <div className='flex flex-row gap-5'>
      <Image src={icon} alt='phone icon' />
      <p className='text-white'>{content}</p>
    </div>
  );
};

export default FooterRow;