import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Services.css';

export default function Services() {
    return (
        <div className='page-container'>
            <div className='content-container'>
                <h1 className='header'>Services</h1>

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
                            <p>I am a self-taught web developer based in California. My interests are in Front End Engineering, and I love to create beautiful, responsive and performant products with delightful user experiences</p>
                        </section>

                    </div>

                </div>

            </div>
        </div>
    )
}