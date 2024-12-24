import React from 'react';
import './index.css'
import { Routes, Route } from 'react-router-dom'



import Header from './components/header/Header';
import Main from './components/main/Main';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Features from './pages/Features';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/features' element={<Features />}/>
      </Routes>
    </>
  )
}

export default App