import React from "react";
import "./Style.css";

const projectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    link: "https://cyf-bahare09-hotel-react.netlify.app/",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    link: "starter-kit-1fqo.onrender.com/",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    link: "video-recommandation-4.onrender.com/",
  },
];


const Projects = () => {
  const [currentProject, setCurrentProject] = React.useState(0);

  const handleNext = () => {
    setCurrentProject((prevProject) => (prevProject + 1) % projectsData.length);
  };

  const handlePrevious = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projectsData.length - 1 : prevProject - 1
    );
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>
          <a
            href={projectsData[currentProject].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectsData[currentProject].title}
          </a>
        </h3>
        <p>{projectsData[currentProject].description}</p>
      </div>
      <div className="buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </section>
  );
};
 <section id="contact">
      <h2>Contact Me</h2>
      <form></form>
    </section>

export default Projects;
