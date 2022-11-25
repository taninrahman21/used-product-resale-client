import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className=''>
      <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content pl-10">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side -z-10 border">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 lg:pl-20 w-80 lg:w-96 bg-base-100 text-base-content">
      <li><Link className='text-xl font-semibold' to='/myorders'>My Orders</Link></li>
    </ul>
  
  </div>
</div>
    </div>
  );
};

export default DashboardLayout;