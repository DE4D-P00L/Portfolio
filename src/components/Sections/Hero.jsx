import { FaGithub } from "react-icons/fa";
import NavAnimation from "../animations/NavAnimation";
import Reveal from "../animations/Reveal";
import resume from "../../assets/resume.pdf";
import Socials from "../ui/Socials";

const Hero = () => {
  return (
    <NavAnimation section="home">
      <div className="dark-container h-screen min-h-screen pt-16 relative z-[1]">
        <div
          className={`absolute top-0 left-0 w-full h-full grid place-content-center -z-[1] stroke-2 watermark-html`}
        />
        <div className="container flex flex-col justify-center h-full text-[3rem] sm:text-[5rem] leading-[3rem] sm:leading-[5rem] z-[12] select-none">
          <div>
            <h2 className="mt-20">Hello,</h2>
            <h2>
              I am{" "}
              <Reveal>
                <span className="dark:text-accent-dark text-accent-light font-bold font-kanit">
                  Prashant
                </span>
              </Reveal>
            </h2>
            <h2 className="break-words">Full Stack Developer</h2>
            <div className="mt-5 flex gap-5 flex-wrap text-xl sm:text-[2rem] items-center leading-[50px]">
              <a
                href="https://github.com/DE4D-P00L/"
                target="_blank"
                className="dark:bg-accent-dark bg-accent-light text-white px-5 rounded-lg flex items-center gap-4 py-1.5">
                <FaGithub className="text-3xl" />
                Github
              </a>
              <a
                href={resume}
                download="Resume"
                target="_blank"
                className="dark:border-accent-dark border-accent-light text-accent-light dark:text-accent-dark border-4 rounded-lg px-5 py-1 flex items-center gap-4">
                Resume
              </a>
            </div>
            <Socials className="mb-20 mt-10" />
          </div>
        </div>
      </div>
    </NavAnimation>
  );
};
export default Hero;
