/**
 * about page of the app
 */
import { HeaderSection } from '../components/header_section';

export const About = () => {

    return (

        <>

            <HeaderSection title={'ABOUT'} />

            <div className='text-section-about'>

                <p>Hi. I'm Mike Spivack. This is my website. It's pretty simple. I'm using this website to showcase a few of my ideas and link to a few things I think are interesting.</p> 
                <p>You can click around and check out the links. One of the ideas I'm checking out is website design. I'm using this website to practice that.</p>
                <p>Oh! Here is an important note. I don't own any of the beatiful images you see in the background. All of them can be found here on the <u><a href="https://www.sgeier.net/fractals/indexe.php">artist's website</a></u>.</p>
                <p>If you're looking for more information about me, check out the USUSMOIO Stuff section, I even include a resume there.</p>

            </div>

        </>
    );

}
