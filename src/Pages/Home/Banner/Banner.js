import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/banner.png';

const Banner = () => {
  return (
    <section className='flex items-center' 
    style={{
      background: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
     }}>
    <div className='bg-white w-4/5 md:w-2/3 ml-6 lg:w-1/3 my-8 lg:my-24 px-6 lg:px-10 lg:ml-32 py-8 lg:py-16'>
          <h1 className='text-2xl uppercase md:text-4xl lg:text-5xl font-extrabold'>Sell/Buy Your Used Phones Here</h1>
          <p className='mt-5'>Here you can sell or buy phones used phones.Since 2015 we are providing these service.</p>
         <button className='border px-10 py-3 mt-5 bg-[#fd8f5f]'><Link to='/' className='text-white'>Buy Now</Link></button>
     </div>
  </section>
  );
};

export default Banner;