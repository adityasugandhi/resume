import React from 'react';
import {Link} from 'react-router-dom';
//import { Home } from '@mui/icons-material';
import "../assets/css/Styles/style.scss"
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
        const Education = 
            <lord-icon
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="loop-on-hover"
                colors="primary:#ffffff,secondary:#ffffff">
                {/* // style={{width:"100px",height:"100px"}}> */}
            </lord-icon>
        const Contact = 
                <lord-icon
                src="https://cdn.lordicon.com/amxnacxd.json"
                trigger="loop-on-hover"
                colors="primary:#ffffff,secondary:#ffffff">
                </lord-icon>

 const openEmailClient = () => {
    window.open('mailto:as22cq@fsu.edu', '_blank');
  }; 
    return (
        <div className="Nav">
        <header className="Nav-header">
       
                <ul>
                    <Link to='/worker'>{Computer}</Link>        
                    <Link onClick={openEmailClient}>{Email}</Link>
                    <Link to='/resume'>{Home}</Link>    
                    <Link to='/education'>{Education}</Link>
                    <Link to ='/about' >{Contact}</Link>
                </ul>
        </header>
        </div>
    );
    }
