import React from 'react';
import {Link} from 'react-router-dom';
import Lottie from 'lottie-web';
import {defineElement} from 'lord-icon-element';
//import { Home } from '@mui/icons-material';
// import "../Styles/style.scss"
defineElement(Lottie.loadAnimation);
export default function Nav() {
    const Home = 
        <lord-icon
            src="https://cdn.lordicon.com/kxoxiwrf.json"
            trigger="loop-on-hover"
            colors="primary:#ffffff,secondary:#ffffff">
           {/* { colors="primary:#ffffff,secondary:#ffffff"} */}
            {/* style={{width:"100px",height:"100px"}}> */}

        </lord-icon>
    const Computer = 
        <lord-icon
            src="https://cdn.lordicon.com/qhgmphtg.json"
            trigger="loop-on-hover"
            colors="primary:#ffffff,secondary:#ffffff">
        </lord-icon>
    const Email =
        <lord-icon
            src="https://cdn.lordicon.com/rhvddzym.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff">
            {/* style={{width:"100px",height:"100px"}}> */}
        </lord-icon>
        const Contact = 
            <lord-icon
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="loop-on-hover"
                colors="primary:#ffffff,secondary:#ffffff">
                {/* // style={{width:"100px",height:"100px"}}> */}
            </lord-icon>

 const openEmailClient = () => {
    window.open('mailto:as22cq@fsu.edu', '_blank');
  }; 
    return (
        <div className="Nav">
        <header className="Nav-header">
       
                <ul>
                    <Link to='/worker'>{Computer}</Link>        
                    <Link to='/'>{Home}</Link>    
                    <Link onClick={openEmailClient}>{Email}</Link>
                    <Link to='/contact'>{Contact}</Link>
                    <Link to ='/about' >About</Link>
                </ul>
        </header>
        </div>
    );
    }
