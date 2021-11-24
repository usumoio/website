/**
 * page for magic the gathering stuff of the app
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import {TitleSection} from '../components/title_section';

export const News = () => {

    const buttonArray = [
        {
            link: 'https://www.bbc.com/news',
            isExternal: true,
            buttonText: 'The BBC',
        },
        {
            link: 'https://www.reuters.com/',
            isExternal: true,
            buttonText: 'Reuters',
        },
        {
            link: 'https://news.ycombinator.com/',
            isExternal: true,
            buttonText: 'Hacker News',
        },
        {
            link: 'https://www.npr.org/sections/news/',
            isExternal: true,
            buttonText: 'NPR',
        },
        {
            link: 'https://www.motherjones.com/',
            isExternal: true,
            buttonText: 'Mother Jones',
        },
        {
            link: 'https://www.propublica.org/',
            isExternal: true,
            buttonText: 'Pro Publica',
        },
        {
            link: 'https://www.cbc.ca/news',
            isExternal: true,
            buttonText: 'The CBC',
        }
    ];

    return (

        <div class='main-board'>

            <TitleSection title={'NEWS'} />

            <div class='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

    );

}
