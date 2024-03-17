
import {  Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo2.png'
const Navbar = () => {
    const navItems = <>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/">Item2</NavLink>
       <NavLink>Item3</NavLink>
    </>
    return (
        <div className="navbar bg-black bg-opacity-80 max-w-screen-xl fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow py-3 bg-black bg-opacity-40 w-52">
                            {navItems}
                    </ul>
                </div>
                <img src={logo} className='w-2/4 ms-4' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal lg:flex gap-12   px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end me-12">
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;