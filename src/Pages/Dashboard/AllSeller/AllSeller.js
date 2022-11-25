import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
  const {data: allSellers = [], isLoading} = useQuery({
    queryKey: ['allSellers'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/users/allsellers');
      const data = await res.json();
      return data;
    }
  })
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className='my-10'>
      <div className="overflow-x-auto w-full">
       <table className="table w-full">
         {/* <!-- head --> */}
         <thead>
           <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Role</th>
             <th>Pay/Delete</th>
           </tr>
         </thead>
        {allSellers.map(seller =>  <tbody>
            <tr>
                 <td>
                  <div className="font-bold">{seller.name}</div>
                 </td>
                  <td>
                    <p>{seller.email}</p>
                  </td>
                  <td>{seller.role}</td>
                  <th>
                    <button className="btn btn-sm bg-green-500 mr-2 border-none">
                      Make Admin
                    </button>
                    <button className="btn btn-sm bg-red-500 border-none">
                      Delete
                    </button>
                  </th>
                </tr>
          </tbody>)}
       </table>
     </div>
    </div>
  );
};

export default AllSeller;