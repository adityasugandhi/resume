import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Pages/home';
import "./Styles/style.scss"


// Import Vanta.js properly
import ExampleApp from './Components/Background';
//import Initialloader from './Components/Initial_loader';
import Initialloader from './Components/Initialloader';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="Pages/home.js" element={<Home />} />
          </Routes>
        </header>
        <ExampleApp/>
        <Initialloader/>
      </div>
    </BrowserRouter>
  );
}

export default App;
