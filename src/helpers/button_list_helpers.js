/**
 * return the components that make the lists of buttons
 */
import React from 'react';
import {MainButton} from '../components/main_button';
import {MainButtonExternalLink} from '../components/main_button_external_link';

export function buildButtonArrayAsHtml (buttonArray) {

    const buttonArrayAsHtml = buttonArray.map( (button, index) => {
        
        if(!button.isExternal) {
            
            return <MainButton key={index} buttonText={button.buttonText} link={button.link} />

        } else {

            return <MainButtonExternalLink key={index} buttonText={button.buttonText} externalLink={button.link} />

        }

    } )

    return buttonArrayAsHtml;
}

