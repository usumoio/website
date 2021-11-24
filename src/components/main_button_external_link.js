/**
 * main button for external links that has animation variables set on it
 */
import React from 'react';
import { addRandomAnimationClass } from '../helpers/add_random_animation_class';

export const MainButtonExternalLink = (propsObject) => {

    let textClassName = 'link-as-button' + (propsObject.buttonText.length > 10 ? ' link-as-button-font-small' : ' link-as-button-font-large' );

    let buttonClassName = 'main-button ' + addRandomAnimationClass();

    return (

        <button className={buttonClassName}>
            <a className={textClassName} rel="noopener noreferrer" target="_blank" href={propsObject.externalLink} >{propsObject.buttonText}</a>
        </button>

    );

}
