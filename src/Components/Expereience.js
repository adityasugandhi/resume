import React, { useState} from 'react';
import "../Styles/Experience.css";
export default function Experience(props) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    console.log("toggle_called")
  };

  return ( 
    <div id="expanded-collapsed" className={`container template ${showMore ? 'expanded' : ''}`} 
    
    onClick={toggleShowMore}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 title">{props.title}</div>
          <div className="col-md-4 timeline">{props.year}</div>
        </div>
        <div className="row">
          <div className="col-12 description">{props.description}</div>
        </div>
        {showMore && (
          <div className="row outer-additional">
            <div className="col-12 additional-info">
              <ul>
                {props.items && props.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
