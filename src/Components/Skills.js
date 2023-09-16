// Cardtemplate.js
import React from "react";
import { Containerfadein } from "../Styles/fadein";
export default function Projects(props) {
  return (
    <Containerfadein>
    <div className='container skill-container'>
      <div className="backdrop-filter-wrapper">
        <div className="col-6">
          <img src ={props.userimage} alt='' className="user-image"></img>
        </div>
        <div className="col-6">
           {props.username}
        </div>
      </div>  
    </div>
    </Containerfadein>
  )
}
