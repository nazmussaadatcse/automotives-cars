import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import AddProduct from "./AddProduct/AddProduct";
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('brand.json')
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
                path: '/details/:id',
                element: <ProductDetail></ProductDetail>,
                loader:()=> fetch(`http://localhost:5000/car`)
            },

        ]
    }
])
export default router;