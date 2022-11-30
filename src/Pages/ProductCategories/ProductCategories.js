import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductsDetails from '../ProductsDetails/ProductsDetails';
import './ProductCategories.css'

const ProductCategories = () => {
    const products = useLoaderData();
    const [cardInfo, setCardInfo] = useState(null)
    // console.log(products)
    return (
        <section>
            <h2 className='text-3xl font-bold mx-5 my-5'>Our Products</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-100 shadow-xl mt-6">
                {
                    products.map(product => <ProductsDetails
                    key={product._id}
                    product={product}
                    setCardInfo={setCardInfo}
                    ></ProductsDetails>)
                }
                
             
            </div>
            {
             cardInfo &&   
            <BookingModal
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
            ></BookingModal>
            }    
        </section>
    );
};

export default ProductCategories;