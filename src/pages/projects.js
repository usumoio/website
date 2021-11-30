/**
 * page for projects I'm working on
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';
import { addRandomBackgroundImage } from '../helpers/add_random_background_image';

export const Projects = () => {

    addRandomBackgroundImage();

    const text = 'Here are some other projects that I\'m working on.';

    const buttonArray = [
    ];

    return (

        <>
            <div className='main-board'>

                <HeaderSection title={'PROJECTS'} text={text} />

                <div className='button-section'>
                    {buildButtonArrayAsHtml(buttonArray)}
                </div>

                <LowerNav />

            </div>
            <div className='preload-images'></div>
        </>

    );

}
