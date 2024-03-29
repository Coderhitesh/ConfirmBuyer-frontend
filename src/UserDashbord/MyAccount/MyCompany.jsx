import axios from "axios";
import { useEffect, useState } from "react";
import "./userdashboard.css";

const MyCompany = () => {
  const Token = sessionStorage.getItem("token");
  const [company, setCompany] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://confirmbuyers.onrender.com/user/getMyCompanyDetails",
        {},
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log(response.data);
      setCompany(response.data);
      const CompanyDetails = JSON.stringify(response.data);
      sessionStorage.setItem("Company-details", CompanyDetails);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [Token]);

  return (
    <div className="user-dashbord">
      <div className="text-box p-5 ">
        <span className="text-left span-underline font-semibold text-3xl">
          My-Information
          {/* <hr className="w-3/5 my-2  border-t-4 border-green-500" /> */}
        </span>
      </div>
      {company && company.companyDetails && (
      <div className="user-login-info">
        <div className="login-logo mb-2">
         
            <img src={company.companyDetails.companyCity || "no-img"} alt="" />
      
        </div>
        <div className="comapany-details">
            <h2 className="capitalize mb-5 text-3xl font-bold text-gray-900 ">{company.companyDetails.companyName || "no-img"}</h2>
            <div className="tags inline-block px-8 py-2 bg-purple-500 text-white rounded transition duration-300 ease-in-out hover:bg-purple-600 font-bold capitalize ">
                {company.companyDetails.MemberType || "no-tag" }
            </div>
            <div className="details">
                <p className="capitalize text-3xl font-bold text-gray-900 " >State: {company.companyDetails.companyState || "no-state" }</p>
                <p className="capitalize mb-3 text-3xl font-bold text-gray-900 " >Pincode: {company.companyDetails.companyPincode || "no-state" }</p>
                <p className="capitalize text-3xl font-bold py-2 px-2 bg-gray-900 text-white " >{company.companyDetails.primaryBusiness}</p>
            </div>
          </div>
      </div>
          )}
         
    </div>
  );
};

export default MyCompany;
