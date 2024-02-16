import ProjectItem from "../ProjectItem";
import { projectData } from "../../data/projects.data.js";
import RevealFromBottom from "../animations/RevealFromBottom.jsx";

const Projects = () => {
  return (
    <div className="dark-container min-h-screen relative z-[1]" id="projects">
      <div
        className={`absolute top-0 left-0 w-full h-[200px] -z-[1] watermark-projects`}
      />
      <div className="container flex flex-col text-[3rem] sm:text-[5rem] leading-[3rem] sm:leading-[5rem] justify-start z-10">
        <div className="flex flex-col">
          <RevealFromBottom>
            <h2 className="text-5xl font-bold py-20">
              <span className="dark:text-accent-dark text-accent-light">
                {"03. "}
              </span>
              RECENT PROJECTS
            </h2>
          </RevealFromBottom>
        </div>
        <div className="flex flex-col gap-10">
          {/* <ProjectItem project={DUMMY_DATA[0]} />
          <ProjectItem project={DUMMY_DATA[0]} reverse/> */}
          {projectData.map((project, idx) => (
            <ProjectItem
              project={project}
              key={project.id}
              reverse={idx % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
