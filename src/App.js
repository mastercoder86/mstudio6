import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Mainbanner from './components/Mainbanner';
import WhyUs from './components/WhyUs';
import Register from './components/Register';
import Video from './components/Video';
import Features from './components/Features';
import Contact from './components/Contact';
import Developer from './components/Developer';
import Courses from './components/Courses';
import './css/flex-slider.css';
import './css/fontawesome.css';
import './css/lightbox.css';
import './css/owl.css';
import './css/style2.css';
import './css/templatemo-grad-school.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import $ from "jquery";
function App() {

  return (
    <>

      <Routes>
      <Route path="/" element={[<Navbar />,
            (<div id="home"><Mainbanner /></div>),
            

            <Features />,
            <WhyUs />,
            (<div id="register"><Register /></div>),
            
            (<div id="section4"><Courses /></div>),
            <Video />,
            (<div id="section6"><Contact /></div>)]} exact />
       
      <Route path="/developer" element={<Developer />} exact />

      </Routes>
    </>
  );
}

export default App;
