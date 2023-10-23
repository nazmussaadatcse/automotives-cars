import { useState } from "react";
import { BiStar } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = () => {

    const loadedCart = useLoaderData();
    const [carts, setCart] = useState(loadedCart);
    // console.log(carts);

    const filterEmail = "user@example.com"; // The email to filter by
    const filteredCarts = carts.filter((cart) => cart.email === filterEmail);
    console.log(filteredCarts);


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
        <div className="border border-gray-200 m-4">
            <h2 className='uppercase flex justify-center p-4 my-4 font-bold text-2xl text-purple-900'>
                <span className="border shadow-md p-2">My Cart</span>
            </h2>
            {
                filteredCarts.map((cart, index) => <div key={cart._id} className="block md:flex p-2 bg-slate-200 m-2 gap-2">
                    <p className="flex justify-center items-center text-center bg-slate-50 p-1 text-blue-800 text-xs font-bold">Item {index + 1}</p>
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
                    <button onClick={() => handelDelete(cart._id, cart.email)} className=" btn btn-xs mt-6 btn-outline rounded-md">
                        delete
                    </button>
                </div>)
            }
        </div>
    );
};

export default Cart;