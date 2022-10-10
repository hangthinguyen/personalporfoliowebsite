import { Link } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">

      <HomePage />

      <div>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/ContactMe">ContactMe</Link>
      </div>

    </div>
  );
}

export default App;
