import React, { useEffect } from "react";
import { Containerfadein } from "../Styles/fadein";

export default function Projects(props) {
  useEffect(() => {
    // Use useEffect to run this code after the component has mounted

    // Function to create a Lottie player for a given animation URL
    const createLottiePlayer = (animationURL) => {
      // Create a new Lottie player
      const lottiePlayer = document.createElement("lottie-player");

      // Set the attributes for the player
      lottiePlayer.setAttribute("src", animationURL);
      lottiePlayer.setAttribute("background", "transparent");
      lottiePlayer.setAttribute("speed", "1");
      lottiePlayer.setAttribute("style", "width: 100px; height: 100px;");
      lottiePlayer.setAttribute("loop", "");
      lottiePlayer.setAttribute("autoplay", "");

      return lottiePlayer;
    };

    // Target the div with the specified id for the first Lottie animation
    const lottieContainer1 = document.getElementById("lottie-container-1");

    // Check if the container exists and doesn't have a child element already
    if (lottieContainer1 && lottieContainer1.childElementCount === 0) {
      // Create a Lottie player for the first animation
      const lottiePlayer1 = createLottiePlayer("https://lottie.host/85bd4100-c948-49d5-907d-b80c262fc076/aA1sgjOq4p.json");

      // Append the player to the container
      lottieContainer1.appendChild(lottiePlayer1);
    }

    // Target the div with the specified id for the second Lottie animation
    const lottieContainer2 = document.getElementById("lottie-container-2");

    // Check if the container exists and doesn't have a child element already
    if (lottieContainer2 && lottieContainer2.childElementCount === 0) {
      // Create a Lottie player for the second animation
      const lottiePlayer2 = createLottiePlayer("https://lottie.host/edd83f8a-c114-49f1-b023-e00fd697f53e/MEzQzi9qhO.json");

      // Append the player to the container
      lottieContainer2.appendChild(lottiePlayer2);
    }

    // Target the div with the specified id for the third Lottie animation
    const lottieContainer3 = document.getElementById("lottie-container-3");

    // Check if the container exists and doesn't have a child element already
    if (lottieContainer3 && lottieContainer3.childElementCount === 0) {
      // Create a Lottie player for the third animation
      const lottiePlayer3 = createLottiePlayer("https://lottie.host/056fe3ac-3b62-4cdf-b23c-01b9371b671a/PnyufBnPv8.json");

      // Append the player to the container
      lottieContainer3.appendChild(lottiePlayer3);
    }

    // Target the div with the specified id for the fourth Lottie animation
    const lottieContainer4 = document.getElementById("lottie-container-4");

    // Check if the container exists and doesn't have a child element already
    if (lottieContainer4 && lottieContainer4.childElementCount === 0) {
      // Create a Lottie player for the fourth animation
      const lottiePlayer4 = createLottiePlayer("https://lottie.host/ab7874fe-beed-470a-9657-8e07b43ddeee/LdxAfRR9r8.json");

      // Append the player to the container
      lottieContainer4.appendChild(lottiePlayer4);
    }
  }, []); // Empty dependency array ensures this code runs only once after mount

  return (
    <Containerfadein>
      <div className='container skill-container'>
        <div className="backdrop-filter-wrapper">
          <div className="col-6">
            <img src ={props.userimage} alt='' className="user-image"></img>
          </div>
          <div className="col-6">
            {props.username}
            <div className="container-fluid col-12">
              {props.description}
              {/* Technologies */}
              <p>I specialize in</p>

              {/* Projects */}
              
              {/* Container for Lottie animations, centered */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Div to hold the first Lottie animation */}
                <div id="lottie-container-1" style={{ marginRight: '20px' }}></div>

                {/* Div to hold the second Lottie animation */}
                <div id="lottie-container-2"></div>
              </div>

              {/* Container for the third and fourth Lottie animations, centered */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Div to hold the third Lottie animation */}
                <div id="lottie-container-3" style={{ marginRight: '20px' }}></div>

                {/* Div to hold the fourth Lottie animation */}
                <div id="lottie-container-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Containerfadein>
  );
}
