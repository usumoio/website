/**
 * buttons that control the bottom nav on every page
 */
import React from 'react';
import { Link } from "react-router-dom";

import '../universal.css';

export const LowerNav = () => {

    return (

        <div class='nav-section'>
            <span class='nav-button'><Link className='nav-link' to="/">Home</Link></span>
            <span class='nav-button'><Link className='nav-link' to="/about">About</Link></span>
        </div>

    );

}
