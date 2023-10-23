import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";


const ProductDetail = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);

    const loadedCars = useLoaderData();
    const [carts, setCarts] = useState();

    const id = useParams();
    const [cars, setCars] = useState(loadedCars);

    const filteredCars = cars.filter((car) => car._id === id.id);
    // console.log('id:', filteredCars);


    useEffect(() => {
        // Load cart data 
        fetch('http://localhost:5000/cart')
            .then((res) => res.json())
            .then((data) => {
                setCarts(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    const addToCart = (id, email) => {

        const existingCartItem = carts.find(
            (cart) => cart.email === email && cart.cart._id === id
        );
        if (existingCartItem) {
            console.log('duplicate found');
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: 'Already in Cart',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            console.log('new product');
            console.log(id);
            const cartItem = cars.filter((car) => car._id === id);

            const cartDB = {
                email: email, // Add email here
                cart: cartItem[0],
            };

            const updatedCarts = [...carts, cartDB];

            // Update the state and avoid duplicate add to cart
            setCarts(updatedCarts);


            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartDB)
            })
                .then(res => res.json())
                .then(data => {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                })
        }




    }

    return (
        <div>
            <h2>Product Details</h2>
            {filteredCars.map((car) => (
                <div key={car._id} className="my-12 md:p-12 flex justify-center min-h-screen ">
                    <div className="border p-2 border-red-300 w-full md:flex justify-center md:p-12">
                        <div className="p-8 mx md:w-1/2 flex justify-center items-center md:max-w-sm shadow-2xl bg-base-100">
                            <img src={car.photo} alt="" />
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center items-left">
                            <h1 className="text-2xl font-bold">Product Details</h1>
                            <div className="uppercase font-semibold">
                                <p className="">Model: {car.name}</p>
                                <p>Brand: {car.brand}</p>
                                <p>Type: {car.type}</p>
                            </div>
                            <div>
                                <Rating
                                    count={5}
                                    size={24}
                                    value={car.ratings}
                                    edit={false}
                                    isHalf={true}
                                // onChange={(newRating) => setRating(newRating)}
                                // activeColor="#F6AD55" // Customize active star color
                                />

                            </div>

                            <p>Ratings: {car.ratings}</p>
                            <p className="text-purple-900 font-semibold">Price: $ {car.price}</p>
                            <button onClick={() => addToCart(car._id, user.email)} className=" btn btn-xs my-2 btn-outline w-24 rounded-md">
                                Add to Cart
                            </button>
                            <p className="font-semibold">Descriptions:</p>
                            <p>{car.short_description}</p>

                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductDetail;