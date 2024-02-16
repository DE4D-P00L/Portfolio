/* eslint-disable react/prop-types */
import NavAnimation from "./animations/NavAnimation";
import Reveal from "./animations/Reveal";
import Tags from "./ui/Tags";
import { FaGithub, FaPlay } from "react-icons/fa";

const ProjectItem = ({ project, reverse }) => {
  return (
    <NavAnimation section="projects">
      <div
        className={`pb-20 overflow-hidden flex text-xl flex-col gap-10 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}>
        <Reveal
          className="flex-1 grid place-content-center"
          section="projects"
          amount={0.5}>
          <div className="hover:scale-[1.08] transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-800">
            <img src={project.imageUrl} alt="" className="w-full rounded-md" />
          </div>
        </Reveal>
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-bold text-5xl text-accent-light dark:text-accent-dark break-words">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-x-2.5 gap-y-2 my-3">
            {project.stack?.map((item, i) => (
              <Tags key={i} tag={item} />
            ))}
          </div>
          <p className="max-w-[60ch] mx-auto text-justify">{project.summary}</p>
          {project.testCredentials && (
            <div className="flex flex-col my-3 p-3 px-5 border border-primary-dark dark:border-primary-light rounded-xl w-fit relative text-base">
              <span className="absolute -top-4 bg-primary-light dark:bg-primary-dark px-2">
                Test Credentials
              </span>
              <h3>Username/Email: {project.testCredentials?.[0]}</h3>
              <h3>Password: {project.testCredentials?.[1]}</h3>
            </div>
          )}
          <div className="flex gap-5 flex-wrap">
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              className="w-full sm:w-fit uppercase bg-accent-light dark:bg-accent-dark px-3 py-2 rounded-md text-primary-light dark:text-primary-dark flex items-center justify-center gap-3 dark:hover:bg-[hsl(176,55%,55%)] hover:bg-[hsl(0,100%,45%)]">
              <FaGithub className="text-2xl" />
              Source Code
            </a>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              className="w-full sm:w-fit uppercase text-accent-light dark:text-accent-dark px-3 py-2 rounded-md border-2 border-accent-light dark:border-accent-dark flex items-center justify-center gap-3">
              <FaPlay className="text-2xl" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </NavAnimation>
  );
};
export default ProjectItem;
