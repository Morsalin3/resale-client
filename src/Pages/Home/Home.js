import React from 'react';
import Banner from './Banner/Banner';
import WhyPeopleTrust from './WhyPeopleTrust/WhyPeopleTrust';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <WhyPeopleTrust></WhyPeopleTrust>
        </div>
    );
};

export default Home;