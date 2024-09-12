import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import Layout from './components/Layout';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Impact from './components/Impact';
import Locations from './components/Locations';
const Rutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='About Us' element={<AboutUs />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='Impact' element={<Impact />} />
          <Route path='Locations' element={<Locations />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Rutes;
