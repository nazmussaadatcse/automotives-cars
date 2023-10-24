// import Swiper core and required modules
import Marquee from "react-fast-marquee";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Slider = ({ car }) => {

    // console.log(car[0].brand);

    return (
        <div className='my-8 '>
            
            <div className="flex justify-center items-center shadow-md text-center gap-2 p-2">
                <Marquee pauseOnHover={true} speed={100}>
                    {car.map((item, index) => (
                        <Link key={index} className="">
                            <img className='w-96 h-72 p-1' src={item?.photo} alt={item?.title} />
                            <h2 className='w-96 h-8 px-2 text-center font-semibold text-xl text-purple-900'>{item?.name}</h2>
                        </Link>
                    ))}
                </Marquee>
            </div>
            <h2 className='uppercase flex justify-center p-4 my-4 font-bold text-2xl text-purple-900'>Latest Cars of {car[0]?.brand}</h2>
        </div>
    );
};

export default Slider;
