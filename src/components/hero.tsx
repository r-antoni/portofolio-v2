//Components
import HeroContent from './hero-content'

const Hero = () => {
  return (
    <section className='flex flex-col w-full'>
      {/* Blackhole */}
       <video
      autoPlay
      muted
      loop
      className="hidden xl:flex rotate-180 absolute top-[-470px] z-[1] w-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm"/>
      </video>
      {/* Content */}
      <HeroContent />
    </section>
  )
}

export default Hero