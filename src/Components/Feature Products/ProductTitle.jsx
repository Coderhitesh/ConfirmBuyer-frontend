import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style-card.css";
import PropTypes from 'prop-types';

import CallbackModel from "../CallBackModel/CallbackModel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SkeletonLoader from "./Skelton";

const FeatureProduct = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const handleShowCallbackModal = () => {
    setShowCallbackModal(true);
  };

  const handleCloseCallbackModal = () => {
    setShowCallbackModal(false);
  };
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
    window.addEventListener("resize", handleResize);
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after timeout
    }, 2000);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="text-right p-5 ">
    <div className="text-box">
      <h1 className="text-left font-semibold text-3xl">
        Feature Products
        <hr className="w-1/5 my-2  border-t-4 border-green-500" />
      </h1>
    </div>
  
    <div className="mb-4">
    <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="flex">
            {products.slice(0, 5).map((product) => (
              <SwiperSlide key={product._id} className="w-full">
                {isLoading ? (
                  <SkeletonLoader />
                ) : (
                  <div className=" glass p-4 transition-transform duration-300 transform hover:scale-105">
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.image}
                        alt={`Product ${product.id}`}
                        className="w-full h-55 object-cover mb-2"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <h2 className="text-xl mt-2">{product.title}</h2>
                    <button
                      onClick={handleShowCallbackModal}
                      className="back  hover:bg-green-400 hover:text-gray-900 text-white px-4 py-2 inline-flex gap-2 justify-center items-center mt-2"
                    >
                      <span>Send Query</span>
                      <ion-icon className="ml-2" name="send-outline"></ion-icon>
                    </button>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
    </div>
  
    <div className="mb-4">
    <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="flex">
            {products.slice(5, 10).map((product) => (
              <SwiperSlide key={product._id} className="w-full">
                {isLoading ? (
                  <SkeletonLoader />
                ) : (
                  <div className=" glass p-4 transition-transform duration-300 transform hover:scale-105">
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.image}
                        alt={`Product ${product.id}`}
                        className="w-full h-55 object-cover mb-2"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <h2 className="text-xl mt-2">{product.title}</h2>
                    <button
                      onClick={handleShowCallbackModal}
                      className="back  hover:bg-green-400 hover:text-gray-900 text-white px-4 py-2 inline-flex gap-2 justify-center items-center mt-2"
                    >
                      <span>Send Query</span>
                      <ion-icon className="ml-2" name="send-outline"></ion-icon>
                    </button>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
    </div>
  
    {showCallbackModal && (
      <CallbackModel
        showCallbackModal={showCallbackModal}
        handleCloseCallbackModal={handleCloseCallbackModal}
      />
    )}
  </div>
  
  
  );
};
FeatureProduct.propTypes = {
    products: PropTypes.array.isRequired,
  };
export default FeatureProduct;
