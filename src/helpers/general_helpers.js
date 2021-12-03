/**
 * general helper functions
 */



export function delay(time) {
    return new Promise( resolve => setTimeout(resolve, time) );
}
