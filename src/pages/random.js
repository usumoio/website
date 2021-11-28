/**
 * page for just random whatever
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';
import { addRandomBackgroundImage } from '../helpers/add_random_background_image';

export const Random = () => {

    addRandomBackgroundImage(0);

    const text = `These are just some random things from`

    const buttonArray = [
    ];

    return (
        <>

            <div className='main-board'>

                <HeaderSection title={'RANDOM'} text={text} />

                <div className='button-section'>
                    {buildButtonArrayAsHtml(buttonArray)}
                </div>

                <LowerNav />

            </div>

            <div className='preload-images'></div>
        </>

    );

}
