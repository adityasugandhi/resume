import React, { useState} from 'react';
export default function Experience(props) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    if(showMore){
      document.getElementById(`showmore`+props.idx).style.height = '0';
    }else{
      document.getElementById(`showmore`+props.idx).style.height = '100px';
    }
    setShowMore(!showMore);
  };

  return ( 
    <div className={`container template ${showMore ? 'expanded' : ''}`} onClick={toggleShowMore}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 title">{props.title}</div>
          <div className="col-md-4 timeline">{props.year}</div>
        </div>
        <div className="row">
          <div className='col-4 company'>{props.company}</div>
          <div className="col-8 description">{props.description}</div>
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
  );
}
