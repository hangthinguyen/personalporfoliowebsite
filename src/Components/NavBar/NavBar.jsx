import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';

export default function NavBar() {
    const location = useLocation();

    const [routeLinks] = useState([
        {
            rLink: '/',
            id: '1',
            icon: <FontAwesomeIcon icon={faHouse} className='navbar-icon'/>
        },
        {
            rLink: '/About',
            id: '2',
            icon: <FontAwesomeIcon icon={faUser} />
        },
        {
            rLink: '/Services',
            id: '3',
            icon: <FontAwesomeIcon icon={faList} />
        },
        {
            rLink: '/Portfolio',
            id: '4',
            icon: <FontAwesomeIcon icon={faBriefcase} />
        },
        {
            rLink: '/ContactMe',
            id: '5',
            icon: <FontAwesomeIcon icon={faEnvelope} />
        },
    ]);

    return (
        <div className='navbar-container'>

            {routeLinks.map((routeLink) =>
                <Link
                    to={routeLink.rLink}
                    id={routeLink.id}
                    key={routeLink.id}
                    className='navbar-item'
                    style={{
                        backgroundColor: location.pathname === routeLink.rLink ? 'rgb(0, 0, 0, 0.1)' : null,
                    }}
                >
                    {routeLink.icon}
                </Link>)
            }

      </div>
    )
}