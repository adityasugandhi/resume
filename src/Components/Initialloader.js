import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import {github,ide,LinkedIn,avatar} from './icon'
// Define the custom element 'avatar' using defineElement



export default function InitialLoader() {
  return (
    <div className="container main-container pl-1 d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
        <div className="container description">
            <div className="row">
                {/* Left Container */}
                <div className="col-md-6 left-container">
                    <h1 className="box text-white name_main"> Aditya Sugandhi </h1>
                    {avatar}
                    
                </div>
                {/* Right Container */}
                <div className="col-md-6 pr-1 right">
                    <div className="container-fluid">
                        <h3 className="text-white  Job-main">
                            Software Engineer
                        </h3>
                        {ide}
                    </div>
                </div>
                {/* Center Container */}
                <div className="col-md-12 pt-5 center-container">
                    <div className="container-fluid">
                    {/* Content for the center container */}
           
                    <div className="links">
                      <Link to="https://github.com/adityasugandhi">{github} </Link> 
                      <Link to="https://www.linkedin.com/in/sugandhiaditya"> {LinkedIn}</Link>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  );
}
