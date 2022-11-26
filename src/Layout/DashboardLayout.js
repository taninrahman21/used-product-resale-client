import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext/UserContext";
import useUserRole from "../hooks/useUserRole";
import { FaBan, FaProductHunt, FaShoppingCart, FaUsers } from "react-icons/fa";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isSeller, isBuyer, isAdmin] = useUserRole(user?.email);
  return (
    <div className="flex">
      <div className="w-[25%] border pl-6 lg:pl-16 bg-gray-200">
        <ul className="my-5 ">
           {
            isBuyer && <li><Link className="flex mb-2 items-center text-xl font-semibold" to="/dashboard/my-orders">
              <div><FaShoppingCart/></div>
              <div className="ml-3">My Orders</div></Link></li>
           }
           {
            isSeller && <li><Link className="flex mb-2 items-center text-xl font-semibold" to="/dashboard/my-products"><div><FaProductHunt/></div>
            <div className="ml-3">My Products</div></Link></li>
           }
           {
            isSeller && <li><Link className="flex mb-2 items-center text-xl font-semibold" to="/dashboard/add-products"><div><FaProductHunt/></div>
            <div className="ml-3">Add Product</div></Link></li>
           }
           {
            isAdmin && <li><Link className="flex mb-2 items-center text-xl font-semibold" to="/dashboard/all-seller"><div><FaUsers/></div>
            <div className="ml-3">All Seller</div></Link></li>
           }
           {
            isAdmin && <li><Link className="flex mb-2 items-center text-xl font-semibold" to="/dashboard/all-buyer"><div><FaUsers/></div>
            <div className="ml-3">All Buyer</div></Link></li>
           }
           {
            isAdmin && <li><Link className="flex items-center text-xl font-semibold" to="/dashboard/reported-products"><div><FaBan/></div>
            <div className="ml-3">Reported Products</div></Link></li>
           }
        </ul>
      </div>

      <div className="w-3/5 pl-12">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default DashboardLayout;
