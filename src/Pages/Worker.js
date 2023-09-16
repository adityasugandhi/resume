import React from "react";
import Experience from "../Components/Expereience";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import "../Styles/style.scss"
import styled from 'styled-components';
import {experienceData}from '../data';

export const Workcon = styled.div
`
.WorkHicon{
  height:100px;
  width:100px;
  @media (max-width: 320px) {
    height:50px;
    width:50px;
    
  }

  @media (max-width: 768px) {
    height:50px;
    width:50px;
  }

  @media (min-width: 1024px) {
    height:100px;
    width:100px;
  }

  @media (min-width: 1200px) {
    height:100px;
    width:100px;
  }
 
}
`





export default function WorkExp() {
  return (
    <>
    <div className="container Experience">
        <div className="row">
          <div className="column">
            <div className="col-12">
              <h1 className="text-center Work-Experience">
              <Workcon>
                <WorkHistoryIcon className="WorkHicon"/>
                </Workcon>
                </h1>  
            </div>
          </div>        
        </div>
      </div>
      {experienceData.map((experience, index) => (
        <Experience
          idx={index}
          key={index}
          title={experience.title}
          year={experience.year}
          company={experience.company}
          description={experience.description}
          items={experience.items}
        />
      ))}
      
      </>
  );
}
