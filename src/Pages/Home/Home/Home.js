import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import BookingModal from '../../CategoriesProduct/BookingModal';
import Loading from '../../Shared/Loading/Loading';
import Achivement from '../Achivement/Achivement';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
  const [product, setProduct] = useState(null);
  const {data: advertisedProducts = [], isLoading}= useQuery({
    queryKey: ['advertisedProducts'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/advertisedProducts');
      const data = await res.json();
      return data;
    }
  })
  
  if(isLoading){
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      {
        advertisedProducts.length > 0 &&  <AdvertiseItems
         advertisedProducts={advertisedProducts}
         setProduct={setProduct}
         ></AdvertiseItems>
      }
      <Categories></Categories>
     { product && <BookingModal product={product}></BookingModal>}
     <Achivement></Achivement>
    </div>
  );
};

export default Home;