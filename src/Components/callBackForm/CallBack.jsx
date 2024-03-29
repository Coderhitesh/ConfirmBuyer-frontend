import { useState, useEffect } from "react";
import "./callBack.css";
import bg from "../callBackForm/call-bg.png";
import axios from "axios";
import { toast } from "react-hot-toast";
const CallBack = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [formdata, setFormdata] = useState({
    YourName: "",
   Number: "",
    YourProduct: "",
    YourSuitableTime: "",
    Email: "",
});
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormdata({ ...formdata, [name]: value });
};
  const handleCallBack = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      const response = await axios.post(
        "https://confirmbuyers.onrender.com/api/callback",
        formdata
      );
      console.log(response.data);
      toast.success("Contact in Your Suitable time");
    //   setFormdata(null)

      //   const LoginToken = response.data.token;
      //   sessionStorage.setItem('token', LoginToken);
    } catch (error) {
      console.error(error);
      setFormdata('')
      // console.log(error.response.data.error)
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="container">
          <div className="main-login-box">
            <div className="login-form-main">
              <div className="heading">
                <span>For Any Query</span>
              </div>
              <form action="">
                <input onChange={handleInputChange} type="text" value={formdata.YourName} name="YourName" placeholder="Enter Your Name" />
                <input onChange={handleInputChange} type="email" value={formdata.Email} name="Email"  placeholder="Enter Your Email" />
                <input onChange={handleInputChange} type="text" value={formdata.Number} name="Number" placeholder="Enter Your Number" />
                <input onChange={handleInputChange} type="datetime-local" value={formdata.YourSuitableTime} name="YourSuitableTime" placeholder="Give Your Suitable Time" />

                <textarea
                  name="YourProduct"
                  id="product"
                  onChange={handleInputChange}
                  placeholder="Enter Your Products"
                  value={formdata.YourProduct}
                ></textarea>
                <div className="button-box">
                  <div className="up-btn">
                    <button onClick={handleCallBack} className="btn-grad">Submit</button>
                  </div>
                  {/* <hr />
                                    <div className="down-link">
                                        <span>Don't have an account ?</span>
                                  
                                        <a href="">Register</a>
                                    </div> */}
                </div>
              </form>
            </div>

            <div className="right-bg">
              <img src={bg} alt="callback-bg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallBack;
