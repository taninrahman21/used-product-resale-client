import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const AllBuyer = () => {
  const [allBuyers, setAllBuyers] = useState([]);
  useEffect( () => {
    axios.get('http://localhost:5000/users/allbuyers')
    .then((response) => {
      setAllBuyers(response.data)});
  }, [])

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
      {allBuyers.map(seller =>  <tbody key={seller._id}>
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

export default AllBuyer;