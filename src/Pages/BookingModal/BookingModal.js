import React, { useContext } from 'react';
import { Authcontext } from '../../contexts/AuthProvider';

const BookingModal = ({cardInfo}) => {
    const {user} = useContext(Authcontext);
    const {date, img, location, phone,
        original_price, product_condition,
        resale_price, seller_name, product_name,
        status, use_years, description} = cardInfo;

    const handleBooking = () =>{

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        
                        <input name='buyer_name' type="text" defaultValue={user?.displayName} readOnly placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full input-bordered" required />
                        <input name='product' type="text" defaultValue={product_name} readOnly placeholder="Item Name" className="input w-full input-bordered" required />
                        <input name='price' type="text" defaultValue={resale_price} readOnly placeholder="Price" className="input w-full input-bordered" required />

                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required />

                        <input name='location' type="text" placeholder="Location" className="input w-full input-bordered" required />
                        
                        <input type="submit" value='submit' className="btn btn-accent w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;