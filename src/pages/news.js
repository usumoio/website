/**
 * page for magic the gathering stuff of the app
 */
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';

export const News = () => {

    const text = 'Here are some news sources I check regularly. I like some of them more than others, but I think its important to keep up with the news.';

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
        },
        {
            link: 'https://www.cnbc.com/',
            isExternal: true,
            buttonText: 'CNBC',
        },
        {
            link: 'https://www.cnn.com/',
            isExternal: true,
            buttonText: 'CNN',
        }
    ];

    return (

        <>
            <HeaderSection title={'NEWS'} text={text} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

        </>

    );

}
