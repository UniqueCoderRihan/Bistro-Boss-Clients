import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home'
import OurMenu from "../Pages/Menu/Menu/OurMenu";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Login from "../Pages/User/Login";
import SingUp from "../Pages/User/SingUp";

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
        }
      ]
    },
  ]);