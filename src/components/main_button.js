/**
 * main button that has animation variables set on it
 */
import React from 'react';
import { Link } from "react-router-dom";
import { addRandomAnimationClass } from '../helpers/add_random_animation_class';

export const MainButton = (propsObject) => {

    let textClassName = 'link-as-button' + (propsObject.buttonText.length > 10 ? ' link-as-button-font-small' : ' link-as-button-font-large' );

    let buttonClassName = 'main-button ' + addRandomAnimationClass();

    return (

        <button className={buttonClassName}>
            <Link to={propsObject.link} className={textClassName}>{propsObject.buttonText}</Link>
        </button>

    );

}
