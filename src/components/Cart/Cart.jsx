import { useContext, useState } from "react";
import { BiStar } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";


const Cart = () => {

    const loadedCart = useLoaderData();
    const [carts, setCart] = useState(loadedCart);
    // console.log(carts);
    const { user } = useContext(AuthContext);
    console.log(user);

    const filterEmail = user?.email; // The email to filter by
    const filteredCarts = carts.filter((cart) => cart.email === filterEmail);
    console.log(filteredCarts);

    const totalPrice = filteredCarts.reduce((total, cart) => total + parseInt(cart.cart.price, 10), 0);
    const formattedTotalPrice = totalPrice.toFixed(2);
    console.log(formattedTotalPrice);




    const handelDelete = (id, email) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cart/${id}?email=${email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // console.log('deleted successfully');
                            const remainingCart = carts.filter(cart => cart._id !== id);
                            setCart(remainingCart);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Deleted successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            // console.log(carts);
                        }
                    })
            }
        })


    }


    return (
        <div className="border border-gray-200">
            <h2 className="uppercase flex justify-center items-center p-2 m-2 mt-4 font-bold text-2xl gap-2 text-purple-700">MyCart</h2>
            <div className='uppercase flex-block md:flex lg:flex justify-center items-center p-4 m-2 mb-4 font-semibold text-2xl gap-2 bg-orange-500 text-gray-700 '>
                <img className="md:mb-0 mb-4" src={user?.photoURL} alt="" />
                <span className="border text-xl font-bold text-purple-700 shadow-md md:py-8 p-1">{user?.displayName}</span>
                <div className="text-sm md:mt-0 mt-4">
                    <p><span className="font-bold text-purple-700">Added Item :</span> {filteredCarts.length}</p>
                    <p><span className="font-bold text-purple-700">Total :</span> ${formattedTotalPrice}</p>
                    <p><span className="font-bold text-purple-700">Email :</span> <span className="lowercase">{user?.email}</span></p>
                    <p><span className="font-bold text-purple-700">Registered:</span> {user?.metadata.creationTime}</p>
                </div>
            </div>
            {
                filteredCarts.map((cart, index) => <div key={cart._id} className="block md:flex p-2 bg-slate-200 m-2 gap-2">
                    <p className="flex justify-center items-center text-center bg-slate-50 p-1 text-blue-800 text-xs font-bold">Item {index + 1}</p>
                    <div className="md:w-1/2 rounded-lg">
                        <p className="text-purple-700 gap-1"><span className="font-bold">Name:</span> {cart.cart?.name}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Brand:</span> {cart.cart?.brand}</p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Type:</span> {cart.cart?.type}</p>
                    </div>
                    <div className="md:w-1/2 rounded-lg">
                        <p className="text-purple-700 gap-1"><span className="font-bold">Price:</span> ${cart.cart?.price}</p>
                        <p className="text-purple-700 gap-1 flex items-center text-center"><span className="font-bold">Ratings: </span> {cart.cart?.ratings}/5 <BiStar></BiStar></p>
                        <p className="text-purple-700 gap-1"><span className="font-bold">Email:</span> {cart?.email}</p>
                    </div>
                    <button onClick={() => handelDelete(cart._id, cart.email)} className=" btn btn-xs mt-6 btn-outline rounded-md">
                        delete
                    </button>
                </div>)
            }
        </div>
    );
};

export default Cart;