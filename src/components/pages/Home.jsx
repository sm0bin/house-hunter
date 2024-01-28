import React from 'react';
import Hero from '../shared/Hero';
import Houses from '../shared/Houses';

const Home = () => {
    return (
        <div className='mx-4 md:mx-5 lg:mx-auto max-w-7xl'>
            <Hero></Hero>
            <Houses></Houses>
        </div>
    );
};

export default Home;