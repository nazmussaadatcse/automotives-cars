import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import AddProduct from "./AddProduct/AddProduct";
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";
import Cart from "./Cart/Cart";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import Login from "./Login/Login";
import Register from "./Register/Register";
import PrivateRoute from "./PrivateRoute";
import Page404 from "./Page404";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Page404></Page404>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/addproduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>,
            },
            {
                path: '/product/:brand',
                element: <Products></Products>,
                loader:()=> fetch('https://automotives-cars-server.vercel.app/car')
            },
            {
                path: '/car/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
                loader:()=> fetch(`https://automotives-cars-server.vercel.app/car`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <ProductDetail></ProductDetail>
                </PrivateRoute>,
                loader:()=> fetch(`https://automotives-cars-server.vercel.app/car`)
            },
            {
                path: '/cart',
                element: <PrivateRoute>
                    <Cart></Cart>
                </PrivateRoute>,
                loader:()=> fetch(`https://automotives-cars-server.vercel.app/cart`)
            },

        ]
    }
])
export default router;