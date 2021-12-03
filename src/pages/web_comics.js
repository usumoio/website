/**
 * page for webcomics I like
 */
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';

export const WebComics = () => {
    const text = 'These are some webcomices I think are funny.';

    const buttonArray = [
        {
            link: 'https://xkcd.com/',
            isExternal: true,
            buttonText: 'XKCD',
        },
        {
            link: 'https://www.smbc-comics.com/',
            isExternal: true,
            buttonText: 'SMBC',
        },
        {
            link: 'http://wondermark.com/',
            isExternal: true,
            buttonText: 'Wondermark',
        },
        {
            link: 'https://www.asofterworld.com/',
            isExternal: true,
            buttonText: 'A Softer World',
        },
        {
            link: 'https://www.warhammer-community.com/tsoalr/',
            isExternal: true,
            buttonText: 'Turn Signals on a Landraider',
        },
        {
            link: 'http://www.rice-boy.com/see/',
            isExternal: true,
            buttonText: 'Rice Boy',
        },
    ];

    return (
        <>
            <HeaderSection title={'Web Comics'} text={text} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

        </>

    );

}
