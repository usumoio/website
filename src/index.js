/**
 * main page of the app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseTemplate } from './pages/base_template';
import {About} from './pages/about';
import {Magic} from './pages/magic';
import {News} from './pages/news';
import {Stuff} from './pages/stuff';
import {Projects} from './pages/projects';
import {Random} from './pages/random';
import {History} from './pages/history';
import {Nature} from './pages/nature';
import {Home} from './pages/home';


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<BaseTemplate nextComponent={<Home />} />} />
            <Route path="about" element={<BaseTemplate nextComponent={ <About />} />} />
            <Route path="magic" element={<BaseTemplate nextComponent={ <Magic />} />} />
            <Route path="news" element={<BaseTemplate nextComponent={ <News />} />} />
            <Route path="stuff" element={<BaseTemplate nextComponent={ <Stuff />} />} />
            <Route path="projects" element={<BaseTemplate nextComponent={ <Projects />} />} />
            <Route path="random" element={<BaseTemplate nextComponent={ <Random />} />} />
            <Route path="history" element={<BaseTemplate nextComponent={ <History />} />} />
            <Route path="nature" element={<BaseTemplate nextComponent={ <Nature />} />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
