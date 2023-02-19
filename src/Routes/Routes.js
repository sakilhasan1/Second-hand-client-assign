import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders";
import Categories from "../Pages/Home/Categories/Categories";
import Phones from "../Pages/Home/Categories/Phones";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Shared/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/category/:brand',
                element: <Phones></Phones>,
                loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.brand}`)

            }
        ]
    },
    {
        path: '/dashboardLayout',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboardLayout/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboardLayout/myOrder',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboardLayout/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboardLayout/allSeller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboardLayout/allBuyer',
                element: <AllBuyer></AllBuyer>
            },

        ]
    }
])