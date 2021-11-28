/**
 * page for magic the gathering stuff of the app
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import {TitleSection} from '../components/title_section';
import {TextSection} from '../components/text_section';

export const Magic = () => {

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
    ];

    return (


        <div className='main-board'>

            <TitleSection title={'MAGIC'} />

            <TextSection text={'I think Magic the gathering is a well made game. Here are some links to Magic resources I like.'} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

    );

}
