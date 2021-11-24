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
import {TitleSection} from './components/title_section';
import { buildButtonArrayAsHtml } from './helpers/button_list_helpers';

import './universal.css';

const App = () => {

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
            link: 'about',
            isExternal: false,
            buttonText: 'About',
        },
    ];

    return (

        <div className='main-board'>

            <TitleSection title={'USUMOIO.COM'} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

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
            <Route path="Projects" element={<Projects />} />
            <Route path="Random" element={<Random />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
