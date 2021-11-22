/**
 * main button that has animation variables set on it
 */
import React from 'react';
import { Link } from "react-router-dom";

import '../universal.css';

export const MainButton = (propsObject) => {

    let className = 'link-as-button' + (propsObject.buttonText.length > 10 ? ' link-as-button-font-small' : ' link-as-button-font-large' );

    return (

        <button class='main-button'>
            <Link to={propsObject.link} className={className}>{propsObject.buttonText}</Link>
        </button>

    );

}
