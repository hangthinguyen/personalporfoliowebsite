import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className='home-page-container'>

            <div className='home-page-content'>
               <span>Hello and Welcome, </span>
               <span>I'm Hannie Nguyen </span>
               <span>Font-end Web Developer </span>
            </div>

            <Link to='/About'>
                <button className='about-me-btn'>
                    More about me
                </button>
            </Link>

        </div>
    )
}