import React, {useState} from "react";
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
        userimage = "https://media.licdn.com/dms/image/D5603AQGASqEK8CGj6w/profile-displayphoto-shrink_800_800/0/1689253003493?e=1700092800&v=beta&t=3qRyRa8gdMnaCJOOoulDjnS9h7vSeAzPxIHkIHSU62c"
        username = "Aditya Sugandhi"
        />
        </div>
        );
    
}