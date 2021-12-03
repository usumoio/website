/**
 * buttons that control the bottom nav on every page
 */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addRandomNavGridAnimations } from '../helpers/add_random_nav_grid_animation_classes'

import './styles/nav_button_animation.css';

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
            <div className='nav-home nav-button-mobile'>
                <Link className='nav-link' to="/" onClick={fadeOutAnimationHome}>Home</Link>
            
                <div className="nav-grid-overlay">
                    <Link className='nav-link' to="/" onClick={fadeOutAnimationHome}>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                    </Link>
                </div>
            
            </div>

            
            <div className='nav-about nav-button-mobile'>

                <Link className='nav-link' to="/about" onClick={fadeOutAnimationAbout}>About</Link>

                <div className="nav-grid-overlay">
                    <Link className='nav-link' to="/about" onClick={fadeOutAnimationAbout}>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                        <div className={addRandomNavGridAnimations()}>
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    );

}
