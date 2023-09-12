import React from "react";
import "../Styles/style.scss";
import "bootstrap/dist/css/bootstrap.css";
//import { fontFamily } from "@mui/system";

export default function InitialLoader() {
  return (
    <div className="container pl-1 d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
        <div className="container description">
            <div className="row">
                {/* Left Container */}
                <div className="col-md-6 left-container">
                    <h1 className="box text-white name_main"> Aditya Sugandhi </h1>
                        <lord-icon
                            src="https://cdn.lordicon.com/nobciafz.json"
                            trigger="loop-on-hover"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{ width: '250px', height: '250px',textAlign:"center" }}>
                        </lord-icon>
  
                </div>
                {/* Right Container */}
                <div className="col-md-6 pr-1">
                    <div className="container-fluid">
                        <h3 className="text-white pt-2 Job-main">
                            Software Engineer</h3>
                            <div className="icons">
                                <lord-icon
                                        src="https://cdn.lordicon.com/anihkfxp.json"
                                        trigger="hover"
                                        colors="primary:#ffffff,secondary:#ffffff"
                                        style={{ width: '250px', height: '250px'}}>
                                </lord-icon>    
                            </div>
                    </div>
                </div>
                {/* Center Container */}
                <div className="col-md-12 pt-5" style={{alignContent:"center"}}>
                    <div className="container-fluid">
                    {/* Content for the center container */}
           
                    <p className="text-white" style={{ fontSize: "30px", textAlign:"center" }}>
                        Github <lord-icon
    src="https://cdn.lordicon.com/ochimkct.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#ffffff"                       
    style={{ width: '50px', height: '50px' , paddingTop:"15px"}}
    >
</lord-icon>Linkedin
                                            </p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  );
}
