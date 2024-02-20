// bringing in the required import from 'react-router-dom'
// import { React, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";
import ReactDOM from 'react';

import React, { Component } from 'react';

  const App = () => {
    return (
      <>
        <Navbar className="Navbar"/>
        <Header className="Header" />
        <div className="Container">
          <Outlet className="Outlet" />
        </div>
        <Footer class="Footer"/>
      </>
    );
  }

export default App;
// re-export everything
// export * from '@testing-library/react-native';