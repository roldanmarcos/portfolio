import TemplatePage from '../../layouts/TemplatePage/TemplatePage';
import './FullstackPage.css';
import { fullstackSkills } from '../../data/skills';
import { fullstackProjects } from '../../data/projects';

const FullstackPage = () => {
    return(
        <TemplatePage
            subtitle="Fullstack Developer"
            skills={fullstackSkills}
            projects={fullstackProjects}
        />
    );
}

export default FullstackPage;