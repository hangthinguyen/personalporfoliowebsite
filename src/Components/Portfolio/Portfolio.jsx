import TodoApp from '../../assets/todoapp.png';
import NetflixClone from '../../assets/netflixcopy.png';
import TwitterClone from '../../assets/twitterclone.png';
import SpotifyClone from '../../assets/spotifyclone.png';
import LoginPage from '../../assets/loginpage.png';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <div className='page-container'>
            <div className='content-container'>
                <h3 className='header'>My Portfolio</h3>
                <div className='portfolio-container'>

                    <section className='portfolio-item'>
                        <a href="/"><img src={TodoApp} alt="todoapp" className='portfolio-img'/></a>
                        <h4 className='portfolio-title'>To do list</h4>
                    </section>

                    <section className='portfolio-item'>
                        <a href="/"><img src={SpotifyClone} alt="spotifyclone" className='portfolio-img'/></a>
                        <h4 className='portfolio-title'>Spotify clone</h4>
                    </section>

                    <section className='portfolio-item'>
                        <a href="/"><img src={NetflixClone} alt="netflixclone" className='portfolio-img'/></a>
                        <h4 className='portfolio-title'>Netflix clone</h4>
                    </section>

                    <section className='portfolio-item'>
                        <a href="/"><img src={TwitterClone} alt="twitterclone" className='portfolio-img'/></a>
                        <h4 className='portfolio-title'>Twitter clone</h4>
                    </section>

                    <section className='portfolio-item'>
                        <a href="/"><img src={LoginPage} alt="loginpage" className='portfolio-img'/></a>
                        <h4 className='portfolio-title'>Log In page</h4>
                    </section>

                </div>
            </div>
        </div>
    )
}