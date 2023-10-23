import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import AddProduct from "./AddProduct/AddProduct";
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";
import Cart from "./Cart/Cart";
import UpdateProduct from "./UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: ()=> fetch('brand.json')
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