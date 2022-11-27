import React from 'react';
import Product from '../../CategoriesProduct/Product';

const AdvertiseItems = ({advertisedProducts, setProduct}) => {

  return (
    <div className='w-5/6 mx-auto my-20'>
    <h2 className='border-l-4 text-2xl border-[#fd8f5f] uppercase pl-2 font-semibold '>Advertised Product</h2>
     <div className='grid grid-cols-3 gap-14 mt-10'>
        {
            advertisedProducts.map(product => <Product 
               key={product._id} 
               product={product}
               setProduct={setProduct}
               ></Product>)
          }
     </div>
    </div>
  );
};

export default AdvertiseItems;