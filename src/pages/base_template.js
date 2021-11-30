/**
 * base template for most app pages
 */
import React from 'react';
import { addRandomBackgroundImage } from '../helpers/add_random_background_image';
import {LowerNav} from '../components/lower_nav';

import '../universal.css';

export const BaseTemplate = (propsObject) => {

    addRandomBackgroundImage();

    return (
        <>
            <div className='main-board'>

                {propsObject.nextComponent}

                <LowerNav />

            </div>

            <div className='preload-images'></div>
        </>
    );

}