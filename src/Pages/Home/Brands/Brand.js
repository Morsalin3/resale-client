import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandOptions from './BrandOptions';

const Brand = () => {
const [categories, setCategoreis] = useState([])

  useEffect(()=>{
    axios.get('https://resale-server-one.vercel.app/category')
    .then(data=> setCategoreis(data.data))
  },[])

    return (
        <section className='mt-10'>
                <h2 className='text-5xl font-bold my-10'>Smartphone Brands For You</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>

                {
                    categories?.map((category) => <BrandOptions
                    key={category._id}
                    category={category}
                    ></BrandOptions>)
                }
            </div>
        </section>
    );
};

export default Brand;