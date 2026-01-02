import './TemplatePage.css';
import Header from '../../components/Header/Header';
import Project from '../../components/Project/Project';
import Skill from '../../components/Skill/Skill';
import photo from '../../assets/photo.jpg'
import linkedin from '../../assets/icons/linkedin-logo.svg';
import github from '../../assets/icons/github-logo.svg';

const TemplatePage = ({ subtitle, skills, projects }) => {

    const languages = skills.filter(skill => skill.type === 'language');
    const databases = skills.filter(skill => skill.type === 'database');
    const frameworks = skills.filter(skill => skill.type === 'framework');
    const design = skills.filter(skill => skill.type === 'design');
    const others = skills.filter(skill => skill.type === 'other');

    return(
        <div className='templatePage' >
            <Header />
            <div className='pageContainer' id='about'>
                <div className='about' >
                    <div className='textAbout'>
                        <h1 className="title">
                            <span className="hello">Hello,</span>{" "}
                            I’m Marcos Roldan <br />
                            <span className="subtitle">{subtitle}</span>
                        </h1>
                        <p>I am a computer programming student with a strong background in software development and experience in personal projects. I am proactive and a quick learner, passionate about solving complex problems and, above all, learning new technologies.</p>
                    </div>
                    <div className='imageAbout'>
                        <img src={photo}></img>
                    </div>
                </div>
                <div className='aboutMobile'>
                    <div className='titleMobile'>
                        <div className='imageAbout'>
                            <img src={photo}></img>
                        </div>
                        <h1 className="title">
                            <span className="hello">Hello,</span>{" "}
                            I’m Marcos Roldan <br />
                            <span className="subtitle">{subtitle}</span>
                        </h1>
                    </div>
                    <div>
                        <p>I am a computer programming student with a strong background in software development and experience in personal projects. I am proactive and a quick learner, passionate about solving complex problems and, above all, learning new technologies.</p>
                    </div>
                    
                </div>
                <div className="skills" id="skills">
                    <h2>Skills</h2>

                    <div className="skillsContainer">

                        {languages.length > 0 && (
                            <div className="sectionSkill">
                            <h3>Languages</h3>
                            {languages.map(skill => (
                                <Skill key={skill.name} {...skill} />
                            ))}
                            </div>
                        )}

                        {databases.length > 0 && (
                            <div className="sectionSkill">
                            <h3>Databases</h3>
                            {databases.map(skill => (
                                <Skill key={skill.name} {...skill} />
                            ))}
                            </div>
                        )}

                        {frameworks.length > 0 && (
                            <div className="sectionSkill">
                            <h3>Frameworks</h3>
                            {frameworks.map(skill => (
                                <Skill key={skill.name} {...skill} />
                            ))}
                            </div>
                        )}

                        {design.length > 0 && (
                            <div className="sectionSkill">
                            <h3>Design</h3>
                            {design.map(skill => (
                                <Skill key={skill.name} {...skill} />
                            ))}
                            </div>
                        )}

                        {others.length > 0 && (
                            <div className="sectionSkill">
                            <h3>Others</h3>
                            {others.map(skill => (
                                <Skill key={skill.name} {...skill} />
                            ))}
                            </div>
                        )}
                        
                    </div>
                </div>
                <div className='projects' id="projects">
                    <h2 className='titleSection'>Projects</h2>
                    <div className="projectsContainer">
                        {projects.map(project => (
                            <Project
                                key={project.name}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
                <div className='contact'>
                    <p>Contact me here</p>
                    <div className='social' onClick={() => window.open("https://www.linkedin.com/in/marcos-guillermo-roldan-677090245/", "_blank")}>
                        <img src={linkedin} className="icon"></img>
                    </div>
                    <div className='social'onClick={() => window.open("https://github.com/roldanmarcos", "_blank")}>
                        <img src={github} className="icon"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplatePage;