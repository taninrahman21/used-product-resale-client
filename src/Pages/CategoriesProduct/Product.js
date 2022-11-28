import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import Loading from '../Shared/Loading/Loading';

const Product = ({product, handleModal}) => {
  const {user} = useState(AuthContext);
  const {name, img, description, sellerEmail, sellerName } = product;
  const [seeDetails, setSeeDetails] = useState(false);
  

  const {data , isLoading } = useQuery({
    queryKey: ['productSeller', sellerEmail],
    queryFn: async() => {
      const res = await fetch(`http://localhost:5000/users/seller/${sellerEmail}`);
      const data = await res.json();
      return data;
    }
  })

  if(isLoading){
    return <Loading></Loading>;
  }

  const handleReport = id => {
    if(!user){
      return toast('You have login or register to book a product.');
    }
    fetch(`http://localhost:5000/products/reported/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
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
            data?.verified && <div className="font-bold"><FaCheckCircle className='text-green-700 ml-1 text-xl'/></div>
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
      <div className='flex justify-between items-center'>
        <div>
        <label
         htmlFor="booking-modal"
         className='border px-8 py-2 bg-[#fd8f5f] text-white'
         onClick={() => handleModal(product)}
         >Book Now</label>
        </div>
         <div>
         <button onClick={() => handleReport(product._id)} className='border px-8 py-2 bg-red-600 text-white'>
          Report</button>
         </div>
      </div>
    </div>
  );
};

export default Product;