import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const ReportedProducts = () => {
  const {data: reportedProducts = [], isLoading, refetch} = useQuery({
    queryKey: ['reportedProducts'],
    queryFn: async() => {
      const res = await fetch('https://beche-daw-server.vercel.app/reportedProducts');
      const data = await res.json();
      return data;
    }
  })
  const handleDelete = id => {
    const confirmToDelete = window.confirm('Are you sure to delete?');
    if(confirmToDelete){
    fetch(`https://beche-daw-server.vercel.app/products/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
        refetch();
        toast.success('Product deleted successfully.');
      }
    })}
  }

  if(isLoading){
    return <Loading></Loading>;
  }
  return (
    <div className='w-full'>
    {
      reportedProducts.length === 0 ? <p className='text-3xl text-[#fd8f5f] my-10'>Don't have any reported products.</p>
      :  <div className="overflow-x-auto w-[140%] lg:w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Seller</th>
            <th>Advertise/Delete</th>
          </tr>
        </thead>
       {reportedProducts.map(product =>  <tbody key={product._id}>
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
                 <td>{product.sellerEmail ? product.sellerEmail : "Unrecognized"}</td>
                 <th>
                   <button disabled={product?.isAdvertised} className="btn border-none btn-sm bg-green-500 mr-2 bproduct-none">
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

export default ReportedProducts;