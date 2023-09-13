import React from "react";
import "../Styles/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import Lottie from 'lottie-web';
import {defineElement} from 'lord-icon-element';
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import { fontFamily } from "@mui/system";

defineElement(Lottie.loadAnimation);
const github= <lord-icon
src="https://cdn.lordicon.com/ochimkct.json"
trigger="hover"
colors="primary:#ffffff,secondary:#ffffff"                       
style={{ width: '50px', height: '50px' , paddingTop:"15px"}}
>
</lord-icon>
const avatar =  <lord-icon 
                            className="avatar"
                            src="https://cdn.lordicon.com/nobciafz.json"
                            trigger="loop-on-hover"
                            colors="primary:#ffffff,secondary:#ffffff">
{/* style={{ width: '250px', height: '250px',textAlign:"center" }}> */}
                </lord-icon>

const ide =
            <lord-icon
                src="https://cdn.lordicon.com/anihkfxp.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: '250px', height: '250px'}}>
            </lord-icon>  
const LinkedIn = <LinkedInIcon/>
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
                        <h3 className="text-white pt-2 Job-main">
                            Software Engineer</h3>
                            {ide}
                            <div className="icons">
  
                            </div>
                    </div>
                </div>
                {/* Center Container */}
                <div className="col-md-12 pt-5 center-container">
                    <div className="container-fluid">
                    {/* Content for the center container */}
           
                    <div className="links">
                      <Link to ="https://github.com/adityasugandhi">   Github {github}</Link> 
                      <Link to ="https://www.linkedin.com/in/sugandhiaditya">Linkedin {LinkedIn} </Link>
                                            </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  );
}
