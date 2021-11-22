/**
 * page for magic the gathering stuff of the app
 */
import {LowerNav} from '../components/lower_nav';
import {MainButtonExternalLink} from '../components/main_button_external_link';

export const Magic = () => {

    return (


        <div class='main-board'>

            <div class='title-section'>
                <span>USUMOIO.COM</span>
            </div>

            <div class='button-section'>
                <MainButtonExternalLink buttonText={'Magic Stocks'} externalLink={'https://www.mtgstocks.com/news'} />
                <MainButtonExternalLink buttonText={'EDH Salt'} externalLink={'https://edhrec.com/top/salt'} />
                <MainButtonExternalLink buttonText={'The WorldFire'} externalLink={'https://tappedout.net/mtg-decks/the-worldfire/'} />
                <MainButtonExternalLink buttonText={'Eon Prison'} externalLink={'https://tappedout.net/mtg-decks/eon-prison-1/'} />
            </div>

            <LowerNav />

        </div>

    );

}
