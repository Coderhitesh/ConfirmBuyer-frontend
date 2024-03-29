import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';

const Fortune = () => {
    const [slidesPerView, setSlidesPerView] = useState('5');
    const data = [
        { id: 1, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7BDrsNOXpFV9zT4lwD_MUiz0ObhtnSAK5A&usqp=CAU', productName: 'Delhi' },
        { id: 2, imgSrc: 'https://abhilashaexports.com/img/logo.png', productName: 'Agra' },
        { id: 3, imgSrc: 'https://www.vengbopharmaceuticals.in/ast/Vengbo-removebg-preview.png', productName: 'Kollkata' },
        { id: 4, imgSrc: 'https://img.freepik.com/premium-vector/l-g-creative-letter-circle-shape-monogram-logo_649646-328.jpg?size=626&ext=jpg&uid=R106200803&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Jaipur' },
        { id: 5, imgSrc: 'https://img.freepik.com/premium-vector/phone-logo-vector-design-template_724865-530.jpg?size=626&ext=jpg&uid=R106200803&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Bihar' },
        { id: 6, imgSrc: 'https://img.freepik.com/free-vector/energy-logo-design_23-2150044064.jpg?size=626&ext=jpg&uid=R106200803&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Chennai' },
        { id: 7, imgSrc: 'https://img.freepik.com/free-psd/logo-mockup-panel-wall_511564-1493.jpg?size=626&ext=jpg&uid=R106200803&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Punjab' },
        { id: 8, imgSrc: 'https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149699842.jpg?size=626&ext=jpg&uid=R106200803&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Haryana' },
        { id: 9, imgSrc: 'https://img.freepik.com/premium-vector/hand-drawn-shop-local-logo-design_23-2149581475.jpg?size=626&ext=jpg&uid=R106200803&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Uttar Pardesh' },
        { id: 10, imgSrc: 'https://img.freepik.com/free-vector/world-pulses-day-banner-design_1308-125818.jpg?size=626&ext=jpg&uid=R106200803&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Bhopal' },
        { id: 11, imgSrc: 'https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?size=626&ext=jpg&uid=R106200803&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Tamil Nadu' },
        { id: 12, imgSrc: 'https://img.freepik.com/free-vector/shining-diamond-with-text-illustration_1284-44462.jpg?size=626&ext=jpg&uid=R106200803&ga=GA1.1.745072183.1701081957&semt=aishttps://www.tourmyindia.com/states/kerala/image/kerala-tourism.webp', productName: 'Kerala ' },
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
        <div className="text-box p-5 ">
        <h1 className="text-left  font-semibold text-3xl">
        Prestigious Brands we deal in
          <hr className="w-1/5 my-2  border-t-4 border-green-500" />
        </h1>
      </div>
    {/* <h3>Prestigious Brands we deal in </h3> */}
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
          <div className='container-trending-cards no-background'>
            <div className="card-content ">
              <div className='card-content-img '>
                <img src={item.imgSrc} className='' alt={`Product ${item.id}`} />
              </div>
             
            
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default Fortune
