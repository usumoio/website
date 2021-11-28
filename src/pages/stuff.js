/**
 * page for magic the gathering stuff of the app
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import Pdf from '../assets/michael_spivack_resume.pdf'
import { HeaderSection } from '../components/header_section';
import { addRandomBackgroundImage } from '../helpers/add_random_background_image';

export const Stuff = () => {

    addRandomBackgroundImage(0);

    const text = `Here are some details on what I'm up to, both on and off the internet!`;

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

        <>
            <div className='main-board'>

                <HeaderSection title={'USUMOIO STUFF'} text={text} />

                <div className='button-section'>
                    {buildButtonArrayAsHtml(buttonArray)}
                </div>

                <LowerNav />

            </div>

            <div className='preload-images'></div>
        </>

    );

}
