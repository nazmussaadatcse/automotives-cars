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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        // errorElement:<ErrorPage></ErrorPage>,
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
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/product/:brand',
                element: <Products></Products>,
                loader:()=> fetch('http://localhost:5000/car')
            },
            {
                path: '/car/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader:()=> fetch(`http://localhost:5000/car`)
            },
            {
                path: '/details/:id',
                element: <ProductDetail></ProductDetail>,
                loader:()=> fetch(`http://localhost:5000/car`)
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
                loader:()=> fetch(`http://localhost:5000/cart`)
            },

        ]
    }
])
export default router;