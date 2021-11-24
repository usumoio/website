/**
 * page for magic the gathering stuff of the app
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import {TitleSection} from '../components/title_section';
import Pdf from '../assets/michael_spivack_resume.pdf'

export const Stuff = () => {

    const buttonArray = [
        {
            link: 'https://www.linkedin.com/in/michael-spivack-3a8a0515/',
            isExternal: true,
            buttonText: 'Linkedin',
        },
        {
            link: 'https://github.com/usumoio',
            isExternal: true,
            buttonText: 'Github',
        },
        {
            link: 'https://www.reddit.com/user/usumoio',
            isExternal: true,
            buttonText: 'Reddit',
        },
        {
            link: Pdf,
            isExternal: true,
            buttonText: 'Resume',
        }
    ];

    return (

        <div class='main-board'>

            <TitleSection title={'USUMOIO STUFF'} />

            <div class='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

    );

}