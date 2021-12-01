/**
 * main button that has animation variables set on it
 */
import React from 'react';
import { Link } from "react-router-dom";
import { addRandomAnimationClass } from '../helpers/add_random_animation_class';
import { addRandomGridAnimations } from '../helpers/add_random_grid_animations';
import { addRandomSquareColor } from '../helpers/add_random_square_color';

import './styles/grid_button_animation.css';
import './styles/color_squares_animation.css';

export const MainButton = (propsObject) => {

    let textClassName = 'link-as-button' + (propsObject.buttonText.length > 10 ? ' link-as-button-font-small' : ' link-as-button-font-large' );

    let buttonClassNameRandomClass = addRandomAnimationClass();

    let buttonClassName = 'main-button ' + buttonClassNameRandomClass;

    return (

        <button className={buttonClassName}>
            <Link to={propsObject.link} className={textClassName}>{propsObject.buttonText}</Link>
            
            {(buttonClassNameRandomClass === 'main-button-checkered') && <div className='grid-overlay'>
                <Link to={propsObject.link}>
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
                <Link to={propsObject.link}>
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

        </button>

    );

}
