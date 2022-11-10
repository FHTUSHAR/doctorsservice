import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import AllService from "../../pages/AllService/AllService";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import Register from "../../pages/Register/Register";
import SelectedService from "../../pages/SelectedService/SelectedService";
import Update from "../../pages/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <AllService></AllService>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                },
                element: <SelectedService></SelectedService>
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreview/',
                element: <PrivateRoute><MyReview ></MyReview></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/update/${params.id}`)
                }

            },
        ]
    },
    {
        path: '/*',
        element: <div className="text-center">
            <h2 className="text-3xl"> Path Not Found</h2>
            <h1 className="text-5xl font-bold text-red-500">404</h1>
        </div>
    }
]);