/**
 * page for magic the gathering stuff of the app
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import {TitleSection} from '../components/title_section';

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
        }

    ];

    return (


        <div class='main-board'>

            <TitleSection title={'MAGIC'} />

            <div class='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

    );

}
