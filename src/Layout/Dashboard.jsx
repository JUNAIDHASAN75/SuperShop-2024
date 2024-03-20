import {  NavLink, Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import useCart from "../Hook/useCart";
import IMG from '../assets/images/logo2.png'


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content px-2 pt-2 ">
    <label htmlFor="my-drawer-2" className="text-4xl text-[#3fd43f] drawer-button lg:hidden"><MdMenu></MdMenu></label>
    {/* Page content here */}
    <div className="md:mt-12 px-12">

    <Outlet></Outlet>
    </div>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-green-500 text-lg font-mono text-white space-y-4 ">
    <img className="w-3/4" src={IMG} alt="" />
      {/* Sidebar content here */}
      <li><NavLink className="" to="/">User Home</NavLink></li>
      <li><NavLink className="" to="/dashboard/mycart">My Cart <span className="text-orange-400"> {cart?.length}+</span> </NavLink></li>
      <li><NavLink to="/payment">Payment History</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;