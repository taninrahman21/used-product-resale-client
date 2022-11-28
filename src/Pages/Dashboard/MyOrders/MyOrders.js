import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext/UserContext";
import Loading from "../../Shared/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: myorders = [], isLoading } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://used-product-resale-server-smoky.vercel.app/myorders?email=${user?.email}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      );
      const data = await res.json();
      return data;
    }
  });

  // Handle Delete Booked Product
  const handleDelete = id => {
  }
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
   <div>
    {
      myorders?.message ? <p className="text-center text-3xl">{myorders.message}</p> : 
      <div className="pr-8">
      {
       myorders.length === 0 ? <p>You didn't book any products.</p>
       :     <div className="overflow-x-auto w-full">
       <table className="table w-full">
         {/* <!-- head --> */}
         <thead>
           <tr>
             <th>Product</th>
             <th>Price</th>
             <th>Location</th>
             <th>Pay/Delete</th>
           </tr>
         </thead>
        {myorders.map(order =>  <tbody key={order._id}>
            <tr>
               <td>
                  <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={order.productImg} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.productName}</div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{order.productPrice}</p>
                  </td>
                  <td>{order.userLocation}</td>
                  <th>
                    <button className="btn btn-sm bg-green-500 mr-2 border-none">
                      Pay
                    </button>
                    <button onClick={handleDelete} className="btn btn-sm bg-red-500 border-none">
                      Delete
                    </button>
                  </th>
                </tr>
          </tbody>)}
       </table>
     </div>
      }
    </div>
    }
   </div>
  );
};

export default MyOrders;
