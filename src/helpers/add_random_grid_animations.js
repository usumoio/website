/**
 * control random css classes for grid hover animation
 */


export function addRandomGridAnimations () {

    // inner-grid-square-op-low-time-low-color-low
    // inner-grid-square-op-mid-time-low-color-low
    // inner-grid-square-op-high-time-low-color-low
    // inner-grid-square-op-low-time-low-color-mid
    // inner-grid-square-op-low-time-mid-color-low
    // inner-grid-square-op-low-time-low-color-high
    // inner-grid-square-op-mid-time-mid-color-low
    // inner-grid-square-op-mid-time-mid-color-mid
    // inner-grid-square-op-mid-time-low-color-mid
    // inner-grid-square-op-low-time-mid-color-mid
    // inner-grid-square-op-low-time-mid-color-high
    // inner-grid-square-op-low-time-high-color-mid
    // inner-grid-square-op-low-time-high-color-low
    // inner-grid-square-op-low-time-high-color-high
    // inner-grid-square-op-mid-time-low-color-high
    // inner-grid-square-op-mid-time-mid-color-high
    // inner-grid-square-op-mid-time-high-color-low
    // inner-grid-square-op-mid-time-high-color-mid
    // inner-grid-square-op-mid-time-high-color-high
    // inner-grid-square-op-high-time-low-color-mid
    // inner-grid-square-op-high-time-low-color-high
    // inner-grid-square-op-high-time-mid-color-low
    // inner-grid-square-op-high-time-mid-color-mid
    // inner-grid-square-op-high-time-mid-color-high
    // inner-grid-square-op-high-time-high-color-low
    // inner-grid-square-op-high-time-high-color-mid
    // inner-grid-square-op-high-time-high-color-high

    const randomness = Math.floor(Math.random() * 27);

    switch(randomness) {


        case 0: 
            return 'inner-grid-square inner-grid-square-op-low-time-low-color-low';
        case 1: 
            return 'inner-grid-square inner-grid-square-op-mid-time-low-color-low';
        case 2: 
            return 'inner-grid-square inner-grid-square-op-high-time-low-color-low';
        case 3: 
            return 'inner-grid-square inner-grid-square-op-low-time-low-color-mid';
        case 4: 
            return 'inner-grid-square inner-grid-square-op-low-time-mid-color-low';
        case 5: 
            return 'inner-grid-square inner-grid-square-op-low-time-low-color-high';
        case 6: 
            return 'inner-grid-square inner-grid-square-op-mid-time-mid-color-low';
        case 7: 
            return 'inner-grid-square inner-grid-square-op-mid-time-mid-color-mid';
        case 8: 
            return 'inner-grid-square inner-grid-square-op-mid-time-low-color-mid';
        case 9: 
            return 'inner-grid-square inner-grid-square-op-low-time-mid-color-mid';
        case 10: 
            return 'inner-grid-square inner-grid-square-op-low-time-mid-color-high';
        case 11: 
            return 'inner-grid-square inner-grid-square-op-low-time-high-color-mid';
        case 12: 
            return 'inner-grid-square inner-grid-square-op-low-time-high-color-low';
        case 13: 
            return 'inner-grid-square inner-grid-square-op-low-time-high-color-high';
        case 14: 
            return 'inner-grid-square inner-grid-square-op-mid-time-low-color-high';
        case 15: 
            return 'inner-grid-square inner-grid-square-op-mid-time-mid-color-high';
        case 16: 
            return 'inner-grid-square inner-grid-square-op-mid-time-high-color-low';
        case 17: 
            return 'inner-grid-square inner-grid-square-op-mid-time-high-color-mid';
        case 18: 
            return 'inner-grid-square inner-grid-square-op-mid-time-high-color-high';
        case 19: 
            return 'inner-grid-square inner-grid-square-op-high-time-low-color-mid';
        case 20: 
            return 'inner-grid-square inner-grid-square-op-high-time-low-color-high';
        case 21: 
            return 'inner-grid-square inner-grid-square-op-high-time-mid-color-low';
        case 22: 
            return 'inner-grid-square inner-grid-square-op-high-time-mid-color-mid';
        case 23: 
            return 'inner-grid-square inner-grid-square-op-high-time-mid-color-high';
        case 24: 
            return 'inner-grid-square inner-grid-square-op-high-time-high-color-low';
        case 25: 
            return 'inner-grid-square inner-grid-square-op-high-time-high-color-mid';
        case 26: 
            return 'inner-grid-square inner-grid-square-op-high-time-high-color-high';
        default:
            return 'inner-grid-square inner-grid-square-op-high-time-high-color-high';

    }

}
