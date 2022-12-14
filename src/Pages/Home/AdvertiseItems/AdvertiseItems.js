import React from 'react';
import Product from '../../CategoriesProduct/Product';

const AdvertiseItems = ({advertisedProducts, handleModal}) => {

  return (
    <div className='w-5/6 mx-auto my-20'>
    <h2 className='border-l-4 text-2xl border-[#fd8f5f] uppercase pl-2 font-semibold '>Advertised Product</h2>
     <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 mt-10'>
        {
            advertisedProducts.map(product => <Product 
               key={product._id} 
               product={product}
               handleModal={handleModal}
               ></Product>)
          }
     </div>
    </div>
  );
};

export default AdvertiseItems;