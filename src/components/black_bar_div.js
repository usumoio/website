/**
 * control the the entire black bar animation for the main button
 * 
 */
import { addRandomBlackBarAnimations } from '../helpers/add_random_black_bar_animations';

export const BlackBarDiv = (propsObject) => {

    return (

        <div className={addRandomBlackBarAnimations()}>
        </div>

    );

}
