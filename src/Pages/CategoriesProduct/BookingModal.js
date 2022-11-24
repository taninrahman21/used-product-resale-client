import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const BookingModal = ({product}) => {
  const {name, description } = product;
  const {user} = useContext(AuthContext);
  
  const handleBooking = event => {
    event.preventDefault();
    // const form = event.target;
    // const patientName = form.name.value;
    // const email = form.email.value;
    // const phone = form.phone.value;
    toast.success('Successfully Booked');
  }
  return (
    <div>
       <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Device Name: {name}</h3>
         <form onSubmit={handleBooking}>
         <input
            type="text"
            name="price"
            readOnly
            defaultValue={`Price: ${description.resalePrice}`}
            className="input input-bordered w-full mb-5 mt-10"
          />
          <input
            type="text"
            name="name"
            readOnly
            defaultValue={user?.displayName}
            className="input input-bordered w-full mb-5"
          />
          <input
            type="email"
            name="email"
            readOnly
            defaultValue={user?.email}
            className="input input-bordered w-full mb-5"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full mb-5"
            required/>
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            className="input input-bordered w-full mb-5"
            required/>
          <input type="submit" className="border px-8 py-2 mt-5 bg-[#fd8f5f] text-white w-full" value="Submit" />
         </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookingModal;