/**
 * main page of the app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {LowerNavButton} from './components/lower_nav_button';
import {About} from './pages/about';

import './universal.css';

const App = () => {

    return (


        <div class='main-board'>

            <div class='title-section'>
                <span>USUMOIO.COM</span>
            </div>


            <ul class='list-section'>
                <li><a href="usumoio.html">USUMOIO Stuff</a></li>
                <li><Link to="/about">About</Link></li>
            </ul>


            <LowerNavButton />

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
