/**
 * control the a single bar line in the black bar animation
 * 
 */
import { Link, useNavigate } from 'react-router-dom';
import { BlackBarDiv } from './black_bar_div';
import { delay } from '../helpers/general_helpers';

export const BlackBarAnimation = (propsObject) => {

    const navigate = useNavigate();

    async function fadeOutAnimation(event) {
        event.preventDefault()

        const mainBoard  = document.getElementById('main-board-style-access-id');

        mainBoard.classList.add('main-board-fade');

        await delay(1000);

        navigate(propsObject.toLink);

        mainBoard.classList.remove('main-board-fade');
    }

    const barsDivArray = [];

    for(var x = 150; x > 0; x--) {
        barsDivArray.push(<BlackBarDiv key={x} />);
    }

    return (
        <div className="black-bar-overlay">
            <Link to={propsObject.toLink} onClick={fadeOutAnimation}>
                {barsDivArray}
            </Link>
        </div>
    );

}
