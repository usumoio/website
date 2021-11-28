/**
 * section for the title and the text explaining this section
 */
import {TitleSection} from './title_section';
import {TextSection} from './text_section';

export const HeaderSection = (propsObject) => {

    return (
        <div className='header-section' >

            {propsObject.title && <TitleSection title={propsObject.title} /> }

            {propsObject.text && <TextSection text={propsObject.text} /> }

        </div>
    );

}