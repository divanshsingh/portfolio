import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { motion, useAnimation } from 'framer-motion';
import '../styles/mediaquery.scss'

function Hero() {
  const animation = useAnimation();
  const [hover, setHover] = useState(false);

  useEffect(() => {
      animation.start({ y: "0%" });
  }, [animation]);

  return (
    <>
    <div id='home' className='w-full h-screen bg-[#E2DAD6]'><Navbar />
    <div className='herowithoutnav flex gap-[5vw]'>
      <div className='hero-left w-1/2 relative'>
        
        <div className="hero-heading absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className='masker-main'>
          {["Hello I'm", "Divansh", "A Codesmith"].map((item, index) => (
            <div key={index} className="masker">
              <div className='inside-masker w-full flex items-center text-[7vw] whitespace-nowrap'>
                {index === 1 && (
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "8vw" }} 
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className='w-[8vw] h-[5.5vw] bg-[url("/src/media/contactimg6.jpg")] bg-center bg-no-repeat bg-cover rounded-md relative -bottom-[0.5vw]'
                  ></motion.div>
                )}
                <h1 className={`uppercase leading-[6vw] tracking-tight font-["Founders_Grotesk_Condensed"] ${index === 1 ? "font-bold text-[#6482AD]" : ""}`}>
                  {item}
                </h1>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className='herotextbottom flex justify-between items-end absolute bottom-0 left-1/2 -translate-x-[50%] px-10 py-10 w-full'>
          <div className='flex font-thin text-xs'>
            <p className='vertical-text'>Transitioning from <b>SEO</b> expert</p>
            <p className='vertical-text'>to <b>web developer</b></p>
          </div>
          <div className='aboutbtndiv'>
            <div className='aboutme-div w-full'>
              <a href="#about">
            <button id='aboutme-btn' className="border-[1px] border-zinc-500 rounded-full font-light text-sm uppercase mt-[1vw]
 py-1 px-4 hover:bg-[#6482AD] hover:rounded-full hover:text-white transition-all duration-500">
                About me
              </button>
              </a>
            </div>
            <div className='abouttext'>
              <p className='font-thin text-xs py-5'><b><span>Frontend Developer</span></b> &gt; SEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-right w-1/2 overflow-hidden flex justify-center items-center rounded-3xl'>
        <img
          className={`rounded-3xl ${hover ? 'scale-95 ' : 'scale-90'} transition-transform duration-700`}
          src="/src/media/aboutme.jpeg"
          alt="About me"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
    </div>
    </div>
    </>
  );
}

export default Hero;
