import React, { useEffect, useRef, useState } from 'react';
import { motion, easeInOut, easeIn, easeOut } from 'framer-motion';
import '../styles/mediaquery.scss'


function Contact() {

  const meetingDivRef = useRef(null)
  const [divs, setDivs] = useState([])
  
  useEffect(()=>{
    const handleMouseMove = (e)=>{
      const mouseX = e.clientX
      const mouseY = e.clientY

      const newDiv = {
        id: Date.now(),
        x: mouseX,
        y: mouseY,
        imageUrl: `/src/media/contactimg${Math.floor(Math.random() * 7) + 1}.jpg`
      }

      setDivs((prevDivs) => [...prevDivs, newDiv])

      setTimeout(() => {
        setDivs((prevDivs) =>
          prevDivs.filter((div) => div.id !== newDiv.id)
        );
      }, 1500 + divs.length * 500);
      
    };
    
    const throttleFunction = (func, delay) => {
        let prev = 0;
        return (...args) => {
            let now = new Date().getTime();
            if (now - prev > delay) {
                prev = now;
                return func(...args);
            }
        }
    }
    const meetingElement = meetingDivRef.current

    const throttledMouseMove = throttleFunction(handleMouseMove, 200);

  if(meetingElement){
    meetingElement.addEventListener("mousemove",throttledMouseMove);
  }

  return () => {
    if (meetingElement) {
      meetingElement.removeEventListener("mousemove", throttledMouseMove)
    }
  };
}, []);


  return (
    <div id='contact' className='w-full h-screen bg-[#E2DAD6] relative overflow-hidden'>
      <div className='first-contact-div w-full h-screen absolute'>
        <div className='w-full h-1/2 relative'>
          <div ref={meetingDivRef} className='meeting w-full h-1/2 top-[15vh] pl-[5vw] absolute'>
            <h2 className='text-[8vw] uppercase font-semibold'>Let's have a meet</h2>
            <p className='text-[2.5vw]'>divanshsingh1612@gmail.com</p>
          </div>
        </div>
        <div id='socials' className='w-full absolute left-[5vw] '>
          <p className='my-socials mb-[5vh] uppercase font-semibold'>My Socials:</p>
          <div id='social-elem' className='w-full'>
            <div className='social-elem-inside flex justify-between w-1/3 mb-[3vh]'>
              <AnimatedLink href="https://github.com/divanshsingh">GITHUB</AnimatedLink>
              <AnimatedLink href="https://www.linkedin.com/in/divansh-singh-16053b258/">LINKEDIN</AnimatedLink>
            </div>
            <div className='social-elem-inside flex justify-between w-1/3'>
              <AnimatedLink href="https://www.instagram.com/divansh_xml/">INSTAGRAM</AnimatedLink>
              <AnimatedLink href="https://x.com/DivanshSin39085">TWITTER</AnimatedLink>
            </div>
          </div>
        </div>
      </div>
      {divs.map(div => (
        <div
          key={div.id}
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            left: `${div.x}px`,
            top: `${(div.y)*1/3.5}px`,
            // overflow: hidden,
            transform: 'translate(-50%, -50%)' // Center the div on the mouse position
          }}
        >
          <motion.img 
          className='w-full h-full object-cover rotate-12'
          src={div.imageUrl}
          initial={{y: "100%"}}
          animate={{y: ["100%", "0%", "100%"], rotate: Math.floor(Math.random() * 101) - 50, scale: [1, 0.9, 1]}}
          transition={{ease: easeOut, duration: 1.6}} />
        </div>
      ))}
    </div>
  );
}

const AnimatedLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      className='relative text-black'
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}
      <motion.span
        className='block h-0.5 bg-black absolute bottom-0 left-0'
        variants={{
          rest: { width: 0 },
          hover: { width: '100%'}
        }}
        transition={{ease: easeInOut, duration: 0.3 }}
      />
    </motion.a>
  );
};

export default Contact;
