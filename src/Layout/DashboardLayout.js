import React, { useState } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext/UserContext";
import useUserRole from "../hooks/useUserRole";
import { FaBan, FaBars, FaCartPlus, FaShoppingBag, FaShoppingCart, FaUsers } from "react-icons/fa";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isSeller, isBuyer, isAdmin] = useUserRole(user?.email);
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div className={`${open ? 'w-[290px]' : 'w-[55px] lg:w-[150px]'} border pl-3 lg:pl-16 bg-gray-200 duration-1000 ease-in`}>
        <div className="sticky top-5 pl-2">
          <div className=" mt-5">
            <FaBars className="text-2xl" onClick={() => setOpen(!open)}/>
          </div>
        <ul className="my-5">
           {
            isBuyer && <li><Link className="flex mb-3 items-center text-xl font-semibold" to="/dashboard/my-orders">
              <div><FaShoppingCart className='text-2xl'/></div>
              <div  className={`ml-3 ${open ? 'block' : 'hidden'}`}>My Orders</div></Link></li>
           }
           {
            isSeller && <li><Link className="flex mb-3 items-center text-xl font-semibold" to="/dashboard/my-products"><div>
              <FaShoppingBag className='text-2xl'/></div>
            <div className={`ml-3 ${open ? 'block' : 'hidden'}`}>My Products</div></Link></li>
           }
           {
            isSeller && <li><Link className="flex mb-3 items-center text-xl font-semibold" to="/dashboard/add-products"><div><FaCartPlus className='text-2xl'/></div>
            <div className={`ml-3 ${open ? 'block' : 'hidden'}`}>Add Product</div></Link></li>
           }
           {
            isAdmin && <li><Link className="flex mb-3 items-center text-xl font-semibold" to="/dashboard/all-seller"><div><FaUsers/></div>
            <div className={`ml-3 ${open ? 'block' : 'hidden'}`}>All Seller</div></Link></li>
           }
           {
            isAdmin && <li><Link className="flex mb-3 items-center text-xl font-semibold" to="/dashboard/all-buyer"><div><FaUsers className='text-2xl'/></div>
            <div className={`ml-3 ${open ? 'block' : 'hidden'}`}>All Buyer</div></Link></li>
           }
           {
            isAdmin && <li><Link className="flex items-center text-xl font-semibold" to="/dashboard/reported-products"><div><FaBan className='text-2xl'/></div>
            <div className={`ml-3 ${open ? 'block' : 'hidden'}`}>Reported Products</div></Link></li>
           }
        </ul>
        </div>
      </div>

      <div className="w-10/12 lg:w-3/5 mx-auto lg:mx-0 p-6 lg:pl-12 my-8">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default DashboardLayout;
