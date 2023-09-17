import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/resume" element={<Home/>} />
            <Route path="/resume/worker" element={<WorkExp/>} />
            <Route path="/resume/education" element={<Education/>}/>
            <Route path  ="/resume/about" element={<Abouted/>}/>
          </Routes>
        </header>
        <ExampleApp/>
      </div>
    </BrowserRouter>
  );
}

export default App;
