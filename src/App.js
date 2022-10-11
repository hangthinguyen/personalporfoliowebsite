import HomePage from './Components/HomePage/HomePage';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">

      <div className='home-page-content-container'>
        <HomePage />
      </div>

      <div className='navbar-position'>
        <NavBar />
      </div>

    </div>
  );
}

export default App;
