import React from 'react';
// import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
// import { AuthContext } from '../../contexts/UserContext/UserContext';
// import Loading from '../Shared/Loading/Loading';

const Product = ({product, setProduct}) => {
  // const {user} = useContext(AuthContext);
  console.log(product);
  const {name, img, description, sellerEmail, sellerName } = product;
  const [seeDetails, setSeeDetails] = useState(false);

  const handleReport = id => {
    fetch(`http://localhost:5000/products/reported/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('Product reported successfully.');
      }
    })
  }


  return (
    <div className='border p-6'>
      <img className='w-full h-[300px]' src={img} alt="" />
      <h2 className='text-xl font-semibold mt-3'>Device Name: {name}</h2>
      <p className='text-xl font-bold'>Price: {description.resalePrice}</p>
      <div className='flex items-center'>
         <div className="font-bold text-xl">Seller: {sellerName}</div>
         {
            product?.userVerification && <div className="font-bold"><FaCheckCircle className='text-green-700 ml-1 text-xl'/></div>
          }
      </div>
      <p className='text-base font-semibold'>Posted on: {description.date}</p>
      <p className='text-base font-semibold'>Location: {description.location}</p>
      <p className='text-primary hover:underline mb-3' onClick={() => setSeeDetails(!seeDetails)}>See Details....</p>
      <div className={seeDetails ? '' : 'hidden'}>
        <p className='text-base font-semibold'>Original Price: {description.originalPrice}</p>
        <p className='text-base font-semibold'>Age of use: {description.yearsOfUse}</p>
        <p className='text-base font-semibold mb-5'>Seller Email: {sellerEmail}</p>
      </div>
      <div className=''>
      <label
         htmlFor="booking-modal"
         className='border px-8 py-2 mt-5 bg-[#fd8f5f] text-white'
         onClick={() => setProduct(product)}
         >Book Now</label>
         <p onClick={() => handleReport(product._id)} className='btn ml-24 border-none btn-sm px-4 py-1  bg-red-600 text-white'>
          Report</p>
      </div>
    </div>
  );
};

export default Product;