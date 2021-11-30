/**
 * page for just random whatever
 */
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';

export const Random = () => {

    const text = `These are just some random things from`

    const buttonArray = [
    ];

    return (
        <>

            <HeaderSection title={'RANDOM'} text={text} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

        </>

    );

}
