import React from "react";
import Education from "../Components/Education";
import SchoolIcon from '@mui/icons-material/School';
import { educationData } from "../data";

export default function Contact() {
    
    return (
        <div className="Education">
        <header>
            <h1>
                <SchoolIcon id="school-icon"/>
               
                </h1>
        </header>
       {educationData.map((education,index)=>
       <Education 
         key={index}
            university={education.university}
            degree={education.degree}
            logo={education.logo}
            timeline={education.timeline}
            link ={education.link}
            items={education.items}
            
         />
         )}        
        </div>
    );

}