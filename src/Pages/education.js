import React from "react";
import Education from "../Components/Education";
import SchoolIcon from '@mui/icons-material/School';
import fsu from '../Styles/logos/FSU_logo.png';
import srm from '../Styles/logos/Srmseal.png'

const educationData=[{
    university:"Florida State Univerisity, Tallahassee",
    degree:"Master's of Science in Computer Science",
    timeline:"Aug 2022- Aug 2024",
    logo:fsu,
    link:"https://www.fsu.edu/",
    items:["GPA: 3.8/4.0"],
    },
    {
    university:"SRM Institute of Science and Technology, Chennai",
    degree:"Bachelor's of Technology in Computer Science and Engineering",
    timeline:"Aug 2016- May 2020",
    logo:srm,
    link:"https://www.srmist.edu.in/",
    items:["GPA: 7/10"],
    }
]
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