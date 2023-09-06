import React from 'react';
import {Link} from 'react-router-dom';
import { Home } from '@mui/icons-material';


export default function Nav() {
    return (
        <div className="Nav">
        <header className="Nav-header">
            <ul>
            <Link to='../Pages/home.js'><Home fontSize='large'/></Link>
            </ul>
        </header>
        </div>
    );
    }
