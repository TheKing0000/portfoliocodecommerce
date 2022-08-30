import React from 'react'
import contactImg from "../public/assets/contact.jpg"
import Image from 'next/image'
import Link from "next/link"

import { AiOutlineMail } from "react-icons/ai"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
const Contact = () => {
  return (
    <div id="contact" className='w-full lg:h-screen'>
      <div className='w-full max-w-[1240px] m-auto px-2 py-16 '>
        <p className='text-xl tracking-widest uppercase'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/*Left*/}
          <div className='lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-2'>
            <div className='lg:p-2 h-full'>
              <div>
                <Image className='rounded-xl' src={contactImg} alt="/" />
              </div>
              <div >
                <h2 className='py-2'>Name here</h2>
                <p>Front End Developer</p>
                <p>I am available for freelance or full time positions. Contact me and let&apos;s talk</p>
              </div>
              <div className='pt-10'>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between p-8'>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300'><FaLinkedinIn />
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

          {/*Right*/}
          <div className='lg:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase py-2 text-sm'>Name</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300' type="text" />

                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase py-2 text-sm'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300' type="text" />

                  </div>
                  <div className='col-span-2 flex flex-col py-2'>
                    <label className='uppercase py-2 text-sm'>Email</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300' type="email" />
                  </div>
                  <div className='col-span-2 flex flex-col py-2'>
                    <label className='uppercase py-2 text-sm'>Subject</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300' type="text" />
                  </div>
                  <div className='col-span-2 flex flex-col py-2'>
                    <label className='uppercase py-2 text-sm'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300 ' rows="10" />
                  </div>
                  <div className='col-span-2 '>
                    <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                  </div>
                </div>

              </form>

            </div>
          </div>

        </div>
        <div className='flex justify-center items-center py-12'>
          <Link href="/">
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer  animate-bounce'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Contact