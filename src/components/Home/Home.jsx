import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Home = () => {

    const loadedBrands = useLoaderData();
    const [brands, setBrands] = useState(loadedBrands);



    return (
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center p-4">
            {
                brands.map((brand, i) => <div key={i} className="">

                    <div className="w-full bg-base-100 shadow-xl image-full flex flex-col justify-center items-center">
                        <figure className="w-72 h-56 flex justify-center"><img className="" src={brand.brand_Img} alt="Shoes" /></figure>
                        <div className="flex flex-col justify-center items-center my-4">
                            <Link to={`/product/${brand.brand_name}`}>
                                <button className="card-title">{brand.brand_name}</button>
                            </Link>

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Home;