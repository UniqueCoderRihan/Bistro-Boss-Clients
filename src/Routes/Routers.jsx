import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home'
import OurMenu from "../Pages/Menu/Menu/OurMenu";

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
        }
      ]
    },
  ]);