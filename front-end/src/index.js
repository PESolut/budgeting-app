import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <React.StrictMode>
        <Nav/>
        <App />
      </React.StrictMode>
  </Router>

);
