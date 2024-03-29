import  { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './citySlider.css'
const CitySlider = () => {
  const [Flag, setFlag] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState('5');

  const fetchdata = async () => {
    try {
      const res = await axios.get('https://confirmbuyers.onrender.com/user/Company/getAllCounteryWeWillDeal');
      setFlag(res.data.data);
      console.log(res.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleResize = () => {
    const windowWidth = window.innerWidth;

    // Adjust slidesPerView based on window width
    if (windowWidth < 400) {
      setSlidesPerView(1);
    } else if (windowWidth >= 400 && windowWidth < 768) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(5);
    }
  };

  useEffect(() => {
    fetchdata();
    handleResize(); // Set initial slidesPerView value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
<>
<div className="text-box p-5 ">
      <h1 className="text-left font-semibold text-3xl">
      Find Suppliers By Country
        <hr className="w-1/5 my-2  border-t-4 border-green-500" />
      </h1>
    </div>
{/* <h3 className='city mb-5'>Find Suppliers By Country</h3> */}
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={0}
      autoplay={{
        delay: 200,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper slides-flag"
    >
      {Flag?.map((item) => (
       <SwiperSlide key={item.id}>
       <div className='slides-flags'>
         <div className='img-slider-flag'>
           <Link to={item.para}>
             <img src={item.image} alt={`Product ${item.id}`} />
           </Link>
         </div>
       </div>
     </SwiperSlide>
      ))}
    </Swiper>

    </>

  );
};

export default CitySlider;
