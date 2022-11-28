import DashboardLayout from "../../Layout/DashboardLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoriesProduct from "../../Pages/CategoriesProduct/CategoriesProduct";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import DashboardHome from "../../Pages/Dashboard/DashboardHome/DashboardHome";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedProducts from "../../Pages/Dashboard/ReportedProducts/ReportedProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound.js/NotFound";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/category/:name',
        loader: ({params}) => fetch(`https://beche-daw-server.vercel.app/products?category=${params.name}`),
        element: <PrivateRoute><CategoriesProduct></CategoriesProduct></PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
          {
            path: '/dashboard',
            element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
          },
          {
            path: '/dashboard/my-orders',
            element: <MyOrders></MyOrders>
          },
          {
            path: '/dashboard/my-products',
            element: <MyProducts></MyProducts>
          },
          {
            path: '/dashboard/all-seller',
            element: <AllSeller></AllSeller>
          },
          {
            path: '/dashboard/All-buyer',
            element: <AllBuyer></AllBuyer>
          },
          {
            path: '/dashboard/reported-products',
            element: <ReportedProducts></ReportedProducts>
          },
          {
            path: '/dashboard/add-products',
            element: <AddProduct></AddProduct>
          },
        ]
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
  
])
export default router;