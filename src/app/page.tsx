// Data
import { navItems } from "@/lib/data";
// Components
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/section/hero";
import About from "@/components/section/about";
import Projects from "@/components/section/projects";
import Contact from "@/components/section/contact";

export default function Home() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <div className="flex flex-col justify-center items-center px-10 gap-y-20"> 
        <Hero />  
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
