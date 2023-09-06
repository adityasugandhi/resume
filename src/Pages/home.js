import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from '../Components/theme';
import Experience from "../Components/Expereience";
import Education from "../Components/Education";
import 'bootstrap/dist/css/bootstrap.min.css';
//import CardWithHover from "../Components/Skills";
import { Typography } from "@mui/material";
import Cardtemplate from "../Components/Skills";
//import Cardprojects from "../Components/Projects";
export default function Home() {
  const items = [
    {
      id: 1,
      title: "FullStack Development",
      subtitle: "Subtitle 1",
    },
    // Add more items as needed
  ];
  return (
    
    <div className="Home">
  
      <header className="Home-header text-white">
      <Typography variant="p" style={{ fontSize: '24px', fontFamily: 'Caluna, sans-serif' }}>
       
        <h1>Aditya Sugandhi: Full Stack Developer: Software Engineer</h1>
        <h3>
          Github: <a href="https://github.com/adityasugandhi">Link</a>, Linkedin: <a href="https://www.linkedin.com/in/sugandhiaditya/">Link</a>
        </h3>
        <p className="descrption">
          Enthusiastic and dedicated Full Stack Engineer with 3 years of experience in designing, developing, and deploying dynamic web applications. Proficient in building robust Restful APIs using Flask and creating interactive user interfaces with React.js. Adept at full stack development, with a proven track record of successfully delivering projects, including a healthcare system website. Strong problem-solving skills, collaborative mindset, and a passion for staying updated with the latest industry trends.
        </p>
        </Typography>
      </header>

      <div>
        <div className="container">
          <h2>Experience</h2>
          <div className="row">
            <div className="col-md-4">
              <ThemeProvider theme = {theme}>
              <Experience
                title="Research Assistant"
                company="Florida State University (DSC)"
                date="Jan, 2023 - April, 2023"
                description="Worked as a research assistant under Dr. Olomo. I worked on the project of developing an AI-based system for detection."
              />
              </ThemeProvider>
            </div>
            <div className="col-md-4">
              <Experience
                title="Software Engineer"
                company="Aspire Systems"
                date="Oct, 2020 - August, 2020"
                description=""
              />
            </div>
            <div className="col-md-4">
              <Experience
                title="Software Engineer Intern"
                company="Impetus"
                date="Oct, 2019 - April, 2020"
                description="Worked as a research assistant under Dr. Olomo. I worked on the project of developing an AI-based system for detection."
              />
            </div>
          </div>
        </div>

        <div className="container">
          <h2>Education</h2>
          <div className="row">
            <div className="col-md-4">
              <Education
                university="Florida State University"
                degree="Master's in Computer Science"
                timeline="Jan, 2022 - May, 2024"
                courses="Data Structures, Algorithms, Operating Systems, Database Management, Software Engineering, Computer Networks, Machine Learning, Artificial Intelligence, Computer Vision, Natural Language Processing, Big Data Analytics, Cloud Computing, Web Development, Mobile Application Development, Software Testing, Software Project Management, Software Design and Architecture, Software Quality Assurance, Software Security, Software Metrics, Software Maintenance, Software Configuration Management, Software Process, Software Reliability, Software Verification and Validation, Software Engineering Economics, Software Engineering Ethics, Software Engineering Professional Practice, Software Engineering Tools and Methods, Software Engineering Models, Software Engineering Paradigms, Software Engineering Processes, Software Engineering Principles, Software Engineering Tools, Software Engineering Techniques"
              />
            </div>
            <div className="col-md-4">
              <Education
                university="SRM Institute of Science and Technology"
                degree="Bachelor's in Computer Science"
                timeline="Aug, 2016 - May, 2020"
                courses="Data Structures, Algorithms, Operating Systems, Database Management, Software Engineering, Computer Networks, Machine Learning, Artificial Intelligence, Computer Vision, Natural Language Processing, Big Data Analytics, Cloud Computing, Web Development, Mobile Application Development, Software Testing, Software Project Management, Software Design and Architecture, Software Quality Assurance, Software Security, Software Metrics, Software Maintenance, Software Configuration Management, Software Process, Software Reliability, Software Verification and Validation, Software Engineering Economics, Software Engineering Ethics, Software Engineering Professional Practice, Software Engineering Tools and Methods, Software Engineering Models, Software Engineering Paradigms, Software Engineering Processes, Software Engineering Principles, Software Engineering Tools, Software Engineering Techniques"
              />
            </div>
            <div className="col-md-4" style={{ background: 'white' }}>
            </div>
          
          </div>
        </div>
        <div className="container">
          <h2>Skills</h2>
          <div className="row">
            <div className="col-md-4">
              <Cardtemplate items={items} />
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}