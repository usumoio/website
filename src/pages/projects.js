/**
 * page for projects I'm working on
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import {TitleSection} from '../components/title_section';
import {TextSection} from '../components/text_section';

export const Projects = () => {

    const buttonArray = [
    ];

    return (

        <div className='main-board'>

            <TitleSection title={'PROJECTS'} />

            <TextSection text={'Here are some other projects that I\'m working on.'} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

    );

}
