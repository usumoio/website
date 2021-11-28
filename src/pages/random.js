/**
 * page for just random whatever
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import {TitleSection} from '../components/title_section';

export const Random = () => {

    const buttonArray = [
    ];

    return (

        <div className='main-board'>

            <TitleSection title={'RANDOM'} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

    );

}
