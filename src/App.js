import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import WorkExp from './Pages/Worker';

import "./Styles/style.scss"
import ExampleApp from './Components/Background';
import Home from './Pages/home';
import Education from './Pages/education';
import About from './Pages/about';
function App() {
  console.log.apply(window.location)
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/worker" element={<WorkExp/>} />
            <Route path="/education" element={<Education/>}/>
            <Route path  ="/about" element={<About/>}/>
          </Routes>
        </header>
        <ExampleApp/>
      </div>
    </BrowserRouter>
  );
}

export default App;
