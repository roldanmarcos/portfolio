import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from '../Button/Button';
import './Header.css';
import SwitchButton from "../SwitchButton/SwitchButton";
import logo from "../../assets/logo.svg"
import hamburgerMenu from "../../assets/hamburger-menu.svg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const getCurrentPageLabel = () => {
    switch(location.pathname) {
        case '/frontend':
            return 'Front';
        case '/backend':
            return 'Back';
        case '/fullstack':
            return 'Full';
        default:
            return 'Profile';
    }
    }

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return(
        <div className={`header ${menuOpen ? 'open' : ''}`}>
            <div className="headerContainer">

            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <img src={hamburgerMenu} className="icon"></img>
            </div>

            <div className='logo' onClick={() => { navigate('/'); }}>
                <img src={logo} alt="Logo" className="icon"/>
            </div>

            <div className='sectionsOptions'>
                <div className='sectionsOptions'>
                    <button className='sectionButton' onClick={() => scrollToSection('about')}>About</button>
                    <button className='sectionButton' onClick={() => scrollToSection('skills')}>Skills</button>
                    <button className='sectionButton' onClick={() => scrollToSection('projects')}>Projects</button>
                </div>
            </div>
            <div className='configureOptions'>
                <div className="dropdown">
                    <button
                        className="sectionButton"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        {getCurrentPageLabel()} ▾
                    </button>

                    {dropdownOpen && (
                        <div className="dropdownMenu">
                            <button onClick={() => { navigate('/frontend'); setDropdownOpen(false); }}>
                                Frontend
                            </button>
                            <button onClick={() => { navigate('/backend'); setDropdownOpen(false); }}>
                                Backend
                            </button>
                            <button onClick={() => { navigate('/fullstack'); setDropdownOpen(false); }}>
                                Fullstack
                            </button>
                        </div>
                    )}
                </div>
                <SwitchButton />
                <Button text="Contact" link="https://www.linkedin.com/in/marcos-guillermo-roldan-677090245/"/>
            </div>

           <div className="contactHeader">
                <Button text="Contact" link="https://www.linkedin.com/in/marcos-guillermo-roldan-677090245/"/>
            </div>

            <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
                <button onClick={() => { scrollToSection('about'); setMenuOpen(false); }}>About</button>
                <button onClick={() => { scrollToSection('skills'); setMenuOpen(false); }}>Skills</button>
                <button onClick={() => { scrollToSection('projects'); setMenuOpen(false); }}>Projects</button>
                <button onClick={() => navigate('/frontend')}>Frontend</button>
                <button onClick={() => navigate('/backend')}>Backend</button>
                <button onClick={() => navigate('/fullstack')}>Fullstack</button>
                <SwitchButton />
            </div>
        </div>
        </div>
    );
}

export default Header;