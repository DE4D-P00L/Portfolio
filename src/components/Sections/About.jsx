import { motion } from "framer-motion";
import AboutCodeCard from "../ui/AboutCodeCard";
import Reveal from "../animations/Reveal";
import RevealFromBottom from "../animations/RevealFromBottom";
import NavAnimation from "../animations/NavAnimation";

const About = () => {
  return (
    <NavAnimation section="about">
      <div
        className="min-h-screen bg-secondary text-fontColor-dark grid items-center py-16 relative z-[1]"
        id="about">
        <div
          className={`absolute top-0 left-0 w-full h-full grid place-content-center z-[10] stroke-2 x-10 watermark-about`}
        />
        <div className="container flex flex-col md:flex-row gap-5 z-10">
          <div className="flex-1 flex flex-col max-w-[75ch] justify-center h-full">
            <RevealFromBottom>
              <h2 className="text-5xl font-bold font-kanit">
                <span className="dark:text-accent-dark text-accent-light">
                  {"01. "}
                </span>
                ABOUT
              </h2>
            </RevealFromBottom>
            <p className="mt-10 text-2xl text-justify">
              I’m a{" "}
              <Reveal>
                <span className="dark:text-accent-dark text-accent-light">
                  {"Full Stack Developer"}
                </span>
              </Reveal>{" "}
              passionate about building scalable and interactive web applications. I enjoy transforming ideas into real products using the{" "}
              <Reveal>
                <span className="dark:text-accent-dark text-accent-light">
                  {"MERN stack, Next.js, Vue.js, Nuxt.js"}
                </span>
              </Reveal>{" "}
              and modern web technologies. I focus on creating clean, user-friendly, and high-performance digital experiences.
            </p>
            <p className="mt-6 text-2xl text-justify">
              I enjoy solving complex problems and exploring AI-powered solutions using tools like{" "}
              <Reveal>
                <span className="dark:text-accent-dark text-accent-light">
                  {"OpenAI and LangChain"}
                </span>
              </Reveal>
              . I’m constantly learning, building projects, and improving my skills through hands-on development. My goal is to create impactful products that combine innovation, functionality, and great user experience.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-full flex justify-center z-[10]">
              <AboutCodeCard />
            </motion.div>
          </div>
        </div>
      </div>
    </NavAnimation>
  );
};
export default About;
