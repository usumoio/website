/**
 * return a random background to keep things interesting
 */


export function addRandomBackgroundImage (trackingCount) {

    const element =  document.getElementsByTagName("html")[0];

    // dive
    // tech
    // cart
    // cell
    // volc
    // org
    // strand
    // struct

    switch(trackingCount) {
        case 0:
            element.classList.add('tech');
            element.classList.remove('dive');
            break;
        case 1:
            element.classList.add('dive');
            element.classList.remove('tech');
            break;
        case 2:
            element.classList.add('cart');
            element.classList.remove('dive');
            break;
        case 3:
            element.classList.add('cell');
            element.classList.remove('cart');
            break;
        case 4:
            element.classList.add('volc');
            element.classList.remove('cell');
            break;
        case 5:
            element.classList.add('org');
            element.classList.remove('volc');
            break;
        case 6:
            element.classList.add('strand');
            element.classList.remove('org');
            break;
        case 7:
            element.classList.add('struct');
            element.classList.remove('strand');
            break;
        default:
            element.classList.add('dive');
            element.classList.remove('struct');
            trackingCount = 0;
    }

    trackingCount++;

    setTimeout(addRandomBackgroundImage.bind(null, trackingCount), 30000);
}