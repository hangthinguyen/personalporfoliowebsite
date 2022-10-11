import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className='navbar-container'>
            <Link to="/Home" className='navbar-item'><FontAwesomeIcon icon={faHouse} /></Link>
            <Link to="/About" className='navbar-item'><FontAwesomeIcon icon={faUser} /></Link>
            <Link to="/Services" className='navbar-item'><FontAwesomeIcon icon={faList} /></Link>
            <Link to="/Portfolio" className='navbar-item'><FontAwesomeIcon icon={faBriefcase} /></Link>
            <Link to="/ContactMe" className='navbar-item'><FontAwesomeIcon icon={faEnvelope} /></Link>
      </div>
    )
}