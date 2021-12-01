/**
 * main button for external links that has animation variables set on it
 */
import React from 'react';
import { addRandomAnimationClass } from '../helpers/add_random_animation_class';
import { addRandomGridAnimations } from '../helpers/add_random_grid_animations';
import { addRandomSquareColor } from '../helpers/add_random_square_color';

import './styles/grid_button_animation.css';
import './styles/color_squares_animation.css';

export const MainButtonExternalLink = (propsObject) => {

    let textClassName = 'link-as-button' + (propsObject.buttonText.length > 7 ? ' link-as-button-font-small' : ' link-as-button-font-large' );

    let buttonClassNameRandomClass = addRandomAnimationClass();

    let buttonClassName = 'main-button ' + buttonClassNameRandomClass;

    return (

        <button className={buttonClassName}>
            <a className={textClassName} rel="noopener noreferrer" target="_blank" href={propsObject.externalLink} >
                    {propsObject.buttonText}
            </a>
            {(buttonClassNameRandomClass === 'main-button-checkered') &&  <div className='grid-overlay'>
                <a className={textClassName} rel="noopener noreferrer" target="_blank" href={propsObject.externalLink} >
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
                </a>
            </div>}

            {(buttonClassNameRandomClass === 'main-button-color-squares') && <div className='color-squares-overlay'>
                <a className={textClassName} rel="noopener noreferrer" target="_blank" href={propsObject.externalLink} >
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
                </a>
            </div>}


        </button>

    );

}
