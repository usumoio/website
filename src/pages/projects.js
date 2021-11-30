/**
 * page for projects I'm working on
 */
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';

export const Projects = () => {

    const text = 'Here are some other projects that I\'m working on.';

    const buttonArray = [
    ];

    return (

        <>
            <HeaderSection title={'PROJECTS'} text={text} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

        </>

    );

}
