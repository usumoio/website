/**
 * main button that has animation variables set on it
 */
import React from 'react';
import { Link } from "react-router-dom";
import { addRandomAnimationClass } from '../helpers/add_random_animation_class';
import { addRandomGridAnimations } from '../helpers/add_random_grid_animations';

import './styles/grid_button_animation.css';

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
        </button>

    );

}
