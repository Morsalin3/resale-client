import React from 'react';
import { Link } from 'react-router-dom';

const BrandOptions = ({category}) => {
    const {_id, brand, img, id} =category;

    return (
        <Link to ={`/productcategories/${id}`}
        className="card w-96 bg-base-100 shadow-[0px_0px_11px_1px_rgba(0,0,0,0.60)] ">
            <figure><img src={img} alt="Phones" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{brand}</h2>              
            </div>
        </Link>
    );
};

export default BrandOptions;