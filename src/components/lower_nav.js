/**
 * buttons that control the bottom nav on every page
 */
import React from 'react';
import { Link } from "react-router-dom";

export const LowerNav = () => {

    return (

        <div className='nav-section'>
            <span className='nav-button'><Link className='nav-link' to="/">Home</Link></span>
            <span className='nav-button'><Link className='nav-link' to="/about">About</Link></span>
        </div>

    );

}
