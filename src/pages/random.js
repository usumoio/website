/**
 * page for just random whatever
 */
import { buildButtonArrayAsHtml } from '../helpers/button_list_helpers';
import { HeaderSection } from '../components/header_section';

export const Random = () => {

    const text = `These are just some random things from the internet that I think are interesting.`

    const buttonArray = [
        {
            link: 'webcomics',
            isExternal: false,
            buttonText: 'Web Comics',
        },
        {
            link: 'https://www.youtube.com/watch?v=pP44EPBMb8A',
            isExternal: true,
            buttonText: 'Building a Dyson Sphere',
        },
        {
            link: 'https://www.youtube.com/watch?v=rhFK5_Nx9xY',
            isExternal: true,
            buttonText: 'The Kardashev Scale',
        },
        {
            link: 'https://www.ted.com/talks/bill_stone_inside_the_world_s_deepest_caves?language=en',
            isExternal: true,
            buttonText: 'The World\'s Deepest Caves',
        },
        {
            link: 'http://www.didthanoskill.me/',
            isExternal: true,
            buttonText: 'Did Thanos Kill Me?',
        },
    ];

    return (
        <>

            <HeaderSection title={'RANDOM'} text={text} />

            <div className='button-section'>
                {buildButtonArrayAsHtml(buttonArray)}
            </div>

        </>

    );

}
