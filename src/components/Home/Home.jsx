import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import Marquee from "react-fast-marquee";

const Home = () => {
    const [brands, setBrands] = useState([]);
    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch('brand.json')
            .then((response) => response.json())
            .then((data) => {
                setBrands(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    

    useEffect(() => {
        fetch('http://localhost:5000/car')
            .then((response) => response.json())
            .then((data) => {
                setCar(data); // Update the car state with the fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (

        <div>
            <HomeSlider></HomeSlider>
            <h2 className='uppercase flex justify-center p-4 my-4 font-bold text-xl text-purple-700'>
                Top Brands
            </h2>
            <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center p-4">
                {brands.map((brand, i) => (
                    <div key={i} className="">
                        <div className="w-full bg-base-100 shadow-xl image-full flex flex-col justify-center items-center">
                            <figure className="w-72 h-56 flex justify-center">
                                <img className="" src={brand.brand_Img} alt="Shoes" />
                            </figure>
                            <div className="flex flex-col text-black justify-center items-center my-4">
                                <Link to={`/product/${brand.brand_name}`}>
                                    <button className="card-title uppercase">{brand.brand_name}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className='uppercase flex justify-center p-4 my-4 font-bold text-xl text-purple-700'>
                Latest Cars of Automotives Brand
            </h2>
            <div className="flex justify-center items-center text-center gap- p-2">
                <Marquee pauseOnHover={true} speed={100}>
                    {car.map((item, index) => (
                        <Link key={index} className="">
                            <img className='w-60 h-40 px-1' src={item.photo} alt={item.title} />
                            <h2 className='w-60 h-8 px-1 shadow-md bg-white font-semibold text-md text-purple-700'>{item.name}</h2>
                        </Link>
                    ))}
                </Marquee>
            </div>
            <div className="flex justify-center mt-8">
                <h2 className='uppercase flex justify-center p-4 my-4 font-bold text-xl text-purple-700'>
                    Frequently Asked Question

                </h2>

            </div>

            <div className="block md:flex gap-8 p-4 mb-12">
                {/* FAQ */}
                <div className="join my-4 md:w-1/2 join-vertical">

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What are the subscription benefits?
                        </div>
                        <div className="collapse-content">
                            <p>Subscribing to our newsletter gives you access to exclusive offers, product updates, and the latest news.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How often will I receive updates?
                        </div>
                        <div className="collapse-content">
                            <p>You will receive updates approximately once a week, depending on the availability of new content and promotions.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Is my email address secure?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we take your privacy seriously. Your email address is securely stored and will not be shared with third parties.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How can I unsubscribe?
                        </div>
                        <div className="collapse-content">
                            <p>You can unsubscribe at any time by clicking the `Unsubscribe` link in our newsletter or by contacting our support team.</p>
                        </div>
                    </div>
                </div>
                {/* First Column: Subscription Form */}
                <div className="m-4 p-6 rounded-lg flex-1">
                    <img className="mt" src="https://i.ibb.co/L5MYXqM/faq-removebg-preview.png" alt="" />
                </div>


            </div>
            <div className=" block md:flex gap-8 p-4 mb-12 flex-row-reverse">
                {/* Contact */}
                <div className=" md:w-1/2 my-4 md rounded-lg flex justify-center">
                <div className="">
                    <h2 className="text-xl font-semibold">Contact us</h2>
                    <p className="text-gray-500 mt-2">Feel free to contact us to suit your specific needs or add any additional information you like to include.




</p>

                    <form className="mt-4">
                        <div className="form-control mt-2">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input rounded-md input-bordered"
                                value={''}
                                required
                            />
                        </div>
                        <div className="form-control mt-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input rounded-md input-bordered"
                                value={''}
                                required
                            />
                        </div>
                        <div className="form-control mt-2">
                            <input
                                type="text"
                                placeholder="Your Massage"
                                className="input rounded-md input-bordered"
                                value={''}
                                required
                            />
                        </div>
                        <div className="form-control mt-4">
                            <button type="submit" className="btn bg-white btn-outline rounded-md">Send</button>
                        </div>
                    </form>
                </div>
            </div>
                {/* */}
                <div className="m-4 p-6 rounded-lg flex-1">
                    <img className="mt-12" src="https://i.ibb.co/m84FVRj/automotives-logo.png" alt="" />
                </div>

            </div>


        </div>


    );
};

export default Home;
