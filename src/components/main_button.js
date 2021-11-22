/**
 * main button that has animation variables set on it
 */
import React from 'react';
import { Link } from "react-router-dom";

import '../universal.css';

export const MainButton = (propsObject) => {

    return (

        <button class='main-button'>
            <Link to={propsObject.link} className='react-link'>{propsObject.buttonText}</Link>
        </button>

    );

}
