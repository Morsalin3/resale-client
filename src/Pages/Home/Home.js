import React from 'react';
import Banner from './Banner/Banner';
import Brand from './Brands/Brand';
import WhyPeopleTrust from './WhyPeopleTrust/WhyPeopleTrust';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Brand></Brand>
            <WhyPeopleTrust></WhyPeopleTrust>
        </div>
    );
};

export default Home;