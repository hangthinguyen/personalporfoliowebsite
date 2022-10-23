import TodoApp from '../../assets/todoapp-progressive.jpeg';
import NetflixClone from '../../assets/netflixcopy-progressive.jpeg';
import TwitterClone from '../../assets/twitterclone-progressive.jpeg';
import SpotifyClone from '../../assets/spotifyclone-progressive.jpeg';
import LoginPage from '../../assets/loginpage-progressive.jpeg';
import './Portfolio.css';
import { useState } from 'react';

export default function Portfolio() {
    const [portfolioItems] = useState([
        {
            imgItem: TodoApp,
            id: 1,
            appName: 'To-do List',
            pLink: 'https://hangthinguyen.github.io/hangs-todo-2/'
        },
        {
            imgItem: SpotifyClone,
            id: 2,
            appName: 'Spotify Clone',
            pLink: 'https://hangthinguyen.github.io/SpotifyClone/'
        },
        {
            imgItem: NetflixClone,
            id: 3,
            appName: 'Netflix Clone',
            pLink: 'https://hangthinguyen.github.io/netflixcopy/'
        },
        {
            imgItem: TwitterClone,
            id: 4,
            appName: 'Twitter CLone',
            pLink: 'https://hangthinguyen.github.io/twitter-clone/'
        },
        {
            imgItem: LoginPage,
            id: 5,
            appName: 'Pluralsight Clone',
            pLink: 'https://hangthinguyen.github.io/loginpage/'
        },
    ])
    return (
        <div className='page-container'>
            <div className='content-container'>

                <h1 className='header'>My Portfolio</h1>
                <div className='portfolio-container'>

                        {portfolioItems.map((portfolioItem) =>
                            <section className='portfolio-item' id={portfolioItem.id}>
                                <a href={portfolioItem.pLink}><img src={portfolioItem.imgItem} alt="todoapp" className='portfolio-img'/></a>
                                <h4 className='portfolio-title'>{portfolioItem.appName}</h4>
                            </section>
                        )}

                </div>

            </div>
        </div>
    )
}