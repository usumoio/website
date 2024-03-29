/**
 * main button that has animation variables set on it
 */
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { addRandomAnimationClass } from '../helpers/add_random_animation_class';
import { addRandomGridAnimations } from '../helpers/add_random_grid_animations';
import { addRandomSquareColor } from '../helpers/add_random_square_color';
import { delay } from '../helpers/general_helpers';
import { BlackBarAnimation } from './black_bar_animation';

import './styles/grid_button_animation.css';
import './styles/color_squares_animation.css';
import './styles/black_bar_animation.css';

export const MainButton = (propsObject) => {

    let textClassName = 'link-as-button' + (propsObject.buttonText.length < 8 ? ' link-as-button-font-large' : ( propsObject.buttonText.length < 12 ) ? ' link-as-button-font-mid' : ' link-as-button-font-small' );

    let buttonClassNameRandomClass = addRandomAnimationClass();

    let buttonClassName = 'main-button ' + buttonClassNameRandomClass;

    const navigate = useNavigate();


    async function fadeOutAnimation(event) {
        event.preventDefault()

        const mainBoard  = document.getElementById('main-board-style-access-id');

        mainBoard.classList.add('main-board-fade');

        await delay(1000);

        navigate(`../${propsObject.link}`, { replace: true });

        mainBoard.classList.remove('main-board-fade');
    }


    // TODO you can remove the base animation link if you want some cleanup
    return (

        <button className={buttonClassName}>
            <Link to={propsObject.link} className={textClassName} onClick={fadeOutAnimation} >{propsObject.buttonText}</Link>
            
            <Link to={propsObject.link} onClick={fadeOutAnimation} >
                <div className='inner-full-button-box-link'>
                </div>
            </Link>

            {(buttonClassNameRandomClass === 'main-button-checkered') && <div className='grid-overlay'>
                <Link to={propsObject.link} onClick={fadeOutAnimation}>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                    <div className={addRandomGridAnimations()}>
                    </div>
                </Link>
            </div>}

            {(buttonClassNameRandomClass === 'main-button-color-squares') && <div className='color-squares-overlay'>
                <Link to={propsObject.link} onClick={fadeOutAnimation}>
                    <div className='inner-square-main-top-left'>
                        <div className={addRandomSquareColor(1)}></div>
                    </div>
                    <div className='inner-square-main-top-right'>
                        <div className={addRandomSquareColor(2)}></div>
                    </div>
                    <div className='inner-square-main-bottom-left'>
                        <div className={addRandomSquareColor(3)}></div>
                    </div>
                    <div className='inner-square-main-bottom-right'>
                        <div className={addRandomSquareColor(4)}></div>
                    </div>
                </Link>
            </div>}

            {(buttonClassNameRandomClass === 'main-button-black-bar') && <div className='black-bar-overlay'>
                <BlackBarAnimation toLink={propsObject.link} />
            </div>}

        </button>

    );

}
