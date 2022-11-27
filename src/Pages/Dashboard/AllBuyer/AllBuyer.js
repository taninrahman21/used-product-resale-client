import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
  const [allBuyers, setAllBuyers] = useState([]);
  useEffect( () => {
    axios.get('http://localhost:5000/users/allbuyers')
    .then((response) => {
      setAllBuyers(response.data)});
  }, [])


  const handleDelete = id => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        const remainingBuyer = allBuyers.filter(buyer => buyer._id !== id);
        setAllBuyers(remainingBuyer);
        toast.success('User deleted successfully.');
      }
    })
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
           <th>MakeAdmin/Delete</th>
         </tr>
       </thead>
      {allBuyers.map(buyer =>  <tbody key={buyer._id}>
          <tr>
               <td>
                <div className="font-bold">{buyer.name}</div>
               </td>
                <td>
                  <p>{buyer.email}</p>
                </td>
                <td>{buyer.role}</td>
                <th>
                  <button className="btn btn-sm bg-green-500 mr-2 border-none">
                    Make Admin
                  </button>
                  <button onClick={() => handleDelete(buyer._id)} className="btn btn-sm bg-red-500 border-none">
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