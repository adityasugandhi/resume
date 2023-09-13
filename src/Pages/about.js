import React, {useState} from "react";
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import "./App.css";
//import Nav from "./Components/Nav";
import Projects from "../Components/Skills";
export default function About() {
    return (
        <div className="About">
        <header className="About-header">
            <h1>About</h1>
        </header>
        <Projects/>
        
        </div>
        );
    
}