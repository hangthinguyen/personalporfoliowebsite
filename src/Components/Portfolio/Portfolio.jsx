import TodoApp from '../../assets/todoapp.png';
import NetflixClone from '../../assets/netflixcopy.png';
import TwitterClone from '../../assets/twitterclone.png';
import SpotifyClone from '../../assets/spotifyclone.png';
import LoginPage from '../../assets/loginpage.png';
import './Portfolio.css';
import { useState } from 'react';

export default function Portfolio() {
    const [portfolioItems] = useState([
        {
            imgItem: TodoApp,
            id: 1,
            appName: 'To-do List'
        },
        {
            imgItem: SpotifyClone,
            id: 2,
            appName: 'Spotify Clone'
        },
        {
            imgItem: NetflixClone,
            id: 3,
            appName: 'Netflix Clone'
        },
        {
            imgItem: TwitterClone,
            id: 4,
            appName: 'Twitter CLone'
        },
        {
            imgItem: LoginPage,
            id: 5,
            appName: 'Log In Page'
        },
    ])
    return (
        <div className='page-container'>
            <div className='content-container'>

                <h3 className='header'>My Portfolio</h3>
                <div className='portfolio-container'>

                        {portfolioItems.map((portfolioItem) =>
                            <section className='portfolio-item' id={portfolioItem.id}>
                                <a href="/"><img src={portfolioItem.imgItem} alt="todoapp" className='portfolio-img'/></a>
                                <h4 className='portfolio-title'>{portfolioItem.appName}</h4>
                            </section>
                        )}

                </div>

            </div>
        </div>
    )
}