/**
 * buttons that control the bottom nav on every page
 */
import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function delay(time) {
    return new Promise( resolve => setTimeout(resolve, time) );
}

export const LowerNav = () => {

    const navigate = useNavigate();

    async function fadeOutAnimationHome(event) {
        event.preventDefault()

        const mainBoard  = document.getElementById('main-board-style-access-id');

        mainBoard.classList.add('main-board-fade');

        await delay(1000);

        navigate('/');

        mainBoard.classList.remove('main-board-fade');
    }

    async function fadeOutAnimationAbout(event) {
        event.preventDefault()

        const mainBoard  = document.getElementById('main-board-style-access-id');

        mainBoard.classList.add('main-board-fade');

        await delay(1000);

        navigate('/about');

        mainBoard.classList.remove('main-board-fade');
    }

    return (

        <div className='nav-section'>
            <span className='nav-home nav-button-mobile'><Link className='nav-link' to="/" onClick={fadeOutAnimationHome}>Home</Link></span>
            <span className='nav-about nav-button-mobile'><Link className='nav-link' to="/about" onClick={fadeOutAnimationAbout}>About</Link></span>
        </div>

    );

}
