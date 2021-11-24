/**
 * page for projects I'm working on
 */
import {LowerNav} from '../components/lower_nav';
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import {TitleSection} from '../components/title_section';

export const Projects = () => {

    const buttonArray = [
    ];

    return (

        <div class='main-board'>

            <TitleSection title={'PROJECTS'} />

            <div class='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

            <LowerNav />

        </div>

    );

}
