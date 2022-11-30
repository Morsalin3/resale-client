import React from 'react';

const ProductsDetails = ({ product }) => {
    const { date, img, location, phone,
        original_price, product_condition,
        resale_price, seller_name, product_name,
        status, use_years, description

    } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Phones" className='w-1/2' /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                 <p className='text-base font-medium'>{description}</p>
                <div className='flex justify-between items-center'>
                   
                    <div>
                    <p>Name: {seller_name}</p>
                    <p>Conditon: {product_condition}</p>
                    <p>Use of Years: {use_years}</p>
                    <p><span className='badge badge-secondary'>Status: {status}</span></p>
                    <p>Post: {date}</p>
                    </div>
                    <div>
                    <p>Location: {location}</p>
                    <p>Original Price: {original_price}</p>
                    <p>Resel Price: {resale_price}</p>
                    </div>
                </div>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;