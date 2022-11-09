import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllService from "../../pages/AllService/AllService";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import SelectedService from "../../pages/SelectedService/SelectedService";

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
        ]
    },
]);