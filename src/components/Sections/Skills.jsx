import { skillsData } from "../../data/skills.data.js";
import { toolsData } from "../../data/tools.data.js";
import SkillIcon from "../../components/ui/SkillIcon.jsx";
import RevealFromBottom from "../animations/RevealFromBottom.jsx";
import { motion } from "framer-motion";
import RevealWithStagger from "../animations/RevealWithStagger.jsx";
import NavAnimation from "../animations/NavAnimation.jsx";

const animVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <NavAnimation section="skills">
      <div
        className="dark-container min-h-screen py-16 transition-colors duration-100 z-[1] relative"
        id="skills">
        <div
          className={`absolute top-0 left-0 w-full h-full grid place-content-center z-[2] x-10 watermark-skills`}
        />
        <div className="container flex flex-col z-10 justify-between">
          <RevealFromBottom section="about">
            <h2 className="text-5xl font-bold text-right">
              <span className="dark:text-accent-dark text-accent-light">
                {"02. "}
              </span>
              SKILLS & TOOLS
            </h2>
          </RevealFromBottom>
          <div className="z-[10] mt-16">
            <RevealWithStagger
              className={"flex flex-wrap max-w-[800px] mx-auto justify-center"}>
              {skillsData?.map((skill) => (
                <motion.div key={skill.id} variants={animVariants}>
                  <SkillIcon skill={skill} />
                </motion.div>
              ))}
            </RevealWithStagger>
          </div>
          <div className="z-[10] mt-16">
            <RevealWithStagger
              className={"flex flex-wrap max-w-[800px] mx-auto justify-center"}>
              {toolsData?.map((tool) => (
                <motion.div key={tool.id} variants={animVariants}>
                  <SkillIcon skill={tool} key={tool.id} />
                </motion.div>
              ))}
            </RevealWithStagger>
          </div>
        </div>
      </div>
    </NavAnimation>
  );
};
export default Skills;
