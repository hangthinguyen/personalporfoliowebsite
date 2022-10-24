import { Link } from 'react-router-dom';
import ProfilePic from '../../assets/progressiveprofilepic.jpeg';
import './About.css';

export default function About() {
    return (
        <div className='page-container'>

            <div className='content-container'>

                <h1 className='header'>About Me</h1>
                <div className='intro-profile-pic-container'>

                    <div className='profile-pic-container'>
                        <div className='pic-background1'>
                            <div className='pic-background2'>
                                <img src={ProfilePic} alt="profile-pic" className='profile-pic'/>
                            </div>
                        </div>
                    </div>

                    <div className='text-btn-container'>
                        <h3 className='introduction-header'>Hello! My name is Hannie Nguyen</h3>
                        <p>I am a web developer. I would love to bring your design into life, turn it into a gorgeous and functional website. I value honesty and empathy. These principles guide me through life and work.</p>
                        <Link to='/Services'>
                            <button className='skills-section-directed-btn'>
                                My skills
                            </button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}