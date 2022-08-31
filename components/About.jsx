import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center  py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div data-aos="fade-right" data-aos-duration="1000" className='col-span-2'>
          <p className='uppercase tracking-widest text-xl '>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
          <p className='text-gray-600'> Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.</p>
        </div>
        <div className='relative mt-10 md:mt-0 h-[50vh] md:h-full   border border-gray-200 rounded-md overflow-hidden'>

          <Image data-aos="zoom-in" data-aos-duration="1000" layout="fill"
            objectFit="cover"
            quality={100} alt="Next js" src="/assets/next.png" />
        </div>
      </div>
    </div>
  )
}

export default About