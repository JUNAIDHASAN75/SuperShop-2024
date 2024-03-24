import { NavLink, Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import useCart from "../Hook/useCart";
import IMG from '../assets/images/logo2.png'
import DashBoardFooter from "../Pages/Dashboard/Users/DashBoardFooter";


const Dashboard = () => {
  
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  relative">
        <label htmlFor="my-drawer-2" className="text-4xl text-[#3fd43f] drawer-button lg:hidden"><MdMenu></MdMenu></label>
        {/* Page content here */}
        <div className="px-2 md:px-12">

          <Outlet></Outlet>
        </div>
        <div className="absolute w-full bottom-0  mt-5">
        <DashBoardFooter></DashBoardFooter>

        </div>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu  w-80 min-h-full bg-gradient-to-t  from-orange-50 to-slate-900 text-lg font-thin font-serif  text-white space-y-4 ">
          <img className="w-3/4" src={IMG} alt="" />
          {/* Sidebar content here */}
          <li><NavLink className="" to="/dashboard/userprofile">User Profile</NavLink></li>
          <li><NavLink className="" to="/dashboard/allusers">All Users</NavLink></li>
          <li><NavLink className="" to="/dashboard/admin/menu/add">Add Menu Item</NavLink></li>
          <li><NavLink className="" to="/dashboard/admin/menu">Menu Item</NavLink></li>
          <li><NavLink className="" to="/dashboard/mycart">My Cart <span className="text-white"> {cart?.length}+</span> </NavLink></li>
          <li><NavLink to="/payment">Payment History</NavLink></li>
            <hr  className="border border-white"/>
          <li><NavLink to='/'>Home</NavLink></li>
        </ul>

      </div>

    </div>
  );
};

export default Dashboard;