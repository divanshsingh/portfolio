import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import "../styles/about.scss"
import "../styles/mediaquery.scss"

function About() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "linear" },

    },
    one: {
      x: "-100%",
      transition: { duration: 0.5, ease: "linear" },

    },
    two: {
      y: "-100%",
      transition: { duration: 0.5, ease: "linear" },

    },
   Three: {
      x: "-100%",
      transition: { duration: 0.5, ease: "linear" },

    },

    four: {
      x: "100%",
      transition: { duration: 0.5, ease: "linear" },
    },
  };

  return (
    <div id="about">
      <h2 className="font-['Founders_Grotesk_Condensed']">About me</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1.5+</h3>
          <p>Years SEO Experience </p>
          <span className="abouttxt">Ensuring seamless connection with SEO Team.</span>
        </motion.div>
        <motion.div
          className="serviceBox2 pt-5 "
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <img className="w-[50px] h-[50px] rounded-full" src="/aboutme.jpeg" alt="divansh" />
          <span>Who Am I</span>
          <span className="abouttxt">I'm Divansh a SEO/Content Writer Want To Be Full Stack, started With Frontend</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.Three}
          transition={{
            delay: 0.2,
          }}
        >
          <RiGraduationCapLine />
          <span>Education</span>
          <span className="abouttxt">No Computer Degree but skills</span>
        </motion.div>
        <motion.div
          className="serviceBox4 pt-5"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <FaReact />
          <span>Frontend Development</span>
          <span className="abouttxt">Even Being SEO I Spend More Time Making Responsive UI <br /> I uses React/SASS/Tailwind/Firebase and give enough attention to Web Performace</span>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
