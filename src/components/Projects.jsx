import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from "react-icons/lia";
import React, { useRef } from 'react';
import "../styles/projects.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import '../styles/mediaquery.scss'
import CodeSmith from '/portfoliologo.png'
import Crptopulse from '/btc.png'
import Yourcart from '/yourcart.png'
import Edustream from '/edustream.jpg'


function Projects() {
  const swiperRef = useRef(null);

  return (
    <div id="projects" className='projects w-full h-[100vh] bg-[#E2DAD6]'>
      <h2 className='text-[2.5rem] border-b-[1px] border-black w-fit tracking-tight leading-none ml-[2.5rem] overflow-hidden py-[10px] font-["Founders_Grotesk_Condensed"]'>
        Projects
      </h2>
      <div className='project_main w-[100%] h-[90vh] flex justify-center items-center gap-[50px] pb-[4rem]'>
        <section className='project_left w-[50%] h-full ml-[7rem] flex flex-col justify-center items-start'>
          <p className='uppercase leading-[7vw] text-[7rem] tracking-tight font-["Founders_Grotesk_Condensed"] font-bold text-[#6482AD]'>
            Projects I've Worked On
          </p>
          <div className="projectbtns flex items-center mt-[4rem] gap-[2rem]">
            <button>
              <LiaLongArrowAltLeftSolid onClick={() => swiperRef.current.slidePrev()} className='preBtn text-[4rem] bg-[#cbc4c0] rounded-full hover:bg-[#a9a5a3] hover:scale-[1.05] transition-all' />
            </button>
            <button >
              <LiaLongArrowAltRightSolid onClick={() => swiperRef.current.slideNext()} className='nextBtn text-[4rem] bg-[#cbc4c0] rounded-full hover:bg-[#a9a5a3] hover:scale-[1.05] transition-all' />
            </button>
          </div>
        </section>
        <section className='project_right w-[50%] h-full overflow-hidden flex justify-end'>
        <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
      }}
      modules={[Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}

    >
          <SwiperSlide>
          <Projectcarousel title={"Code Smith"} description={"CodeSmith is a fully responsive practice portfolio web application built with React, featuring dynamic routing and a smooth carousel component. Styled with Sass, the project highlights modern design and efficient code structure, ensuring a seamless user experience across all devices."} githubUrl={"https://github.com/divanshsingh/first-responsive-web"} liveProjectUrl={"https://first-responsive-web.vercel.app/"} imgUrl={CodeSmith} color={"#28736e"} btnColor={"#6482AD"} />
          </SwiperSlide>
      <SwiperSlide><Projectcarousel title={"Crypto Pulse"} description={"CrptoPulse showcase my ability to interact with APIs, handle and present data effectively, and ensure that data updates seamlessly through the user interface. CryptoPulse provides real-time data on various cryptocurrencies, including their current prices, market trends, and exchange information."} githubUrl={"https://github.com/divanshsingh/cryptopulse"} liveProjectUrl={"https://cryptopulse-alpha.vercel.app/"} imgUrl={Crptopulse} color={"#6482AD"} btnColor={"#28736e"} /></SwiperSlide>
      <SwiperSlide><Projectcarousel title={"Your Cart"} description={"YourCart is a responsive web app that displays a list of products with the ability to add items to a cart. It features a comprehensive cart system that updates quantities, performs price calculations, and demonstrates efficient state management using Redux and Redux Toolkit."} githubUrl={"https://github.com/divanshsingh/yourcart"} liveProjectUrl={"https://yourcart-three.vercel.app/"} imgUrl={Yourcart} color={"#28736e"} btnColor={"#6482AD"} /></SwiperSlide>
      <SwiperSlide>
      <Projectcarousel title={"Edu Stream"} description={"EduStream is an innovative educational platform designed to provide seamless access to high-quality video lectures and interactive learning experiences. Whether you're a student or a professional, EduStream offers a flexible and personalized approach to education."} githubUrl={"https://github.com/divanshsingh"} liveProjectUrl={"https://edustream-bice.vercel.app/"} imgUrl={Edustream} color={"#6482AD"} btnColor={"#28736e"} />
      </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
}


const Projectcarousel = ({ title, description, githubUrl, liveProjectUrl, imgUrl, color, btnColor}) => {
  return (
    <div id="idv-project" className='w-[75%] h-[80vh] projectcarousel rounded-[2rem] flex justify-center items-center' style={{
      backgroundColor: color
    }}>
      <div className='idv-project-data w-full h-full flex flex-col rounded-[2rem] justify-between items-start py-[1rem] px-[3rem]'>
        <img className='w-[10rem] h-[10rem] rounded-full' src={imgUrl} alt={title} />
        <h3 className='projecttext text-[2.5rem] font-semibold tracking-normal font-["Founders_Grotesk_Condensed"]' 
        style={{
          color: btnColor,
          WebkitTextStroke: '0.5px black'
        }}>{title}</h3>
        <p className="py-[1rem] text-[1 rem] font-thin text-[#E2DAD5] tracking-[3px]">{description}</p>
        <div className='idv-project-btn flex gap-[1rem]'>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <button className='text-[#E2DAD6] text-[20px] w-[10rem] h-[3rem] rounded-[50px]' style={{
              backgroundColor: btnColor
            }}>Github</button>
          </a>
          <a href={liveProjectUrl} target="_blank" rel="noopener noreferrer">
            <button className='text-[#E2DAD6] text-[20px] w-[10rem] h-[3rem] rounded-[50px]' style={{
              backgroundColor: btnColor
            }}>Live</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
