import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import '../styles/mediaquery.scss'


function Navbar() {
  const navitems = ["Skills", "Projects", "Contact"].map((item, index) => {
    const hrefVal = `#${item.toLowerCase()}`
    return <a key={index} href={hrefVal} className="py-1 px-4 hover:bg-[#6482AD] hover:rounded-full hover:text-white transition-all duration-500">{item}</a>;
  });

  return (
    <div id="nav" className="nav w-[100%] nav flex justify-between px-10 py-8 sticky top-0 z-20 bg-[#E2DAD6] shadow-sm">
        <div className="nav-logo text-3xl text-black font-semibold uppercase">
            <a href="#home">
      <h1 className="flex items-baseline" >Divansh <span className="font-thin text-sm text-[#6482AD] flex"> <GrLocationPin  />IND</span></h1>
            </a>
        </div>
      <div className="nav-items flex text-[13px] border border-black rounded-full p-1">{navitems}</div>
      <div className="nav-social flex justify-between gap-5 items-center">
        <a href="https://github.com/divanshsingh" target="blank">
          <FaGithub className="hover:text-[#6482AD] text-[20px]" />
        </a>
        <a href="https://www.linkedin.com/in/divansh-singh-16053b258/" target="blank">
          <FaLinkedin className="hover:text-[#6482AD] text-[20px]" />
        </a>
        <a href="mailto:divanshsingh1612@gmail.com" target="blank">
          <MdEmail className="hover:text-[#6482AD] text-[20px]" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
