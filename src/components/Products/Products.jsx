import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import HomeSlider from "../Home/HomeSlider";

const Products = () => {
    const loadedCars = useLoaderData();
    const brand = useParams();
    console.log(brand.brand);
    const [cars, setCars] = useState(loadedCars);
    console.log(cars);

    const filteredCars = cars.filter((car) => car.brand === brand.brand);
    console.log(filteredCars);

    return (
        <div>
            <div>
                <Slider
                    car={filteredCars}
                    key={filteredCars._id}
                ></Slider>
            </div>

            {filteredCars.length === 0 ? (
                <div className="flex text-center justify-center items-center h-72 w-full my-8 border uppercase border-red-300 text-red-500 font-bold mt-4">
                    No products found for {brand.brand}.
                    <div></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCars.map(car => (
                        <div key={car._id} className="bg-slate-100 rounded-lg">
                            <div className="p-4 flex flex-col bg-slate-100 justify-center items-center">
                                <img className="h-56 w-96 rounded-md" src={car?.photo} alt="" />

                                <div className="py-4 p-2 text-left w-full">
                                    <p className="text-xl font-semibold text-gray-900">{car?.name}</p>
                                    <p className="max-w-sm  text-gray-900">
                                        {car?.short_description.length > 120
                                            ? car?.short_description.slice(0, 120) + "..."
                                            : car?.short_description}
                                    </p>
                                </div>
                                <div className="py-4 text-gray-900 uppercase p-2 text-left w-full">
                                    <p><span className="font-semibold ">Brand:</span> {car?.brand}</p>
                                    <p><span className="font-semibold ">Type:</span> {car?.type}</p>
                                    <p><span className="font-semibold ">Ratings:</span> {car?.ratings}/5</p>
                                    <p className=" font-semibold">Price: $ {car?.price}</p>
                                </div>
                                <div className="py-4 text-left  w-full">
                                    <Link to={`/details/${car?._id}`} className="btn btn-outline text-white btn-sm rounded-md bg-purple-900">
                                        Details
                                    </Link>
                                    <Link to={`/car/${car?._id}`} className="btn btn-outline text-white btn-sm rounded-md bg-purple-900">
                                        Update
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}



        </div>
    );
};

export default Products;
