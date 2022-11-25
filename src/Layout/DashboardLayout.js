import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="w-[25%] border pl-16">
      <li>
       <Link className="text-xl font-semibold" to="/dashboard/myorders">My Orders</Link></li>
      </div>

      <div className="w-3/5 pl-12">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default DashboardLayout;
