import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Authcontext } from '../../contexts/AuthProvider';

const BookingModal = ({cardInfo, setCardInfo}) => {
    const {user} = useContext(Authcontext);
    const {date, img, location, phone,
        original_price, product_condition,
        resale_price, seller_name, product_name,
        status, use_years, description} = cardInfo;

    const handleBooking = (event) =>{
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.product.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        // console.log(name,email,product,price,phone,location,date)

        const booking = {
            date,name,email,product,price,phone,location,img
        }

        fetch ('https://resale-server-one.vercel.app/bookings',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
            setCardInfo(null);
            toast.success('booking confirmed')
            }
        })

        
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name='date' type="text" disabled value={date} className="input w-full input-bordered" />
                        
                        <input name='name' type="text" defaultValue={user?.displayName} readOnly placeholder="Your Name" className="input w-full input-bordered" />
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