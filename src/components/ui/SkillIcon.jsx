import { motion } from "framer-motion";

const SkillIcon = ({ skill, animVariants }) => {
  return (
    <motion.div
      variants={animVariants}
      className="flex flex-col p-2 m-2 bg-gray-700 rounded-lg text-white hover:bg-gray-500 duration-300">
      <div className="w-[100px] h-[100px] mx-auto">
        <img
          src={skill.imageUrl}
          alt={`${skill.title} icon`}
          className="object-contain w-full h-full"
        />
      </div>
      <p className="text-center select-none">{skill.title}</p>
    </motion.div>
  );
};
export default SkillIcon;
