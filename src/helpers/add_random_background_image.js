/**
 * return a random background to keep things interesting
 */


export function addRandomBackgroundImage () {

    const element =  document.getElementsByTagName("html")[0];

    const randomness = Math.floor(Math.random() * 26);

    // tech
    // dive
    // cart
    // cell
    // volc
    // org
    // strand
    // struct
    // seven
    // angular
    // burst
    // inner
    // julia
    // mandel
    // planet
    // quilt
    // recur
    // second
    // plateau
    // space
    // swiss
    // tissue
    // jazz
    // angle
    // depth
    // unravel


    const backgroundNameArray = [
        'tech',
        'dive',
        'cart',
        'cell',
        'volc',
        'org',
        'strand',
        'struct',
        'seven',
        'angular',
        'burst',
        'inner',
        'julia',
        'mandel',
        'planet',
        'quilt',
        'recur',
        'second',
        'plateau',
        'space',
        'swiss',
        'tissue',
        'jazz',
        'angle',
        'depth',
        'unravel',
    ];

    const removeOldClasses = (htmlElement, elementToKeep) => {
        for(const key in backgroundNameArray) {
            if(Number(key) !== Number(elementToKeep)) {
                htmlElement.classList.remove(backgroundNameArray[key]);
            }
        }
    }

    switch(randomness) {

        case 0:
            element.classList.add('tech');
            removeOldClasses(element, 0);
            break;

        case 1:
            element.classList.add('dive');
            removeOldClasses(element, 1);
            break;

        case 2:
            element.classList.add('cart');
            removeOldClasses(element, 2);
            break;

        case 3:
            element.classList.add('cell');
            removeOldClasses(element, 3);
            break;

        case 4:
            element.classList.add('volc');
            removeOldClasses(element, 4);
            break;

        case 5:
            element.classList.add('org');
            removeOldClasses(element, 5);
            break;

        case 6:
            element.classList.add('strand');
            removeOldClasses(element, 6);
            break;

        case 7:
            element.classList.add('struct');
            removeOldClasses(element, 7);
            break;

        case 8:
            element.classList.add('seven');
            removeOldClasses(element, 8);
            break;

        case 9:
            element.classList.add('angular');
            removeOldClasses(element, 9);
            break;

        case 10:
            element.classList.add('burst');
            removeOldClasses(element, 10);
            break;

        case 11:
            element.classList.add('inner');
            removeOldClasses(element, 11);
            break;

        case 12:
            element.classList.add('julia');
            removeOldClasses(element, 12);
            break;

        case 13:
            element.classList.add('mandel');
            removeOldClasses(element, 13);
            break;

        case 14:
            element.classList.add('planet');
            removeOldClasses(element, 14);
            break;

        case 15:
            element.classList.add('quilt');
            removeOldClasses(element, 15);
            break;

        case 16:
            element.classList.add('recur');
            removeOldClasses(element, 16);
            break;

        case 17:
            element.classList.add('second');
            removeOldClasses(element, 17);
            break;

        case 18:
            element.classList.add('plateau');
            removeOldClasses(element, 18);
            break;

        case 19:
            element.classList.add('space');
            removeOldClasses(element, 19);
            break;

        case 20:
            element.classList.add('swiss');
            removeOldClasses(element, 20);
            break;

        case 21:
            element.classList.add('tissue');
            removeOldClasses(element, 21);
            break;

        case 22:
            element.classList.add('jazz');
            removeOldClasses(element, 22);
            break;

        case 23:
            element.classList.add('angle');
            removeOldClasses(element, 23);
            break;

        case 24:
            element.classList.add('depth');
            removeOldClasses(element, 24);
            break;

        case 25:
            element.classList.add('unravel');
            removeOldClasses(element, 25);
            break;
        
        default:
            element.classList.add('tech');
            removeOldClasses(element, 0);

    }

    setTimeout(addRandomBackgroundImage, 20000);
}