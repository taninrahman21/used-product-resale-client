import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
  const { removeUser } = useContext(AuthContext);
  const {data: allSellers = [], isLoading, refetch} = useQuery({
    queryKey: ['allSellers'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/users/allsellers');
      const data = await res.json();
      return data;
    }
  })
  // Varify the user
  const handleVarify = id => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        refetch();
        toast.success('User varified successfully.');
      }
    })
  }
  const handleDelete = id => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        refetch();
        toast.success('User deleted successfully.');
      }
    })
  }
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
             <th>Varify/Delete</th>
           </tr>
         </thead>
        {allSellers.map(seller =>  <tbody key={seller._id}>
            <tr>
                 <td className='flex items-center'>
                  <div className="font-bold">{seller.name}</div>
                  {
                    seller.verified && 
                    <div className="font-bold"><FaCheckCircle className='text-green-700 ml-1 text-xl'/></div>
                  }
                 </td>
                  <td>
                    <p>{seller.email}</p>
                  </td>
                  <td>{seller.role}</td>
                  <th>
                    {
                      !seller?.verified && <button onClick={() => handleVarify(seller._id)} className="btn btn-sm bg-green-500 mr-2 border-none">
                      Varify
                    </button>
                    }
                    <button onClick={() => handleDelete(seller._id)} className="btn btn-sm bg-red-500 border-none">
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