import React, { useState} from 'react';
import {Containerfadein} from '../Styles/fadein'
import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
export const Container = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards; /* Adjust the duration as needed */

`;



export default function Experience(props) {


  const [showMore, setShowMore] = useState(false);

const toggleShowMore = () => {
  if(showMore){
    document.getElementById(`showmore`+props.idx).style.height = '0';
  }else{
    document.getElementById(`showmore`+props.idx).style.height = '10px';
  }
  setShowMore(!showMore);
};

  return ( 
    <Containerfadein>
    <div className={`container template ${showMore ? 'expanded' : ''}`} onClick={toggleShowMore}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 title">{props.title}</div>
          <div className="col-md-4 timeline">{props.year}</div>
        </div>
        <div className="row">
          <div className='col-12 company'><a href={props.links} className="links" style={{textDecoration:'none',color:'whitesmoke'}}>{props.company}</a></div>  
        </div>
        <div className='row'>
        <div className="col-12 description">{props.description}</div>
        </div>
          <div className="row showmore" id={`showmore`+props.idx}>
            <div className="col-12">
              <ul style={{ listStyle:'none'}}>
                {props.items && props.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        
      </div>
      
    </div>
    </Containerfadein>
  );
}
