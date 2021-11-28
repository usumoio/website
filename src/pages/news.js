/**
 * page for magic the gathering stuff of the app
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';
import { addRandomBackgroundImage } from '../helpers/add_random_background_image';

export const News = () => {

    addRandomBackgroundImage(0);

    const text = 'Here are some news sources I check regularly. I think it is important for a person to be informed.';

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

        <div className='main-board'>

            <HeaderSection title={'NEWS'} text={text} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

    );

}
