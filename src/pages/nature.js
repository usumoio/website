/**
 * page for projects I'm working on
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';
import { addRandomBackgroundImage } from '../helpers/add_random_background_image';

export const Nature = () => {
    
    addRandomBackgroundImage();

    const text = 'I\'m not sure what I\'m doing with this section yet.';

    const buttonArray = [
    ];

    return (
        <>
            <div className='main-board'>

                <HeaderSection title={'NATURE'} text={text} />

                <div className='button-section'>
                    {buildButtonArrayAsHtml(buttonArray)}
                </div>

                <LowerNav />

            </div>

            <div className='preload-images'></div>
        </>

    );

}
