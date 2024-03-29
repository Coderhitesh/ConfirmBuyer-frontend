
const testimonialData = [
  "https://www.youtube.com/embed/hGgOyWJRtOM",
  "https://www.youtube.com/embed/wex0kC87Yw4",
  "https://www.youtube.com/embed/VJ2-RMuLdH8",
  "https://www.youtube.com/embed/3WaVI-xca_M",
  "https://www.youtube.com/embed/IrYG0AUXf00",
  "https://www.youtube.com/embed/osfN8j5Tt_8?si=Cp7Ql7mbHij0UcXR"
];

const Testimonial = () => {
  return (

    <>
    
    <div className="text-box p-5 ">
        <h1 className="text-left  font-semibold text-3xl">
        A Glimpse into Real Success Stories
          <hr className="w-1/5 my-2  border-t-4 border-green-500" />
        </h1>
      </div>
    <div className=" bg-cover bg-fixed p-5 " style={{ backgroundImage: `url('https://skedit.io/wp-content/uploads/2015/04/testimonial-slider-background.jpg')` }}>

    <div className="flex flex-wrap justify-center">
      {testimonialData.map((videoLink, index) => (
        <div key={index} className="md:w-1/3  sm:w-full p-2">
          <div className="video-container">
            <iframe
              width="100%"
              height="200"
              src={videoLink}
              title={`Testimonial ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  </div>
  </>
  );
};

export default Testimonial;
