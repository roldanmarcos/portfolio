import Profile from '../../components/Profile/Profile';
import './WelcomePage.css';
import front from '../../assets/front.png'
import back from '../../assets/back.png'
import full from '../../assets/full.png'
import logo from "../../assets/logo.svg"

const WelcomePage = () => {
    return(
        <div className='welcomePage'>
            <img src={logo} alt="Logo" className="logowelcome"/>
            <h1>Marcos Roldan</h1>
            <p>Choose the profile</p>
            <div className='profilesContainer'>
                <Profile name="Frontend" link="/frontend" icon={front}/>
                <Profile name="Backend" link="/backend" icon={back}/>
                <Profile name="FullStack" link="/fullstack" icon={full}/>
            </div>
        </div>
    );
}

export default WelcomePage;