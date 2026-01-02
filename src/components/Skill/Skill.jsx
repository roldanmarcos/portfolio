import { useEffect, useState } from "react";
import './Skill.css';

const Skill = ({ name, progress, icon }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 150);

    return () => clearTimeout(timeout);
    }, [progress]);

    return(
        <div className='skill'>
            <div className='iconSkill'>
                <img src={icon} className="icon"></img>
            </div>
            <div className='infoSkill'>
                <p>{name}</p>
                <div className='progressSkill'>
                    <div
                        className="progressFill"
                        style={{ width: `${animatedProgress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skill;