import { Link } from 'react-router-dom';
import ProfilePic from '../../assets/profilepic.jpeg'
import './About.css';

export default function About() {
    return (
        <div className='page-container'>

            <div className='content-container'>

                <h3 className='header'>About Me</h3>
                <div className='intro-profile-pic-container'>

                    <div className='profile-pic-container'>
                        <div className='pic-background1'>
                            <div className='pic-background2'>
                                <img src={ProfilePic} alt="profile-pic" className='profile-pic'/>
                            </div>
                        </div>
                    </div>

                    <div className='text-btn-container'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae enim esse delectus quis. Eaque laudantium esse odit dolorem ullam eius sit sint labore, ea pariatur? Suscipit harum ab ipsum!</p>
                        <Link to='/Services'>
                            <button className='skills-section-directed-btn'>
                                What I offer
                            </button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}