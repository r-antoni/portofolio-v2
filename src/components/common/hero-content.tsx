"use client"
//Next
import Link from "next/link"
import Image from "next/image";
//Framer
import { motion } from "motion/react"
//Icons
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

const HeroContent = () => {
  return (
    <motion.div
    animate="visible"
    className="flex flex-row items-center justify-center lg:px-4 xl:px-12 py-40 w-full z-[20]"
    >
      {/* Intro */}
      <motion.div 
          initial={{
            x: -200,
            opacity:0
          }}
          transition={{duration: 1.25}}
          whileInView={{x:0, opacity:1}}
          viewport={{once: true}}
      className="flex flex-col justify-center text-start gap-10 m-auto w-full h-full">
       <p className="text-4xl md:text-5xl xl:6xl">Reindra Antoni, Fullstack Web Developer</p>
       <p>I&apos;m a junior react fullstack web developer. <br />Based in Bandung, Indonesia</p>
       {/* Email & Linkedin */}
       <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-accent">
            <MdEmail size={16} />
            <Link href="mailto:reindraantoni@gmail.com">
              <p>reindraantoni@gmail.com</p>
            </Link>
          </div>
          <div className="flex items-center gap-3 text-accent">
          <FaLinkedinIn size={16} />
            <Link href="https://www.linkedin.com/in/reindra-antoni/">
              <p>Reindra Antoni</p>
            </Link>
          </div>
       </div>
      </motion.div>
      {/* Illustration */}
      <motion.div
          initial={{
            x: 200,
            opacity:0
          }}
          transition={{duration: 1.25}}
          whileInView={{x:0, opacity:1}}
          viewport={{once: true}}
      className="hidden lg:flex justify-center items-center xl:ml-[300px] w-full h-full"
      >
        <Image src="/mainIconsdark.svg" alt="Icons" width={500} height={600}/>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent