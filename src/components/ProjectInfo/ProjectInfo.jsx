import Button from '../Button/Button';
import './ProjectInfo.css';

const ProjectInfo = ({ project }) => {
    return(
        <div className='projectInfo'>
            <div className='projectPhoto'>
                <img src={project.photo}></img>
                <div className="overlayy"></div>
            </div>
            <div className='info'>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <h3>Skills Used</h3>
                <ul>
                    {project.skills.map((skill, index) => (
                        <li key={index} className="skillItem">{skill}</li>
                    ))}
                </ul>
                <Button text='Ver repositorio' link={project.link} variant="fixed"/>
            </div>
        </div>
    );
}

export default ProjectInfo;