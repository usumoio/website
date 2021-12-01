/**
 * add random color to square of the grid
 * 
 * note the square is defined like followed:
 * 
 *      1,      2
 *      3,      4
 * 
 */

export function addRandomSquareColor(squareCoordinate) {


    if(squareCoordinate === 1) {

        const randomness = Math.floor(Math.random() * 15);

        switch(randomness) {
            case 0:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-zero';

            case 1:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-one';

            case 2:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-two';

            case 3:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-three';

            case 4:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-four';

            case 5:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-five';

            case 6: 
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-six';

            case 7: 
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-seven';

            case 8:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-eight';

            case 9: 
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-nine';

            case 10:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-ten';

            case 11:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-eleven';

            case 12:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-twelve';

            case 13:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-thirteen';

            case 14:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-fourteen';

            default:
                return 'inner-square-grow-top-left inner-square-grow-top-left-color-zero';
        }
    } 

    if(squareCoordinate === 2) {

        const randomness = Math.floor(Math.random() * 15);
        
        switch(randomness) {
            case 0:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-zero';

            case 1:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-one';

            case 2:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-two';

            case 3:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-three';

            case 4:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-four';

            case 5:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-five';

            case 6: 
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-six';

            case 7: 
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-seven';

            case 8:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-eight';

            case 9: 
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-nine';

            case 10:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-ten';

            case 11:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-eleven';

            case 12:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-twelve';

            case 13:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-thirteen';

            case 14:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-fourteen';

            default:
                return 'inner-square-grow-top-right inner-square-grow-top-right-color-zero';
        }
    } 

    if(squareCoordinate === 3) {

        const randomness = Math.floor(Math.random() * 15);

        switch(randomness) {
            case 0:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-zero';

            case 1:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-one';

            case 2:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-two';

            case 3:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-three';

            case 4:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-four';

            case 5:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-five';

            case 6: 
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-six';

            case 7: 
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-seven';

            case 8:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-eight';

            case 9: 
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-nine';

            case 10:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-ten';

            case 11:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-eleven';

            case 12:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-twelve';

            case 13:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-thirteen';

            case 14:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-fourteen';

            default:
                return 'inner-square-grow-bottom-left inner-square-grow-bottom-left-color-zero';
        }

        
    } 


    if(squareCoordinate === 4) {

        const randomness = Math.floor(Math.random() * 15);
        
        switch(randomness) {
            case 0:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-zero';

            case 1:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-one';

            case 2:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-two';

            case 3:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-three';

            case 4:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-four';

            case 5:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-five';

            case 6: 
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-six';

            case 7: 
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-seven';

            case 8:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-eight';

            case 9: 
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-nine';

            case 10:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-ten';

            case 11:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-eleven';

            case 12:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-twelve';

            case 13:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-thirteen';

            case 14:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-fourteen';

            default:
                return 'inner-square-grow-bottom-right inner-square-grow-bottom-right-color-zero';
        }

    } 
}