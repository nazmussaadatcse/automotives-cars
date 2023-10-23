import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

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
            <h2>cars: {cars.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCars.map(car => (
                    <div key={car._id} className="bg-slate-100 rounded-lg">
                        <div className="p-4 flex flex-col bg-slate-100 justify-center items-center">
                            <img className="h-56 w-96 rounded-md" src={car.photo} alt="" />

                            <div className="py-4 p-2 text-left w-full">
                                <p className="text-xl font-semibold">{car.name}</p>
                                <p className="max-w-sm">
                                    {car.short_description.length > 20
                                        ? car.short_description.slice(0, 20) + ".."
                                        : car.short_description}
                                </p>
                            </div>
                            <div className="py-4 p-2 text-left w-full">
                                <p>brand: {car.brand}</p>
                                <p>type: {car.type}</p>
                                <p>ratings: {car.ratings}</p>
                                <p className="text-purple-900 font-semibold">Price: $ {car.price}</p>
                            </div>
                            <div className="py-4 text-left w-full">
                                <Link to={`/details/${car._id}`} className="btn btn-outline text-white btn-sm rounded-md bg-purple-900">
                                    Details
                                </Link>
                                <Link to={`/update/${car._id}`} className="btn btn-outline text-white btn-sm rounded-md bg-purple-900">
                                    Update
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
