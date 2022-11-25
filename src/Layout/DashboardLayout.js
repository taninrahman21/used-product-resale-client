import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext/UserContext";
import useSeller from "../hooks/useSeller";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  return (
    <div className="flex">
      <div className="w-[25%] border pl-16">
        <ul>
           {
            !isSeller && <li><Link className="text-xl font-semibold" to="/dashboard/myorders">My Orders</Link></li>
           }
           {
            isSeller && <li><Link className="text-xl font-semibold" to="/dashboard/myproducts">My Products</Link></li>
           }
           {
            isSeller && <li><Link className="text-xl font-semibold" to="/dashboard/addproducts">Add Products</Link></li>
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
