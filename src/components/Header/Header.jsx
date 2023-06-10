import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch20 } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
         <nav className='header'>
         <FontAwesomeIcon className='icon' icon={faStopwatch20}></FontAwesomeIcon>
            <h2>CricActive Club</h2>
         </nav>
    );
};

export default Header;