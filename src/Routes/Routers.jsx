import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home'
import OurMenu from "../Pages/Menu/Menu/OurMenu";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Login from "../Pages/User/Login";
import SingUp from "../Pages/User/SingUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Components/Secret";
import Dashbord from "../Layouts/Dashbord";
import MyCart from "../Pages/Dashbord/MyCart/MyCart";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";
import AddItem from "../Pages/Dashbord/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashbord/ManageItems/ManageItems";
import Payment from "../Pages/Dashbord/Payment/Payment";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/menu',
          element: <OurMenu></OurMenu>
        },
        {
          path:'/order/:category',
          element: <OrderPage></OrderPage>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        { 
          path:'/singup',
          element: <SingUp></SingUp>
        },
        {
          path:'/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:"/dashbord",
      element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute> ,
      children:[
        {
          path:'mycart',
          element: <MyCart></MyCart>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        // admin routes
        {
          path:'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'additem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageitems',
          element: <AdminRoute> <ManageItems></ManageItems> </AdminRoute>
        }
      ]
    },

  ]);