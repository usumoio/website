/**
 * control the a single grid square in the nav animation
 * 
 */
import { addRandomNavGridAnimations } from '../helpers/add_random_nav_grid_animation_classes'

export const NavSingleGridSquare = (propsObject) => {

    return (
        <div className={addRandomNavGridAnimations()}>
        </div>
    );

}
