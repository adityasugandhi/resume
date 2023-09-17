import React from "react";
import userimage from '../Styles/user-image.jpeg'
import { ReactAnimatoin } from "../Components/icon";
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
        description="Software Engineer with 3+ years of experience in full-stack development, distributed systems, AI modeling, and optimization algorithms. Seeking a challenging role in a fast-paced environment where I can use my skills and experience to make a significant impact."
        technologies={['Node.js','Python','Java','C/C++']}
        />
        </div>
        );
    
}