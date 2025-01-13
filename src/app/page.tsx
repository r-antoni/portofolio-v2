// Data
import { navItems } from "@/lib/data";
// Components
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

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
