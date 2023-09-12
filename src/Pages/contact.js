import React from "react";
import Education from "../Components/Education";


const educationData=[{
    university:"Florida State Univerisity, Tallahassee",
    degree:"Master's of Science in Computer Science",
    timeline:"Aug 2022- Aug 2024",
    items:["GPA: 3.8/4.0"],
    },
    {
    university:"SRM Institute of Science and Technology, Vellore",
    degree:"Bachelor's of Technology in Computer Science",
    timeline:"Aug 2016- May 2020",
    items:["GPA: 7/10"],
    }
]
export default function Contact() {
    
    return (
        <div className="Education">
        <header>
            <h1>Education</h1>
        </header>
       {educationData.map((education,index)=>
       <Education 
         key={index}
            university={education.university}
            degree={education.degree}
            timeline={education.timeline}
            items={education.items}
         />
         )}        
        </div>
    );

}