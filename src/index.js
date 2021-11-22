import React from 'react';
import ReactDOM from 'react-dom';
import './universal.css';
import {LowerNavButton} from './components/lower_nav_button';


const App = () => {

    return (


        <div class='main-board'>

            <div class='title-section'>
                <span>USUMOIO.COM</span>
            </div>


            <ul class='list-section'>
                <li><a href="usumoio.html">USUMOIO Stuff</a></li>
                <li><a href="about.html">About</a></li>
            </ul>


            <LowerNavButton />

        </div>

    );

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
