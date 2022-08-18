import React from 'react';
import { Outlet, Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h1 className=' text-3xl text-lime-600'>welcome to dashboard</h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>My Appoinment</Link></li>
          <li><Link to='dashboard/myreview'>Review</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;