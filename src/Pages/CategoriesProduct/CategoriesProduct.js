import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const CategoriesProduct = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className='w-5/6 mx-auto my-10'>
      <h2 className='text-center text-4xl font-bold mb-5'>Latest Available Phones</h2>
      <div className='grid grid-cols-3 gap-10'>
        {
          products.map(product => <Product key={product._id} product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default CategoriesProduct;