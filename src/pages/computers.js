/**
 * I'm not sure what this one is for yet
 */
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';

export const Computers = () => {
    const text = 'I\'m add alling the knowledge I can find on my pursuit of the craft of computer science here.';

    const buttonArray = [
    ];

    return (
        <>
            <HeaderSection title={'Computers'} text={text} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

        </>

    );

}
