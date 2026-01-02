import './FrontendPage.css';
import TemplatePage from '../../layouts/TemplatePage/TemplatePage';
import { frontendSkills } from '../../data/skills';
import { frontendProjects } from '../../data/projects';

const FrontendPage = () => {
    return(
        <TemplatePage 
            subtitle="Frontend Developer"
            skills={frontendSkills}
            projects={frontendProjects}
        />
    );
}

export default FrontendPage;