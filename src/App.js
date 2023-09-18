import React from 'react';
import {Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import WorkExp from './Pages/Worker';

import "./assets/css/Styles/style.scss"
import ExampleApp from './Components/Background';
import Home from './Pages/home';
import Education from './Pages/education';
import Abouted from './Pages/info';
function App() {
  console.log.apply(window.location)
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/worker" element={<WorkExp/>} />
            <Route path="/education" element={<Education/>}/>
            <Route path  ="/about" element={<Abouted/>}/>
          </Routes>
        </header>
        <ExampleApp/>
      </div>
    </HashRouter>
  );
}

export default App;
