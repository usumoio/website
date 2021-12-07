/**
 * control randomness for black bar animation
 */

export function addRandomBlackBarAnimations() {

    let classValues = '';

    const timeRandomness = Math.floor(Math.random() * 20);

    switch(timeRandomness) {

        case 0: 
            classValues = 'time-one-black-bar';
            break;
            
        case 1: 
            classValues = 'time-two-black-bar';
            break;
            
        case 2: 
            classValues = 'time-three-black-bar';
            break;
            
        case 3: 
            classValues = 'time-four-black-bar';
            break;
            
        case 4: 
            classValues = 'time-five-black-bar';
            break;
            
        case 5: 
            classValues = 'time-six-black-bar';
            break;
            
        case 6: 
            classValues = 'time-seven-black-bar';
            break;
            
        case 7: 
            classValues = 'time-eight-black-bar';
            break;
            
        case 8: 
            classValues = 'time-nine-black-bar';
            break;
            
        case 9: 
            classValues = 'time-ten-black-bar';
            break;

        case 10: 
            classValues = 'time-eleven-black-bar';
            break;

        case 11: 
            classValues = 'time-twelve-black-bar';
            break;
            
        case 12: 
            classValues = 'time-thirteen-black-bar';
            break;
            
        case 13: 
            classValues = 'time-fourteen-black-bar';
            break;
            
        case 14: 
            classValues = 'time-fiveteen-black-bar';
            break;
            
        case 15: 
            classValues = 'time-sixteen-black-bar';
            break;
            
        case 16: 
            classValues = 'time-seventeen-black-bar';
            break;
            
        case 17: 
            classValues = 'time-eighteen-black-bar';
            break;
            
        case 18: 
            classValues = 'time-nineteen-black-bar';
            break;
            
        case 19: 
            classValues = 'time-twenty-black-bar';
            break;

        default:
            classValues = 'time-one-black-bar';
    }

    return 'inner-black-bar ' + classValues;

}