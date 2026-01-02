import { useState } from "react";
import './Project.css';
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import photo from '../../assets/photo.jpg'

const Project = ({ project }) => {
    const [projectOpen, setProjectOpen] = useState(false);

    return (
    <>
      <div className="project" onClick={() => setProjectOpen(true)}>
        <div className="photoProject">
          <img src={project.photo}></img>
          <div className="overlay"></div>
        </div>
        <div className="nameProject">{project.name}</div>
      </div>

      {projectOpen && (
        <div
          className="modalOverlay"
          onClick={() => setProjectOpen(false)}
        >
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectInfo project={project} />
          </div>
        </div>
      )}
    </>
  );
};

export default Project;