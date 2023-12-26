import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/pages/home/Home';
import AboutPage from './components/pages/about/AboutPage';
import BlogPage from './components/pages/blog/BlogPage';
import ContactPage from './components/pages/contact/ContactPage';
import PolicyPage from './components/pages/policy/PolicyPage';

import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Router>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/policy' element={<PolicyPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
