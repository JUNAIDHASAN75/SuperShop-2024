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
          element:<MyCart></MyCart>
        },
        {
          path:'/dashboard/allusers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'/dashboard/userprofile',
          element:<UserProfile></UserProfile>
        }
      ]
    }
  ]);