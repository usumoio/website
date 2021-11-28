/**
 * page for magic the gathering stuff of the app
 */
import { LowerNav } from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { TitleSection } from '../components/title_section';
import { TextSection } from '../components/text_section';

export const History = () => {

    const buttonArray = [
        {
            link: 'https://en.wikipedia.org/wiki/Battle_of_Vienna',
            isExternal: true,
            buttonText: 'Battle of Vienna',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Tenochtitlan',
            isExternal: true,
            buttonText: 'Tenochtitlan',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Battle_of_the_Catalaunian_Plains',
            isExternal: true,
            buttonText: 'Battle of the Catalaunian Plains',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Warring_States_period',
            isExternal: true,
            buttonText: 'Warring States Period',
        }

    ];

    return (

        <div className='main-board'>

            <TitleSection title={'HISTORY'} />

            <TextSection text={'These are some Wikipedia links to interesting stories from History.'} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

    );

}
