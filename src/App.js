import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashboardLayout from './Layout/DashboardLayout';
import Main from './Layout/Main';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import AllBuyer from './Pages/Dashboard/AllBuyer/AllBuyer';
import AllSeller from './Pages/Dashboard/AllSeller/AllSeller';
import CategoriesProduct from './Pages/CategoriesProduct/CategoriesProduct';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MyProducts from './Pages/MyProducts/MyProducts';
import ReportedProducts from './Pages/Dashboard/ReportedProducts/ReportedProducts';
import Signup from './Pages/Signup/Signup';

function App() {
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
        },
        {
          path: '/dashboard',
          element: <DashboardLayout></DashboardLayout>,
          children: [
            {
              path: '/dashboard',
              element: <MyOrders/>
            },
            {
              path: '/dashboard/my-orders',
              element: <MyOrders></MyOrders>
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
  
        }
      ]
    }
  ])
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
