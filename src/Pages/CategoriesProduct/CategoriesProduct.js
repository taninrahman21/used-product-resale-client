import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Product from './Product';

const CategoriesProduct = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(null);

  function handleModal(p){
    setProduct(p);
  }


  return (
    <div className='w-5/6 mx-auto my-10'>
      <h2 className='text-center text-4xl font-bold mb-5'>Latest Available Phones</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
        {
          products.map(product => <Product handleModal={handleModal} key={product._id} product={product}></Product>)
        }
      </div>
      {
        product && <BookingModal setProduct={setProduct} product={product}></BookingModal>
      }
    </div>
  );
};

export default CategoriesProduct;