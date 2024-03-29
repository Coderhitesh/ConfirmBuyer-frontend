import "./post.css";
import svg from "./4146248_2205943.jpg";
import { useState } from "react";
import axios from "axios";
const Post = () => {
  const [formdata, setFormData] = useState({
    ProductName: "",
    Qunatity: "",
    Category: "",
    TypeOfPacking: "",
    Message: "",
  });
  const Token = sessionStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendFormPost = async (e) => {
    e.preventDefault()
    console.log(formdata)
    
    try {
      const response = await axios.post(
        "https://confirmbuyers.onrender.com/api/make-a-post",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="confirm-post-seciton">
        <div className="text-box">
          <h1 className="text-left font-semibold text-3xl">
            <hr className="w-full my-2  border-t-4 border-green-500" />
          </h1>
        </div>
        <div className="container">
          <div className="confirm-title">
            <span>Post By Requirements</span>
            <p>
              We Will Connect You With A Supplier Best Suited To Your Buying
              Requirements. We Have With Us The Trust Of Hundreds Of
              Manufacturers, Exporters And Buyers. We Make Sure You Receive
              High-Quality Products At A Reasonable Price Range.
            </p>
          </div>
          <div className="confirm-detail">
            <div className="confirm-heading">
              <img src={svg} alt="" />
            </div>
            <div className="confirm-contact">
              <h2>WHAT ARE YOU LOOKING FOR?</h2>
              <form className="flex flex-col gap-4">
                {Object.keys(formdata).map((key) =>
                  key === "Message" ? (
                    <textarea
                      key={key}
                      rows="4"
                      placeholder="Your Message..."
                      name={key}
                      value={formdata[key]}
                      onChange={handleChange}
                      className="resize-none border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
                    />
                  ) : (
                    <input
                      key={key}
                      type={key === "Quantity" ? "text" : "text"}
                      name={key}
                      placeholder={key}
                      value={formdata[key]}
                      onChange={handleChange}
                      className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  )
                )}

                <select
                  name="Category"
                  id="Category"
                  value={formdata.Category}
                  onChange={handleChange}
                  className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="Select">-----Select------</option>
                  <option value="Bags">Bags</option>
                  <option value="Carton">Carton</option>
                  <option value="Dozen">Dozen</option>
                  <option value="feet">Feet</option>
                  <option value="Kg">Kilogram</option>
                  <option value="Meter">Meter</option>
                  <option value="Metric Ton">Metric Ton</option>
                  <option value="Pieces">Pieces</option>
                  <option value="Other">Other</option>
                </select>

                <button onClick={sendFormPost} className="back text-white px-4 py-2 hover:bg-green-700 inline-flex justify-center gap-2 items-center mt-2">
                  <span>Post My Requirements</span>
                  <ion-icon
                    className="ml-4 rotate-3 "
                    name="cloud-upload-outline"
                  ></ion-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
