import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";


const ProductDetail = () => {

    const loadedCars = useLoaderData();

    const id = useParams();
    const [cars, setCars] = useState(loadedCars);

    const filteredCars = cars.filter((car) => car._id === id.id);
    // console.log('id:', filteredCars);

    const addToCart = (id, email) => {
        console.log(id);
        const cartItem = cars.filter((car) => car._id === id);
        const cartDB = {
            email: email, // Add your email here
            cart: cartItem[0],
        };
        const addedCarts = cartDB;
        console.log(addedCarts);

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedCarts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })

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
                            <p className="py-6">{ }</p>
                            <p>brand: {car.brand}</p>
                            <p>type: {car.type}</p>
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

                            <p>ratings: {car.ratings}</p>
                            <p className="text-purple-900 font-semibold">Price: $ {car.price}</p>
                            <button onClick={() => addToCart(car._id, 'user@example.com')} className="btn w-1/3 rounded-md">
                                Add to Cart
                            </button>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sapiente quas a aut incidunt tenetur necessitatibus nulla, nobis cumque impedit sequi quidem odio corporis et inventore reiciendis neque totam dolores, voluptates ab, ea voluptatibus asperiores minus. Accusantium officiis est vel.</p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductDetail;