import React from 'react'
import { motion } from "framer-motion"

function Marque() {
  return (
    <div id='marque' className='w-full py-10 bg-[#6482AD]'>
      <div className='text border-t-[1px] border-b-[1px] border-zinc-500 flex overflow-hidden whitespace-nowrap text-[#E2DAD6]'>
        <motion.h1 initial={{x: 0}}
        animate={{x: "-100%"}}
        transition={{ease: "linear", duration: 10, repeat: Infinity}}
        className='text-[12vw] font-["Founders_Grotesk_Condensed"] font-semibold uppercase tracking-tight -mt-1 leading-none pr-[10rem]'>let's know about me</motion.h1>
        <motion.h1 initial={{x: 0}}
        animate={{x: "-100%"}}
        transition={{ease: "linear", duration: 10, repeat: Infinity}}
        className='text-[12vw] font-["Founders_Grotesk_Condensed"] font-semibold uppercase tracking-tight -mt-1 leading-none pr-[10rem]'>let's know about me</motion.h1>
      </div>
    </div>
  )
}

export default Marque
