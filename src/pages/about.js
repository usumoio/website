/**
 * about page of the app
 */
import {LowerNav} from '../components/lower_nav';
import { HeaderSection } from '../components/header_section';
import { addRandomBackgroundImage } from '../helpers/add_random_background_image';

export const About = () => {

    addRandomBackgroundImage(0);

    return (

        <>
            <div className='main-board'>

                <HeaderSection title={'ABOUT'} />

                <div className='text-section-about'>
                    <p>Hi. I'm Mike Spivack. This is my website. Its pretty simple. I'm using it to showcase a few of my ideas.</p> 
                    <p>You can click around and check out the links. One of the ideas I'm checking out is website design. I'm using this website to practice that.</p>
                </div>

                <LowerNav />

            </div>

            <div className='preload-images'></div>
        </>
    );

}
