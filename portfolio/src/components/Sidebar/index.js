import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faLinkedin, faGithub } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src="https://www.shutterstock.com/shutterstock/videos/1066891573/thumb/7.jpg?ip=x480" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>{' '}
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul className='this-list-shit'>
        <li>
            <a target = '_blank' rel = 'noreferrer' href='https://www.linkedin.com/in/vuk-perovic-336706187/'>
               <img src='https://www-cdn.eumetsat.int/files/2021-06/EUMETSAT_SMIcons_Blue__LinkedIn.png'/>
            </a>
        </li>
        <li>
            <a target = '_blank' rel = 'noreferrer' href='https://github.com/Vukipoo'>
                <img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'/>
            </a>
      </li>
        </ul>
  </div>
)

export default Sidebar
