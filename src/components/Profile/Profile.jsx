import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = ({ name, icon, link}) => {
    const navigate = useNavigate();

    return(
        <div className='profile'>
            <div className='iconProfile' onClick={() => navigate(link)}>
                <img src={icon}></img>
            </div>
            <h4>{name}</h4>
        </div>
    );
}

export default Profile;