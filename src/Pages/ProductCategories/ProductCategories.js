import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsDetails from '../ProductsDetails/ProductsDetails';
import './ProductCategories.css'

const ProductCategories = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <section>
            <h2 className='text-3xl font-bold mx-5 my-5'>Our Products{products.length}</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-100 shadow-xl mt-6">
                {
                    products.map(product => <ProductsDetails
                    key={product._id}
                    product={product}
                    ></ProductsDetails>)
                }
                
             
            </div>
        </section>
    );
};

export default ProductCategories;