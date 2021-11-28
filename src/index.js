/**
 * main page of the app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LowerNav} from './components/lower_nav';
import {About} from './pages/about';
import {Magic} from './pages/magic';
import {News} from './pages/news';
import {Stuff} from './pages/stuff';
import {Projects} from './pages/projects';
import {Random} from './pages/random';
import {History} from './pages/history';
import {Nature} from './pages/nature';
import {HeaderSection} from './components/header_section';
import { buildButtonArrayAsHtml } from './helpers/button_list_helpers';
import { addRandomBackgroundImage } from './helpers/add_random_background_image';

import './universal.css';

const App = () => {

    addRandomBackgroundImage(0);

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
            <div className='main-board'>

                <HeaderSection title={'USUMOIO.COM'} />

                <div className='button-section'>
                    {buildButtonArrayAsHtml(buttonArray)}
                </div>

                <LowerNav />

            </div>

            <div className='preload-images'></div>
        </>
    );

}

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="magic" element={<Magic />} />
            <Route path="news" element={<News />} />
            <Route path="stuff" element={<Stuff />} />
            <Route path="projects" element={<Projects />} />
            <Route path="random" element={<Random />} />
            <Route path="history" element={<History />} />
            <Route path="nature" element={<Nature />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
