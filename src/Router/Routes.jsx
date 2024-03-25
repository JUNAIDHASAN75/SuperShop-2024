import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Shared/Navbar/pages/Login/Login";
import SignUp from "../Shared/Navbar/pages/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret/Secret";
import Menu from "../Pages/Menu/Menu";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/Users/AllUsers";
import UserProfile from "../Pages/Dashboard/Users/UserProfile";
import AddMenuItem from "../Pages/Dashboard/AddMenu/AddMenuItem";
import AdminMenu from "../Pages/Dashboard/AdminMenu/AdminMenu";
import AdminMenuUpdate from "../Pages/Dashboard/AdminMenu/AdminMenuUpdate";
import { axiosS } from "../Hook/useAxiosSecure";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'secret',
          element:<PrivateRoute> <Secret></Secret> </PrivateRoute>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard/mycart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path:'/dashboard/allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'/dashboard/userprofile',
          element:<UserProfile></UserProfile>
        },
        {
          path:'/dashboard/admin/menu/add',
          element:<AdminRoute><AddMenuItem></AddMenuItem></AdminRoute>
        },
        {
          path:'/dashboard/admin/menu/list',
          element:<AdminRoute> <AdminMenu></AdminMenu></AdminRoute>
        },
        {
          path:'/dashboard/admin/menu/:id/update',
          element:<AdminRoute><AdminMenuUpdate></AdminMenuUpdate></AdminRoute>,
          loader:({params})=>fetch(`${axiosS}/menues/${params.id}`)

        }
      ]
    }
  ]);