/**
 * page for magic the gathering stuff of the app
 */
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';

export const Magic = () => {

    const text = 'I think Magic the gathering is a really well made game. Here are some links to Magic resources I like. I hope you find them useful.';

    const buttonArray = [
        {
            link: 'https://www.mtgstocks.com/news',
            isExternal: true,
            buttonText: 'Magic Stocks',
        },
        {
            link: 'https://edhrec.com/top/salt',
            isExternal: true,
            buttonText: 'EDH Salt',
        },
        {
            link: 'https://tappedout.net/mtg-decks/the-worldfire/',
            isExternal: true,
            buttonText: 'The WorldFire',
        },
        {
            link: 'https://tappedout.net/mtg-decks/eon-prison-1/',
            isExternal: true,
            buttonText: 'Eon Prison',
        },
        {
            link: 'https://tappedout.net/mtg-decks/the-mind-cage/',
            isExternal: true,
            buttonText: 'The Mind Cage',
        },
        {
            link: 'https://www.tcdecks.net/',
            isExternal: true,
            buttonText: 'TC Decks',
        },
        {
            link: 'https://articles.starcitygames.com/articles/whos-the-beatdown/',
            isExternal: true,
            buttonText: 'Beatdown',
        },
        {
            link: 'https://www.cardkingdom.com/',
            isExternal: true,
            buttonText: 'CK',
        },
        {
            link: 'https://cardboard-crack.com/',
            isExternal: true,
            buttonText: 'Cardboard Crack',
        },
        
    ];

    return (
        <>
            <HeaderSection title={'MAGIC'} text={text} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

        </>
    );

}
