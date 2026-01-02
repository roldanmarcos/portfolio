import TemplatePage from '../../layouts/TemplatePage/TemplatePage';
import './BackendPage.css';
import { backendSkills } from '../../data/skills';
import { backendProjects } from '../../data/projects';

const BackendPage = () => {
    return(
        <TemplatePage
            subtitle="Backend Developer"
            skills={backendSkills}
            projects={backendProjects}
        />
    );
}

export default BackendPage;