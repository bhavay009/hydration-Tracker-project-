import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Track from './pages/Track';
import Reminder from './pages/Reminder';
import Stats from './pages/stats';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track" element={<Track />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;