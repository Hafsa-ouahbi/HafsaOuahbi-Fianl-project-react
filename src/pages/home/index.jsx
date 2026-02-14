import React from 'react';
import Hero from './partials/hero';
import Cards from './partials/cards';
import Carousel22 from './partials/featured';
import OurBlog from './partials/blog';

const Home = () => {
    return (
        <div>
            <Hero />
            <Cards />
            <Carousel22 />
            <OurBlog />
            
        </div>
    );
};

export default Home;