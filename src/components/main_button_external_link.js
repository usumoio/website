/**
 * main button for external links that has animation variables set on it
 */
import React from 'react';

import '../universal.css';

export const MainButtonExternalLink = (propsObject) => {

    let className = 'link-as-button' + (propsObject.buttonText.length > 10 ? ' link-as-button-font-small' : ' link-as-button-font-large' );

    return (

        <button class='main-button'>
            <a className={className} target="_blank" href={propsObject.externalLink}>{propsObject.buttonText}</a>
        </button>

    );

}
