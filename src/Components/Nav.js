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
            <li>
              <Link to='/worker'>
                {Computer}
                <div className='nav-text'>Experience</div>
              </Link>
            </li>
            <li>
              <Link onClick={openEmailClient}>
                {Email}
                <div className='nav-text'>Email</div>
              </Link>
            </li>
            <li>
              <Link to='/'>
                {Home}
                <div className='nav-text'>Home</div>
              </Link>
            </li>
            <li>
              <Link to='/education'>
                {Education}
                <div className='nav-text'>Education</div>
              </Link>
            </li>
            <li>
              <Link to='/about'>
                {Contact}
                <div className='nav-text'>About me</div>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    );
    }
  