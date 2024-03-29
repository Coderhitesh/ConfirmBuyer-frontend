import  { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slidercomapny.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CompanySlider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const fetchSlider = async () => {
    try {
      const res = await axios.get('https://confirmbuyers.onrender.com/user/Company/getAllCompanySlider');
      setSliderData(res.data.data.reverse());
      // console.log(res.data.data);
    } catch (error) {
      console.error('Error fetching slider data:', error);
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
      setSlidesPerView(4);
    }
  };

  useEffect(() => {
    fetchSlider();
    handleResize(); // Set initial slidesPerView value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='company-slider-containers'>
      <div className='slider-containers'>

        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper swiperpadd"
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='slides-containers'>
                <div className='slides'>
                  <div className='img-slider-boxs'>
                    <Link target='blank' to={item.para}>
                      <img src={item.image} alt={`Product ${item.id}`} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompanySlider;
