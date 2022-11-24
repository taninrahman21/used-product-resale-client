import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/banner.png';

const Banner = () => {
  return (
    <section className='h-[600px] flex items-center' 
    style={{
      background: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
     }}>
    <div className='bg-white w-3/5 lg:w-1/3 ml-14 lg:ml-32 px-14 py-10'>
          <h1 className='text-3xl uppercase md:text-4xl lg:text-6xl font-extrabold'>Sell/Buy Your Used Phones Here</h1>
          <p className='mt-5'>Here you can sell or buy phones used phones.Since 2015 we are providing these service.</p>
         <button className='border px-10 py-3 mt-5 bg-[#fd8f5f]'><Link to='/' className='text-white'>Buy Now</Link></button>
     </div>
  </section>
  );
};

export default Banner;