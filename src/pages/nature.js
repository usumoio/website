/**
 * page for projects I'm working on
 */
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';

export const Nature = () => {
    const text = 'I\'m not sure what I\'m doing with this section yet.';

    const buttonArray = [
    ];

    return (
        <>
            <HeaderSection title={'NATURE'} text={text} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

        </>

    );

}
