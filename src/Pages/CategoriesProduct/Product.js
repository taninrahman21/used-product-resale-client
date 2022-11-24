import React from 'react';
import { useState } from 'react';

const Product = ({product}) => {
  const {name, img, description } = product;
  const [seeDetails, setSeeDetails] = useState(false);
  return (
    <div className='border p-6'>
      <img className='w-full h-[300px]' src={img} alt="" />
      <h2 className='text-xl font-semibold mt-3'>Device Name: {name}</h2>
      <p className='text-xl font-bold'>Price: {description.resalePrice}</p>
      <h1 className='text-xl font-semibold'>Seller: {description.seller}</h1>
      <p className='text-base font-semibold'>Posted on: {description.date}</p>
      <p className='text-base font-semibold'>Location: {description.location}</p>
      <p className='text-primary hover:underline' onClick={() => setSeeDetails(!seeDetails)}>See Details....</p>
      <div className={seeDetails ? '' : 'hidden'}>
        <p className='text-base font-semibold'>Original Price: {description.originalPrice}</p>
        <p className='text-base font-semibold'>Age of use: {description.yearsOfUse}</p>
      </div>
      <button className='border px-8 py-2 mt-5 bg-[#fd8f5f] text-white'>Book Now</button>
    </div>
  );
};

export default Product;