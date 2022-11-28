import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
  const {user} = useContext(AuthContext);
  const {data: myProducts = [], isLoading, refetch} = useQuery({
    queryKey: ['myProducts', user?.email],
    queryFn: async() => {
      const res = await fetch(`https://used-product-resale-server-smoky.vercel.app/myproducts?email=${user?.email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
      const data = await res.json();
      return data;
    }
  })

  // Handle Advertised Product
  const handleAdvertise = id => {
    fetch(`https://used-product-resale-server-smoky.vercel.app/products/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('Product advertised successfully.');
        refetch();
      }
    })
  }

  // Handle Delete Product
  const handleDelete = id => {
    const confirmToDelete = window.confirm('Are you sure to delete?');
    if(confirmToDelete){
    fetch(`https://used-product-resale-server-smoky.vercel.app/products/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        toast.success('Product deleted successfully.');
        refetch();
      }
    })}
  }
  if(isLoading){
    return <Loading></Loading>;
  }

  return (
    <div className='w-full'>
      {
        myProducts.length === 0 ? <p className='text-3xl text-[#fd8f5f] my-10'>You didn't add any products.</p>
        :  <div className="overflow-x-auto lg:w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Available/Sold</th>
              <th>Advertise/Delete</th>
            </tr>
          </thead>
         {myProducts.map(product =>  <tbody key={product._id}>
             <tr>
                <td>
                   <div className="flex items-center space-x-3">
                       <div className="avatar">
                         <div className="mask mask-squircle w-12 h-12">
                           <img src={product.img} alt="" />
                         </div>
                       </div>
                       <div>
                         <div className="font-bold">{product.name}</div>
                         <div className="text-sm opacity-50"></div>
                       </div>
                     </div>
                   </td>
                   <td>
                     <p>{product.description.resalePrice}</p>
                   </td>
                   <td><button className="btn border-none btn-sm bg-green-500 mr-2 bproduct-none">
                       Available
                     </button></td>
                   <th>
                     <button disabled={product?.isAdvertised} onClick={() => handleAdvertise(product._id)} className="btn border-none btn-sm bg-green-500 mr-2 bproduct-none">
                      {product?.isAdvertised ? "Advertised" : "Advertise"}
                     </button>
                     <button onClick={() => handleDelete(product._id)} className="btn border-none btn-sm bg-red-500 bproduct-none">
                       Delete
                     </button>
                   </th>
                 </tr>
           </tbody>)}
        </table>
      </div>
      }
  
    </div>
  );
};

export default MyProducts;