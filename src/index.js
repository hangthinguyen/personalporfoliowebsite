import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import ContactMe from './Components/ContactMe/ContactMe';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/personalporfoliowebsite" element={<App />}>
          <Route index path="/personalporfoliowebsite/Home" element={<HomePage />} />
          <Route path="/personalporfoliowebsite/About" element={<About />} />
          <Route path="/personalporfoliowebsite/Services" element={<Services />} />
          <Route path="/personalporfoliowebsite/Portfolio" element={<Portfolio />} />
          <Route path="/personalporfoliowebsite/ContactMe" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
