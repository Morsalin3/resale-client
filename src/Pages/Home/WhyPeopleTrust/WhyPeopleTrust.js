import React from 'react';
import money2 from '../../../assets/money2.jpg'

const WhyPeopleTrust = () => {
    return (
        <div className='hero mt-10'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src={money2} className='rounded-lg lg:w-1/2 shadow-2xl'  alt="" />
        <div className='mx-10'>
            <h1 className='text-5xl font-bold tracking-normal leading-tight mb-4'>
            Why People Trust Us
            </h1>
            <ul className='list-disc'>
                <li><p className='text-xl font-bold'>One-stop Solution</p>
                <p>Sell, buy, repair or accessorize your smartphone</p></li>
                <li><p className='text-xl font-bold'>Trained Professionals</p>
                <p>Trusted experts to help every step of the way</p></li>
                <li><p className='text-xl font-bold'>Amazing Prices</p>
                <p>Buying or selling, you’ll surely love our prices</p></li>
                <li><p className='text-xl font-bold'>Quick & Hassle-free</p>
                <p>Get mobile care in a click at your home or office</p></li>
                <li><p className='text-xl font-bold'>Premium Products</p>
                <p>Certified, high quality products guaranteed</p></li>
                <li><p className='text-xl font-bold'>Guaranteed Safety</p>
                <p>Guaranteed Safety Guaranteed Safety Be it buyback or repair, we are the safest hands for your device security</p></li>
            </ul>
            
        </div>
        </div>
        
    </div>
    );
};

export default WhyPeopleTrust;