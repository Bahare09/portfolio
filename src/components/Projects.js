import React, { useState } from "react";
import "./Style.css";

const projectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
  },
  {
    title: "Project 3",
    description: "Description of Project 2",
  },
  {
    title: "Project 4",
    description: "Description of Project 2",
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
        <h3>{projectsData[currentProject].title}</h3>
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
