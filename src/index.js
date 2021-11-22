/**
 * main page of the app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {LowerNav} from './components/lower_nav';
import {MainButton} from './components/main_button';
import {About} from './pages/about';

import './universal.css';

const links = {
    about: 'about',
    home: 'home',
    magic: 'magic'
}

const App = () => {

    return (


        <div class='main-board'>

            <div class='title-section'>
                <span>USUMOIO.COM</span>
            </div>

            <div class='button-section'>
                <MainButton buttonText={'Magic'} link={links.magic} />
                <MainButton buttonText={'About'} link={links.about} />
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
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
