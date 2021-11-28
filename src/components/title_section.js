/**
 * title section for each page that wants to use it
 */
import {SingleLetter} from './single_letter';

export const TitleSection = (propsObject) => {

    const titleSpanList = [];

    for(var x = 0; x < propsObject.title.length; x++) {
        titleSpanList.push(<SingleLetter key={x} singleLetter={propsObject.title[x]} />)
    }

    return (
        <div className='title-section'>
            {titleSpanList}
        </div>
    );
}