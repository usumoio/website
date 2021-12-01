/**
 * return a random button animate to keep things interesting
 */


export function addRandomAnimationClass () {

    const randomness = Math.floor(Math.random() * 8);

    let randomAnimationClass = '';

    // main-button-flip-left-right
    // main-button-rotate
    // main-button-grow
    // main-button-shrink
    // main-button-color-flip
    // main-button-checkered
    // main-button-fade
    // main-button-color-squares

    switch(randomness) {
        case 0:
            randomAnimationClass = 'main-button-flip-left-right';
            break;
        case 1:
            randomAnimationClass = 'main-button-fade';
            break;
        case 2:
            randomAnimationClass = 'main-button-rotate';
            break;
        case 3:
            randomAnimationClass = 'main-button-grow';
            break;
        case 4:
            randomAnimationClass = 'main-button-shrink';
            break;
        case 5:
            randomAnimationClass = 'main-button-color-flip';
            break;
        case 6: 
            randomAnimationClass = 'main-button-checkered';
            break;
        case 7: 
            randomAnimationClass = 'main-button-color-squares';
            break;
        default:
            randomAnimationClass = 'main-button-checkered';

    }

    return randomAnimationClass;

}