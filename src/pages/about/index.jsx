import React from 'react';
import ImgHero from '../../components/imgHero';
import { carousel2 } from '../../constant/images/images';
import MainSection from './partials/mainSection';
const About = () => {
    return (
        <div>
            <ImgHero title="ABOUT" image={carousel2} />
            <MainSection></MainSection>
        </div>
    );
};

export default About;