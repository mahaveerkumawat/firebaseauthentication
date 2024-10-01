import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBNYr_pmPvZEHlJQB6tDQDmOYGGgB1x_No",
    authDomain: "septuser-6a3f6.firebaseapp.com",
    projectId: "septuser-6a3f6",
    storageBucket: "septuser-6a3f6.appspot.com",
    messagingSenderId: "1011125400593",
    appId: "1:1011125400593:web:fa2b60fc479700d902edb0",
    measurementId: "G-FWKSH68D88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                },

            ]
        },
    ]);

    return (
        <RouterProvider router={router} />

    );
}

export default App;
