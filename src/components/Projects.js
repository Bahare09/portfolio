import React, { useState } from "react";
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
    link: "https://cyf-bahare09-hotel-react.netlify.app/",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    link: "https://cyf-bahare09-hotel-react.netlify.app/",
  },
  {
    title: "Project 4",
    description: "Description of Project 4",
    link: "https://cyf-bahare09-hotel-react.netlify.app/",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

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

export default Projects;
