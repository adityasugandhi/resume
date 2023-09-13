// Cardtemplate.js
import React, { useState } from "react";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`container skill-container ${showMore ? "expanded" : ""}`}
      onClick={toggleShowMore}>
    
      <br />
      <div className={`row ${showMore ? "expanded-content" : ""}`}>
        <div className="col-md-6">
          <p>Testing</p>
        </div>
        {showMore && (
          <div className="row">
            <div className="col-md-6 col-sm-12 Additional-Info">
              <h2>Additional info</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
