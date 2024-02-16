import { motion } from "framer-motion";
import image from "../../assets/about.png";
import Reveal from "../animations/Reveal";
import RevealFromBottom from "../animations/RevealFromBottom";
import NavAnimation from "../animations/NavAnimation";

const About = () => {
  return (
    <NavAnimation section="about">
      <div
        className="min-h-screen bg-secondary text-fontColor-dark grid items-center font-kanit py-16 relative z-[1]"
        id="about">
        <div
          className={`absolute top-0 left-0 w-full h-full grid place-content-center z-[10] stroke-2 x-10 watermark-about`}
        />
        <div className="container flex flex-col md:flex-row gap-5 z-10">
          <div className="flex-1 flex flex-col max-w-[75ch] justify-center h-full">
            <RevealFromBottom>
              <h2 className="text-5xl font-bold">
                <span className="dark:text-accent-dark text-accent-light">
                  {"01. "}
                </span>
                ABOUT
              </h2>
            </RevealFromBottom>
            <p className="mt-10 text-2xl text-justify">
              During my studies as a{" "}
              <Reveal section="about">
                <span className="dark:text-accent-dark text-accent-light">
                  {"MCA"}
                </span>
              </Reveal>{" "}
              student, I delved into back-end development and realized my
              natural flair for UI/UX design. Motivated by this realization, I
              began learning front-end development alongside my studies.
            </p>
            <p className="mt-3 text-2xl text-justify">
              Driven and enthusiastic{" "}
              <Reveal section="about">
                <span className="dark:text-accent-dark text-accent-light">
                  {"Full-Stack developer"}
                </span>
              </Reveal>{" "}
              eager to leverage my{" "}
              <Reveal section="about">
                <span className="dark:text-accent-dark text-accent-light">
                  {"MERN Stack"}
                </span>
              </Reveal>{" "}
              skills to contribute to innovative projects. Possess a strong
              foundation in HTML, CSS, JavaScript, React, Node.js, Express.js,
              and MongoDB, etc. Coupled with a passion for creating
              user-friendly, responsive and impactful web applications.
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
              }}>
              <img src={image} alt="" className="w-[550px] z-[10]" />
            </motion.div>
          </div>
        </div>
      </div>
    </NavAnimation>
  );
};
export default About;
