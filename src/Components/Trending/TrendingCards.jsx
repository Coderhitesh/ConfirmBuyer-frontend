import  { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './treding.css';
import 'swiper/css/pagination';
const TrendingCards = () => {
  const [slidesPerView, setSlidesPerView] = useState('5');

  const data = [
    { id: 1, imgSrc: 'https://img.freepik.com/free-psd/elegant-bedroom-hotel-room-with-classic-furniture_176382-189.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Bed Sheet' },
    { id: 2, imgSrc: 'https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Vegetables' },
    { id: 3, imgSrc: 'https://img.freepik.com/free-photo/many-different-berries-form-frame-white-background_485709-54.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Fruits' },
    { id: 4, imgSrc: 'https://img.freepik.com/free-photo/cashew-nuts_1339-242.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Cashew' },
    { id: 5, imgSrc: 'https://img.freepik.com/free-photo/bowl-with-almond-white-background-top-view_1150-37662.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Badam' },
    { id: 6, imgSrc: 'https://www.dakshadryfruits.com/cdn/shop/products/IMG_7689_1024x1024@2x.jpg?v=1630075571', productName: 'KishMish' },
    { id: 7, imgSrc: 'https://img.freepik.com/free-photo/sack-rice-with-rice-wooden-spoon-rice-plant_1150-34312.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Basmati Rice' },
    { id: 8, imgSrc: 'https://img.freepik.com/premium-photo/jasmine-rice-wooden-bowl-sackcloth-burlap-vintage-wooden-table-with-green-rice-field_101276-142.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Atta' },
    { id: 9, imgSrc: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Real Estate' },
    { id: 10, imgSrc: 'https://img.freepik.com/free-vector/set-isolated-realistic-images-with-pillows-different-color-pattern-ornaments-blank-background-vector-illustration_1284-75607.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Pillow Cover' },
    { id: 11, imgSrc: 'https://img.freepik.com/premium-photo/ghee-clarified-butter-close-up-wooden-bowl-silver-spoon-selective-focus_466689-23146.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Desi Ghee' },
    { id: 12, imgSrc: 'https://img.freepik.com/free-photo/various-legumes_53876-47070.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Seeds' },
  ];

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
    handleResize(); // Set initial slidesPerView value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='trending__cards-container'>
     <div className="text-box">
      <h1 className="text-left font-semibold text-3xl">
        Trending Categories
        <hr className="w-1/5 my-2  border-t-4 border-green-500" />
      </h1>
    </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
      
        modules={[ Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='container-trending-cards'>
              <div className="card-content">
                <div className='card-content-img'>
                  <img src={item.imgSrc} alt={`Product ${item.id}`} />
                </div>
                <h2>{item.productName}</h2>
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingCards;
