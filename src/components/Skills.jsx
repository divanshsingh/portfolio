import React, { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { motion } from 'framer-motion';
import '../styles/mediaquery.scss'
import Frontendanimation from '/frontendanimation.mp4'
import Digitalmarketing from '/digitalmarketing.mp4'
import Programinglang from '/programinglang.mp4'
import Github from '/github.mp4'

function Skills() {
  const [rotateStates, setRotateStates] = useState([0, 0, 0, 0]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const descriptions = [
    "A Frontend Developer skilled in JavaScript, React, Sass, Tailwind CSS, and Framer Motion. Specializes in building responsive, interactive web pages with smooth animations, ensuring great user experiences across devices.",
    "I have strong digital marketing skills, mainly in SEO then, content marketing, and social media strategy. I use tools like Google Analytics, Google Search Console, and SEMrush to improve website performance and visibility.",
    "I use JavaScript for frontend development and have also learned C++.",
    "I have experience with Git for version control and use GitHub to manage code, collaborate with others, and track changes."
  ];

  const videos = [
    Frontendanimation,
    Digitalmarketing,
    Programinglang,
    Github
  ];

  function handleHover(index) {
    const newRotateStates = rotateStates.map((rotate, i) => (i === index ? 180 : rotate));
    setRotateStates(newRotateStates);
    setHoveredSkill(index);
  }

  function handleHoverEnd(index) {
    const newRotateStates = rotateStates.map((rotate, i) => (i === index ? 0 : rotate));
    setRotateStates(newRotateStates);
    setHoveredSkill(null);
  }

  const skills = ["FRONT-END DEVELOPMENT", "Digital Marketing Skills", "Programming Languages", "Version Control"].map((item, index) => {
    return (
      <div id='idv-skill'
        onMouseEnter={() => handleHover(index)} 
        onMouseLeave={() => handleHoverEnd(index)} 
        key={index} 
        className='w-[40vw] rounded-tl-[20px] rounded-br-[20px] flex justify-between border-b-[1px] bg-[#6482AD] text-[#E2DAD6] border-[#434242] pt-[2vh] mt-[3vh] top-1'
        style={{ boxShadow: '7px 7px 0px 0px rgba(0, 0, 0, 0.7)' }}
      >
        <h2 className='text-[1.5vw] font-medium uppercase pl-[8px]'>{item}</h2>
        <GoArrowLeft 
          style={{ transform: `rotate(${rotateStates[index]}deg)`, transition: 'transform 0.5s' }} 
          className='text-[3vw] font-[50] -rotate-180' 
        />
      </div>
    )
  });

  return (
    <div id='skills' className='w-full h-[100vh] bg-[#E2DAD6] -mt-10 border-[#000]'>
    <div className='w-full flex flex-col'>
      <h2 id='skills-h2' className='text-[2.5rem] border-b-[1px] border-black w-fit tracking-tight leading-none ml-[2.5rem] mt-[2rem] pb-[10px] font-["Founders_Grotesk_Condensed"]'>My skills</h2>
      <div id='skills-container' className='w-full h-full flex absolute'>
        <div className='skillstext w-1/2 h-full flex justify-center items-center'>
          <div className='idv-skills-div' > 
            {skills}
          </div>
        </div>
        <div className='skillvisual w-1/2 h-full mt-[5vh] flex flex-col items-center'>
          <div className='skilldescription flex justify-center items-center'>
            <p className='text-[20px] font-thin text-black tracking-[3px] px-[2.5vw] py-[5vh] font-["Neue_Montreal"]'>
              {hoveredSkill !== null ? descriptions[hoveredSkill] : "Hover over a skill to see details."}
            </p>
          </div>
          {hoveredSkill !== null && (
            <motion.div 
              className='skillsvideo flex justify-center items-center'
              initial={{ y: 50, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='skill-video-keeper w-[30vw] h-[30vw] bg-[#E2DAD6] rounded-tl-[100px] rounded-br-[100px] overflow-hidden'>
                <video className='w-full h-full object-cover' src={videos[hoveredSkill]} autoPlay loop muted></video>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}

export default Skills;