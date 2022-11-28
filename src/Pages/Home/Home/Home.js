import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import BookingModal from '../../CategoriesProduct/BookingModal';
import Loading from '../../Shared/Loading/Loading';
import Achivement from '../Achivement/Achivement';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
  const {user} = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const {data: advertisedProducts = [], isLoading}= useQuery({
    queryKey: ['advertisedProducts'],
    queryFn: async() => {
      const res = await fetch('https://used-product-resale-server-smoky.vercel.app/advertisedProducts');
      const data = await res.json();
      return data;
    }
  })

  function handleModal(p){
    if(!user){
      return toast('You have login or register to book a product.');
    }
    setProduct(p);
  }
  
  if(isLoading){
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      {
        advertisedProducts.length > 0 &&  <AdvertiseItems
         advertisedProducts={advertisedProducts}
         handleModal={handleModal}
         ></AdvertiseItems>
      }
      <Categories></Categories>
     { product && <BookingModal product={product}></BookingModal>}
     <Achivement></Achivement>
    </div>
  );
};

export default Home;