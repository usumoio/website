/**
 * control the divs in the nav button animations
 * 
 */
import { Link, useNavigate } from 'react-router-dom';
import { NavSingleGridSquare } from './nav_single_grid_square';
import { delay } from '../helpers/general_helpers';

export const NavMicroGrid = (propsObject) => {

    const navigate = useNavigate();

    async function fadeOutAnimation(event) {
        event.preventDefault()

        const mainBoard  = document.getElementById('main-board-style-access-id');

        mainBoard.classList.add('main-board-fade');

        await delay(1000);

        navigate(propsObject.toLink);

        mainBoard.classList.remove('main-board-fade');
    }

    const gridDivArray = [];

    for(var x = 500; x > 0; x--) {
        gridDivArray.push(<NavSingleGridSquare key={x} />);
    }

    return (
        <div className="nav-grid-overlay">
            <Link className='nav-link' to={propsObject.toLink} onClick={fadeOutAnimation}>
                {gridDivArray}
            </Link>
        </div>
    );

}