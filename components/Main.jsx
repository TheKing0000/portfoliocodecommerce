import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-7xl w-full mx-auto  h-full p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together!</p>

          <h1 className='py-4 text-gray-700'>Hi, I&apos;m
            <span className='text-[#5651e5]'> Simon</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I&apos;m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><BsFillPersonLinesFill />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main