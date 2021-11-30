/**
 * page for magic the gathering stuff of the app
 */
import { LowerNav } from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';
import { addRandomBackgroundImage } from '../helpers/add_random_background_image';

export const History = () => {

    addRandomBackgroundImage(0);

    const text= 'These are some Wikipedia links to interesting stories from History. These are worth a read. I hope to add more soon.'

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
        },
        {
            link: 'https://en.wikipedia.org/wiki/Dust_Bowl',
            isExternal: true,
            buttonText: 'Dust Bowl',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Ur',
            isExternal: true,
            buttonText: 'Ur',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Battle_of_the_Aegates',
            isExternal: true,
            buttonText: 'Battle of the Aegates',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Penicillin',
            isExternal: true,
            buttonText: 'Penicillin',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Saturn_V',
            isExternal: true,
            buttonText: 'Saturn V',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Bell_Labs',
            isExternal: true,
            buttonText: 'Bell Labs',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Skylab#:~:text=Skylab%20was%20the%20first%20United,Skylab%203%2C%20and%20Skylab%204.',
            isExternal: true,
            buttonText: 'Sky Lab',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Smallpox_vaccine',
            isExternal: true,
            buttonText: 'Smallpox vaccine',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Holy_Roman_Empire',
            isExternal: true,
            buttonText: 'Holy Roman Empire',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Tokamak',
            isExternal: true,
            buttonText: 'The Tokamak',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Fallingwater',
            isExternal: true,
            buttonText: 'Fallingwater',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Battle_of_Lepanto',
            isExternal: true,
            buttonText: 'Battle of Lepanto',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Battle_of_Midway',
            isExternal: true,
            buttonText: 'Battle of Midway',
        },
        {
            link: 'https://en.wikipedia.org/wiki/House_of_Wisdom',
            isExternal: true,
            buttonText: 'House of Wisdom',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Abbasid_Caliphate',
            isExternal: true,
            buttonText: 'Abbasid Caliphate',
        },
        {
            link: 'https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe',
            isExternal: true,
            buttonText: 'Göbekli Tepe',
        },
        {
            link: 'https://en.wikipedia.org/wiki/Uluru',
            isExternal: true,
            buttonText: 'Uluru',
        },
        {
            link: 'https://en.wikipedia.org/wiki/New_York_Stock_Exchange',
            isExternal: true,
            buttonText: 'New York Stock Exchange',
        }
    ];

    return (
        <>
            <div className='main-board'>

                <HeaderSection title={'HISTORY'} text={text} />

                <div className='button-section'>
                    {buildButtonArrayAsHtml(buttonArray)}
                </div>

                <LowerNav />

            </div>

            <div className='preload-images'></div>
        </>

    );

}
