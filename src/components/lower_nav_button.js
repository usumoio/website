/**
 * buttons that control the bottom nav on every page
 */
import React from 'react';
import { Link } from "react-router-dom";


export const LowerNavButton = () => {

    return (

        <div class='button-section'>
            <span class='basic-button'><Link to="/">Home</Link></span>
            <span class='basic-button'><Link to="/about">About</Link></span>
        </div>

    );

}
