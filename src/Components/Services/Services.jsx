import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../NavBar/NavBar';
import './Services.css';

export default function Services() {
    return (
        <div className='page-container'>

            <div className='content-container'>

                <h3 className='header'>Services</h3>

                <div className='service-section-container'>

                    <div className='skills-service-boxes-container'>

                        <section className='skills-box'>

                                <div className='skills-collumns'>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} className='check-icon' />
                                        HTML
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} className='check-icon'/>
                                        CSS
                                    </span>
                                </div>

                                <div className='skills-collumns'>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} className='check-icon'/>
                                        JavaScript
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} className='check-icon'/>
                                        React
                                    </span>
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faCircleCheck} className='check-icon'/>
                                    Git
                                </div>

                        </section>

                        <section className='service-box'>
                            <div className='service-title'>
                                Font-end web development
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae enim esse delectus quis. Eaque laudantium esse odit dolorem ullam eius sit sint labore, ea pariatur? Suscipit harum ab ipsum!</p>
                        </section>

                    </div>

                </div>

            </div>

            <div className='navbar-position'>
                <NavBar />
            </div>
        </div>
    )
}