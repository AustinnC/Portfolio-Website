import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/A.png'
import LogoSubtitle from '../../assets/images/AustinC.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src={LogoS} alt="logo " />
    <img className='sub-logo' src={LogoSubtitle} alt="slobodan "/>
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='nreferrer' href='https://www.linkedin.com/in/austin-chung-5a9404338/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='nreferrer' href='https://github.com/AustinnC'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
    </ul>
</div>
)

export default Sidebar