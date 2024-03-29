import  { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';

const Counterywedeal = () => {
    const [slidesPerView, setSlidesPerView] = useState('5');
    const data = [
        { id: 1, imgSrc: 'https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg', productName: 'Delhi' },
        { id: 2, imgSrc: 'https://img.freepik.com/free-photo/mesmerizing-shot-famous-historic-taj-mahal-agra-india_181624-16028.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Agra' },
        { id: 3, imgSrc: 'https://img.freepik.com/free-photo/view-jami-ul-alfar-mosque-colombo-sri-lanka-blue-sky-backgound_181624-38434.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=ais', productName: 'Kollkata' },
        { id: 4, imgSrc: 'https://img.freepik.com/free-photo/hawa-mahal-palace-jaipur-india_53876-31311.jpg?w=1060&t=st=1703392227~exp=1703392827~hmac=79f32c5265b3804b466eecdc1677693fb3c3526b8938f7ccd57cc872662c7352', productName: 'Jaipur' },
        { id: 5, imgSrc: 'https://img.freepik.com/free-photo/animesa-locana-place-unwinking-gazing-mahabodhi-temple-bodh-gaya-india_554837-494.jpg?w=996&t=st=1703392266~exp=1703392866~hmac=54b878dcbe79af0884e296309550c1584a7c988edcdce58a5c9aa8924284ae09', productName: 'Bihar' },
        { id: 6, imgSrc: 'https://img.freepik.com/free-photo/lumbini-nepal-birthplace-buddha-siddhartha-gautama_554837-476.jpg?w=996&t=st=1703392292~exp=1703392892~hmac=d7c433df10156b51b6b44e0cd2443a84a6676cbfa482e55c2c2178cdaa0980d0', productName: 'Chennai' },
        { id: 7, imgSrc: 'https://img.freepik.com/premium-photo/golden-temple_78361-4659.jpg?size=626&ext=jpg&ga=GA1.1.745072183.1701081957&semt=sph', productName: 'Punjab' },
        { id: 8, imgSrc: 'https://img.freepik.com/free-photo/lotus-mahal-hampi_181624-60764.jpg?w=996&t=st=1703392344~exp=1703392944~hmac=bc84e0ddff61d08958606a83f5c20fb7a9dc6e4f3989c28ae32f7fa947ad1ada', productName: 'Haryana' },
        { id: 9, imgSrc: 'https://images.news18.com/ibnkhabar/uploads/2022/10/Ram-Mandir-Ayodhya.jpg?im=Resize,width=450,aspect=fit,type=normal', productName: 'Uttar Pardesh' },
        { id: 10, imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0e/1f/ab/taj-lakefront-bhopal.jpg?w=700&h=-1&s=1', productName: 'Bhopal' },
        { id: 11, imgSrc: 'https://www.eyeonasia.gov.sg/images/india-selected/tamil-nadu-profile.jpg', productName: 'Tamil Nadu' },
        { id: 12, imgSrc: 'https://www.tourmyindia.com/states/kerala/image/kerala-tourism.webp', productName: 'Kerala ' },
      ];
    
  const handleResize = () => {
    const windowWidth = window.innerWidth;

    // Adjust slidesPerView based on window width
    if (windowWidth < 400) {
      setSlidesPerView(1);
    } else if (windowWidth >= 400 && windowWidth < 508) {
      setSlidesPerView(1);
    } 
    else if (windowWidth >= 509 && windowWidth < 768) {
      setSlidesPerView(2);
    } 
    else if (windowWidth >= 769 && windowWidth < 1088) {
      setSlidesPerView(3);
    } 
    else {
      setSlidesPerView(4);
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
      <h1 className="text-left sm:text-xl font-semibold text-3xl">
      Find Suppliers From Top City
        <hr className="w-1/5 my-2  border-t-4 border-green-500" />
      </h1>
    </div>
    {/* <h3>Find Suppliers From Top City</h3> */}
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
  )
}

export default Counterywedeal
