//Data
import { projectData } from '@/lib/data'
//Components
import ProjectPreview from '../common/project-preview'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col justify-center items-center gap-10 max-w-7xl mx-auto pt-20 z-40'>
      <h2 className="text-4xl pb-5">Projects</h2>
      <div className='"flex flex-col justify-center items-center w-full mt-10"'>
          {projectData.map((project, index) => (
            <ProjectPreview
            key={index}
            name={project.name}
            image= {project.image}
            desc= {project.desc}
            link= {project.link}
            github= {project.github}
            wrapper= {project.wrapper}
            item= {project.item}
            margin= {project.margin}
            />
          ))}
      </div>
    </section>
  )
}

export default Projects