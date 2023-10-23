// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ car }) => {

    // console.log(car[0].brand);

  return (
    <div className='my-8'>
      <h2 className='uppercase flex justify-center p-4 my-4 font-bold text-2xl text-purple-900'>Latest Cars of {car[0].brand}</h2>
      <div className="swiper-container w-full h-full shadow-lg">
      <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {car.map((carItem) => (
                    <SwiperSlide key={carItem._id}>
                        <img className='w-full h-72 mb-8' src={carItem.photo} alt={carItem.name} />
                        {/* Add more car details here */}
                    </SwiperSlide>
                ))}
            </Swiper>
      </div>
    </div>
  );
};

export default Slider;
