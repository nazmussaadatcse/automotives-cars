import { useState } from "react";
import { BiStar } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";


const Cart = () => {

    const loadedCart = useLoaderData();
    const [carts, setCart] = useState(loadedCart);
    console.log(carts);

    const filterEmail = "user@example.com"; // The email to filter by
    const filteredCarts = carts.filter((cart) => cart.email === filterEmail);


    return (
        <div className="border border-gray-200 m-4">
            <h2 className="flex justify-center">Carts</h2>
            {
                filteredCarts.map((cart, index) => <div key={cart._id} className="block md:flex p-2 bg-slate-200 m-2 gap-2">
                    <p className="flex justify-center items-center text-center bg-slate-50 p-1">Item {index + 1}</p>
                    <div className="md:w-1/2 rounded-lg">
                        <p className="text-purple-900 gap-1"><span className="font-bold">Name:</span> {cart.cart?.name}</p>
                        <p className="text-purple-900 gap-1"><span className="font-bold">Brand:</span> {cart.cart?.brand}</p>
                        <p className="text-purple-900 gap-1"><span className="font-bold">Type:</span> {cart.cart?.type}</p>
                    </div>
                    <div className="md:w-1/2 rounded-lg">
                        <p className="text-purple-900 gap-1"><span className="font-bold">Price:</span> ${cart.cart?.price}</p>
                        <p className="text-purple-900 gap-1 flex items-center text-center"><span className="font-bold">Ratings: </span> {cart.cart?.ratings}/5 <BiStar></BiStar></p>
                        <p className="text-purple-900 gap-1"><span className="font-bold">Email:</span> {cart?.email}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cart;