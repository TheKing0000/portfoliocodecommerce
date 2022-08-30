import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='relative w-screen h-[30vh] lg:h-[40vh]'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
        </div>
        <Image className='absolute z-1' src={propertyImg} layout="fill" objectFit='cover' alt="/" />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
        <div className='max-w-[1240px]'>

        </div>

      </div>
    </div>
  );
};

export default property;