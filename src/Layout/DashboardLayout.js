import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext/UserContext";
import useUserRole from "../hooks/useUserRole";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isSeller, isBuyer, isAdmin] = useUserRole(user?.email);
  return (
    <div className="flex">
      <div className="w-[25%] border pl-16">
        <ul>
           {
            isBuyer && <li><Link className="text-xl font-semibold" to="/dashboard/my-orders">My Orders</Link></li>
           }
           {
            isSeller && <li><Link className="text-xl font-semibold" to="/dashboard/my-products">My Products</Link></li>
           }
           {
            isSeller && <li><Link className="text-xl font-semibold" to="/dashboard/add-products">Add Products</Link></li>
           }
           {
            isAdmin && <li><Link className="text-xl font-semibold" to="/dashboard/all-seller">All Seller</Link></li>
           }
           {
            isAdmin && <li><Link className="text-xl font-semibold" to="/dashboard/all-buyer">All Buyer</Link></li>
           }
           {
            isAdmin && <li><Link className="text-xl font-semibold" to="/dashboard/reported-products">Reported Products</Link></li>
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
