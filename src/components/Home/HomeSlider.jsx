import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';



const HomeSlider = () => {
    const [car, setCar] = useState([]);

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
        <div className='my-8 border shadow-md'>
            <div className="swiper-container w-full h-full ">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    autoplay={{ delay: 4000 }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {car.map((carItem) => (
                        <SwiperSlide key={carItem?._id} className="relative">
                            <img className="w-full h-96 p-2" src={carItem?.photo} alt={carItem?.name} />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-purple-900 rounded-md uppercase w-auto text-center p-2">
                                {carItem?.name}
                            </p>
                            {/* Add more car details here */}
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            

        </div>
    );
};

export default HomeSlider;
