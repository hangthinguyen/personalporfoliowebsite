import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useCallback, useState } from 'react';

export default function NavBar() {
    const [backgroundColor, setBackgroundColor] = useState('')

    const handleBackgroundColor = useCallback(() => {
        setBackgroundColor('gray')
        console.log('heello')
    },[])
    return (
        <div className='navbar-container'>

            <Link to="/Home"
                className='navbar-item'
                onClick={handleBackgroundColor}
                style={{
                    backgroundColor: backgroundColor,
                }}
            >
                <FontAwesomeIcon icon={faHouse} className='navbar-icon'/>
            </Link>

            <Link to="/About" className='navbar-item' id = '1' onClick={handleBackgroundColor} style={{
                    backgroundColor: backgroundColor,
                }}>
                <FontAwesomeIcon icon={faUser} />
            </Link>

            <Link to="/Services" className='navbar-item' id = '2' onClick={handleBackgroundColor} style={{
                    backgroundColor: backgroundColor,
                }}>
                <FontAwesomeIcon icon={faList} />
            </Link>

            <Link to="/Portfolio" className='navbar-item' id = '3' onClick={handleBackgroundColor} style={{
                    backgroundColor: backgroundColor,
                }}>
                <FontAwesomeIcon icon={faBriefcase} />
            </Link>

            <Link to="/ContactMe" className='navbar-item' id = '4' onClick={handleBackgroundColor} style={{
                    backgroundColor: backgroundColor,
                }}>
                <FontAwesomeIcon icon={faEnvelope} />
            </Link>
      </div>
    )
}