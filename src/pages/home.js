/**
 * main page of the app
 */
import React from 'react';
import {HeaderSection} from '../components/header_section';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';

export const Home = () => {

    const buttonArray = [
        {
            link: 'magic',
            isExternal: false,
            buttonText: 'Magic',
        },
        {
            link: 'stuff',
            isExternal: false,
            buttonText: 'USUMOIO Stuff',
        },
        {
            link: 'news',
            isExternal: false,
            buttonText: 'News',
        },
        {
            link: 'projects',
            isExternal: false,
            buttonText: 'Projects',
        },
        {
            link: 'random',
            isExternal: false,
            buttonText: 'Other Random Stuff',
        },
        {
            link: 'history',
            isExternal: false,
            buttonText: 'History',
        },
        {
            link: 'nature',
            isExternal: false,
            buttonText: 'Nature',
        },
        {
            link: 'about',
            isExternal: false,
            buttonText: 'About',
        },
    ];

    return (
        <>
            <HeaderSection title={'USUMOIO.COM'} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

        </>
    );

}

