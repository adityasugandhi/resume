import React from "react";
import "../Styles/style.scss";
import "bootstrap/dist/css/bootstrap.css";

export default function InitialLoader() {
  return (
    <div
      className="container pl-1 d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="container ">
        <div className="row">
          {/* Left Container */}
          <div className="col-md-6 pl-1">
            <h1 className="box text-white" style={{ textAlign: "left", fontSize: "75px" }}>
              Aditya Sugandhi
            </h1>
          </div>
          {/* Right Container */}
          <div className="col-md-6 pr-1">
            <div className="container-fluid">
              <h3 className="text-white pt-3" style={{ fontSize: "50px" }}>
                Software Engineer
              </h3>
            </div>
          </div>
          {/* Center Container */}
        <div className="col-md-12 pt-5" style={{alignContent:"center"}}>
          <div className="container-fluid">
            {/* Content for the center container */}
           
            <p className="text-white" style={{ fontSize: "30px", textAlign:"center" }}>
              Github Linkedin
            </p>
          </div>
        </div> 
        </div>
      </div>
    </div>
  );
}
