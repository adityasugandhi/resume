import React from 'react'
import VANTA from 'vanta/dist/vanta.net.min';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag


const ExampleApp = (props) => {
    const [vantaEffect, setVantaEffect] = React.useState(0)
    const vantaRef = React.useRef(null)
    React.useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(VANTA({
          el: vantaRef.current,
          mouseControls: true,   
          touchControls: true,   
          gyroControls: true,   
          minHeight: 200.00,   
          minWidth: 200.00,  
           scale: 1.00,   
          scaleMobile: 1.00,   
          color: 0xffffff,   
          backgroundColor: 0x0,   
          points: 10.00,   
          maxDistance: 21.00,
          background: 'cover',
          backgroundImage:'url("../Styles/background.jpeg")'
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (
      <div className="vanta" ref={vantaRef}>
      </div>
    )
  }
    export default ExampleApp;