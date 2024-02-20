import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

import "./index.css"
//páginas
import Home from "./routes/Home.jsx"
import NewProduct from "./routes/NewProduct.jsx"
import Login from "./routes/Login.jsx"
import Order from "./routes/Order.jsx"
import Product from "./routes/Product.jsx"
import EditProduct from "./routes/EditProduct.jsx"
import Register from "./routes/Register.jsx"

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/new",
                element: <NewProduct />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
            {
                path: "/product/edit/:id",
                element: <EditProduct />,
            },
            {
                path: "/order",
                element: <Order />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
