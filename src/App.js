import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Announcements from './components/pages/Announcements';
import Cabinet from './components/pages/Cabinet';
// import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/announcements' element={<Announcements/>} />
          <Route path='/cabinet' element={<Cabinet/>} />
          <Route path='/events' element={<Events/>} />
          {/* <Route path='/sign-up' element={<SignUp/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;