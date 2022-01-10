import React from 'react';
// import styles from './Main.module.scss';
import { Route, Routes } from 'react-router';
import Home from '../../pages/HomePage/HomePage';
import Drivers from '../../pages/DriversPage/DriversPage';
import Cars from '../../pages/CarsPage/CarsPage';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </main>
  );
};

export default Main;
