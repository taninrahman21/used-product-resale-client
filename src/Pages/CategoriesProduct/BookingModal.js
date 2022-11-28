import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const BookingModal = ({product, setProduct}) => {
  const {name, description } = product;
  const {user} = useContext(AuthContext);
  
  const handleBooking = event => {
    event.preventDefault();
    
    const form = event.target;
    const productName = name;
    const productPrice = description.resalePrice;
    const userEmail = form.email.value;
    const userName = form.name.value;
    const userPhone = form.phone.value;
    const userLocation = form.location.value;

    const bookedProduct = {
      productName,
      productId: product._id,
      productImg: product.img,
      userName,
      userEmail, 
      userLocation,
      productPrice,
      userPhone
    };
    fetch('https://beche-daw-server.vercel.app/bookedproducts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookedProduct)
    })
    .then(res => res.json())
    .then(data => {
      if(data.message){
        toast.error(data.message);
        setProduct(null);
      }
      if(data.acknowledged){
        form.reset();
        toast.success('Successfully Booked');        
        setProduct(null);
      }
    })
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

          <select  name="location"  className="input input-bordered w-full mb-5">
            <option defaultValue>Dhaka</option>
            <option>Gazipur</option>
            <option>Bogura</option>
            <option>Chittagong</option>
            <option>Barishal</option>
            <option>Dinajpur</option>
            <option>Thakurgaon</option>
            <option>Kurigram</option>
            <option>Rangpur</option>
          </select>
          <input type="submit" className="border px-8 py-2 mt-5 bg-[#fd8f5f] text-white w-full" value="Submit" />
         </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookingModal;