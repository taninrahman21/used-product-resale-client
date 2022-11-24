import CategoriesProduct from "../../Pages/CategoriesProduct/CategoriesProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

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
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/category/:name',
        loader: ({params}) => fetch(`http://localhost:5000/products?category=${params.name}`),
        element: <CategoriesProduct></CategoriesProduct>
      }
    ]
  }
])
export default router;