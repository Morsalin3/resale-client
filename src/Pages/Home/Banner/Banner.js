import React from 'react';
import banner from '../../../assets/banner.png'

const Banner = () => {
    return (
        <div className='hero'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
            <img src={banner} className='rounded-lg lg:w-1/2 shadow-2xl'  alt="" />
            <div className='mx-10'>
                <h1 className='text-5xl font-extrabold tracking-normal leading-tight'>
                SELL YOUR <br/>
                SMARTPHONE <br/>
                FOR QUICK CASH
                </h1>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;