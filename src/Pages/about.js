import React, {useState} from "react";
import userimage from '../Styles/user-image.jpeg'
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import "./App.css";
//import Nav from "./Components/Nav";
import Projects from "../Components/Skills";
export default function About() {
    return (
        <div className="About">
        <header className="About-header">
            <h1>About me</h1>
        </header>
        <Projects
        userimage = {userimage}
        username = "Aditya Sugandhi"
        />
        </div>
        );
    
}