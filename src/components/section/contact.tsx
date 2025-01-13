//Next
import Link from "next/link";
//Components
import BackgroundCircles from "../common/circle";
import Social from "../common/social";
import MagicButton from "../ui/magic-button";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center items-center max-w-7xl h-screen gap-10 px-5 py-32">
      <BackgroundCircles />
      <div className="flex flex-col items-center gap-5 z-50 tracking-wide">
        <p className="text-2xl text-accent font-semibold flex items-center tracking-wide">
          <span className="text-white"> What&apos;s Next ?</span>
        </p>
        <h2 className="text-4xl font-semibold text-accent">Get In Touch</h2>
        <p className="max-w-[600px] text-center text-white">
          If you have any question or have an offer for me, feel free to contact me on any social media or through my email. You can also get in contact with me through LinkedIn
        </p>
        <Link href="https://www.linkedin.com/in/reindra-bachtiar-antoni/" target="_blank" className="py-5">
          <MagicButton title="Say Hello" />
        </Link>
       <Social />
      </div>
    </section>
  );
};

export default Contact;
