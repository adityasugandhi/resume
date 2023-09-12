import React from "react";
import Experience from "../Components/Expereience";

export default function WorkExp() {
  const experienceData= [{
    title: "Software Engineer",
    year: "2019 - Present",
    description: "I am currently working as a Software Engineer at a company called Aspire Systems",
    items: ["Item 1 for Software Engineer", "Item 2 for Software Engineer"]
  },
  {
    title: "Software Engineer-Intern",
    year: "2019 - Present",
    description: "I am currently working as a Software Engineer at a company called Aspire Systems",
    items: ["Item 1 for Software Engineer", "Item 2 for Software Engineer"]
  }
];
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="column">
            <div className="col-12">
              <h1 className="text-center Work-Experience">Work Experience</h1>
            </div>
          </div>        
        </div>
      </div>
      {experienceData.map((experience, index) => (
        <Experience
          key={index}
          title={experience.title}
          year={experience.year}
          description={experience.description}
          items={experience.items}
        />
      ))}
      
      </>
  );
}
