import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SplashScreen from './components/SplashScreen'; // Adjust the path if necessary

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          {/* You can add more routes here for other components/pages */}
          <Route path="/other" element={<div>Other Component</div>} />
        </Routes>
        <div className="background" />
      </div>
    </Router>
  );
}

export default App;
