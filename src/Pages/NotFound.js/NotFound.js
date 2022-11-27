import React from 'react';
import img from '../../assets/404Image.webp';

const NotFound = () => {
  return (
    <div>
      <img  className='w-screen h-screen' src={img} alt="" />
    </div>
  );
};

export default NotFound;