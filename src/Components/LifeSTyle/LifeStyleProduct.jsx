import PropTypes from "prop-types";
import img1 from "./life.jpg";
import img2 from "./life2.jpg";
import img3 from "./Life3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const LifeStyleProduct = ({ Products }) => {
//   console.log(Products);
  return (
    <div className="aggriculutral-main noheight mb-12 ">
      <div className="text-box p-5 ">
        <h1 className="text-left  font-semibold text-3xl">
          Lifestyle Products
          <hr className="w-1/5 my-2  border-t-4 border-green-500" />
        </h1>
      </div>
      <div className="w-full p-5 flex colum item-center  ">
        <div className="w-1/4 h-full hunder wfulls sliderAggricultural ">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
            <SwiperSlide>
              <img src={img1} alt="logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={img2} alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="logo" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-3/4  grids h-full p-4">
          {Products &&
            Products.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 m-2 borders glass2 rounded-lg hover:shadow-lg transition duration-300 h-[300px] flex flex-col justify-between text-center border border-solid"
              >
                <Link
                  to={`/product/${item._id}`}
                  className="text-black font-bold anchorHeight hover:text-gray-700 rounded-full overflow-hidden "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="imgprop object-cover mb-4 rounded-full scale-100 transition-all ease-linear duration-300 hover:scale-105"
                  />
                </Link>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-l text-center">{item.title}</h2>
                  <Link to={"/Call-back"} className="back text-white px-4 py-2 hover:bg-green-700 inline-flex justify-center gap-2 items-center mt-2">
                    <span>Send Query</span>
                    <ion-icon
                      className="ml-4 rotate-3 "
                      name="send-outline"
                    ></ion-icon>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

LifeStyleProduct.propTypes = {
  Products: PropTypes.array.isRequired,
};

export default LifeStyleProduct;
