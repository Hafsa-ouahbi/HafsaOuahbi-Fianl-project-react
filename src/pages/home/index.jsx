import React from 'react';
import Hero from './partials/hero';
import Cards from './partials/cards';
import Carousel22 from './partials/featured';
import OurBlog from './partials/blog';
import InstagramFollow from './partials/insta';

const Home = () => {
    return (
        <div>
            <Hero />
            <Cards />
            <Carousel22 />
            <OurBlog />
            <InstagramFollow></InstagramFollow>
            
        </div>
    );
};

export default Home;