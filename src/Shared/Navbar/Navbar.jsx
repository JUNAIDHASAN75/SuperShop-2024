
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png'
import useAuth from '../../Hook/useAuth';
import useCart from '../../Hook/useCart';
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
    const { user, LogOut } = useAuth();
    const [cart] = useCart();
    console.log(cart)
    const handleLogOut = () => {
        LogOut()
            .then(() => {
                console.log('logout');
                alert('logout successfully')
            })
    }
    const navItems = <>
        <Link to="/">Home</Link>
        <Link to="/secret">Secret File</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/dashboard/mycart">carts {cart?.length}+</Link>
    </>
    return (
        <div className="navbar bg-gradient-to-t text-2xl from-orange-600 to-orange-300 text-white w-full ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-50 text-white  shadow py-3 bg-gradient-to-t from-orange-600 to-orange-600  w-52">
                        {navItems}
                    </ul>
                </div>
                <img src={logo} className='w-2/4 ms-4' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal lg:flex gap-12 text-2xl  px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end me-12">
                {
                    user && user ? <div>
                        <details className="dropdown dropdown-end">
                            <summary className=""><FaUserAlt></FaUserAlt></summary>
                            <ul className=" shadow menu dropdown-content z-[1] bg-orange-600  w-52">
                                <li className=''><a>{user?.displayName}</a></li>
                            </ul>
                        </details>
                                <button onClick={handleLogOut}>LogOut</button>
                    </div> : <Link to="/login">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;