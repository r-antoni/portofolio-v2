//Next
import Link from "next/link"
//Data
import { skillData } from "@/lib/data"
//Components
import SkillProvider from "../common/skill-provider"


const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center gap-10 md:gap-20 z-30 md:px-40 py-20">
        {/* About */}
        <div className="flex flex-col justify-center items-center gap-5 w-fit">
            <h2 className="text-4xl">About</h2>
            <p className="md:text-center">Hi again, I&apos;m Reindra a fullstack web developer that specialized in react techstack. I love to explore and try new tech and also building impactful projects. Even though I&apos;m a fullstack dev, I&apos;m leaning more towards frontend development, but I&apos;m open to both fullstack and frontend position when opportunity arise.</p>
            <p className="md:text-center">You can check out some of <Link href="/#projects"> <button className="text-accent">My Work</button></Link>  below. I&apos;m passionate about research, analysis, and ensuring code scalability and quality. I take immense pride in my work and have a deep love for the code I create. If you have any questions, please feel free to reach out to me on<Link href="https://www.linkedin.com/in/reindra-antoni/"> <button className="text-accent">LinkedIn</button></Link>. I&apos;d be happy to answer them.</p>
        </div>
        {/* Skills */}
        <div className="flex flex-col justify-center items-center gap-10">
            <h2 className="text-4xl">Tools</h2>
            <div className="grid grid-cols-3 md:flex justify-center items-center gap-10 md:h-10" style={{transform: "scale(0.9)"}}>
                {skillData.map((image, index) => (
                  <SkillProvider
                    key={index} 
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
            </div>
            <p>These are the main tools that I have been using and actively learning.</p>
        </div>
    </section>
  )
}

export default About