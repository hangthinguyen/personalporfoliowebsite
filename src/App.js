import HomePage from './Components/HomePage/HomePage';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="page-container">

      <div className='content-container'>
        <HomePage />
      </div>

      <div className='navbar-position'>
        <NavBar />
      </div>

    </div>
  );
}

export default App;
