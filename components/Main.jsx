import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div
      data-aos="fade-right"
      id="home"
      className="w-full h-screen min-h-screen  text-center"
    >
      <div className="max-w-7xl w-full mx-auto  h-full  flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-[#a7a9be]">
            Let&apos;s build something together!
          </p>

          <h1 className="py-4 text-gray-700 dark:text-[#a7a9be]">
            Hi, I&apos;m
            <span className="text-[#5651e5]"> Simon</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-[#a7a9be]">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto dark:text-[#a7a9be]">
            I&apos;m focused on building responsive front-end web applications
            while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full dark:bg-[#fffffe] shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn color="black" size={20} />
            </div>
            <div className="rounded-full dark:bg-[#fffffe] shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub color="black" size={20} />
            </div>
            <div className="rounded-full dark:bg-[#fffffe] shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill color="black" size={20} />
            </div>
            <div className="rounded-full dark:bg-[#fffffe] shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail color="black" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
