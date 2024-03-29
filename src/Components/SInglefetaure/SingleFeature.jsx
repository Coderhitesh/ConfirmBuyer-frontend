import { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import axios from "axios";
import user from "./man.png";
import "./single.css";
const SingleFeature = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const handleFetch = async () => {
    try {
      const res = await axios.get(
        `https://confirmbuyers.onrender.com/user/getAllFetureProducts/${id}`
      );
      console.log(res.data);
      setProduct(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [id]);
  return (
    <div className="main-single ">
      <div className="single-conatiner">
        <div className="product-conatiner-detail">
          <div className="img-box-single">
            <img src={Product.image} alt={Product.title} />
          </div>
          <div className="Product-desciption-side">
            <div className="heading-single">
              <span>{Product.title}</span>
              <hr className="w-[180px]   border-t-4 border-green-500" />
            </div>
            <div className="other-product-details">
              <p>
                Type :<span className="text-gray-900">{Product.Type}</span>
              </p>
              <p>
                Estimate Price :
                <span className="text-gray-900">
                  Rs:{Product.EstimatePricing}{" "}
                </span>
              </p>
              <p>
                Minimum Qunatity :{" "}
                <span className="text-gray-900">{Product.MinimumQuantity}</span>
              </p>
              <p>
                Port Of Dispatch :
                <span className="text-gray-900">{Product.Portofdispatch}</span>
              </p>
              <p>
                Processing Time :
                <span className="text-gray-900">{Product.ProcessingTime}</span>
              </p>
              <p>
                Packaging
                <span className="text-gray-900">{Product.Packaging}</span>
              </p>
            </div>
            <div className="EnquiryBtn">
              <Link to={"/call-back"} className="back text-white px-4 py-2 inline-flex justify-center gap-2 items-center mt-2">
                <span>Enquiry Now</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="about-product-user">
          <div className="under-conatiner">
            <div className="Product-Desc-Card">
              <h4 className="headp">Product Description</h4>
              <hr className="w-[180px]   border-t-4 border-green-500" />
              <div className="flex flex-col items-center mt-3">
                <div className="icon-img">
                  <img
                    src="https://i.ibb.co/TcwWnQf/edit-info.png"
                    alt="icon"
                  />
                </div>
                <div className="desc-text">
                  <p>{Product.PRODUCTS_DESCRIPTION}</p>
                </div>
              </div>
            </div>
            <div className="Product-Specs">
              <h4 className="headp">Product specification</h4>
              <hr className="w-[180px]   border-t-4 border-green-500" />
              <div className="icon-img">
                <img
                  src="https://i.ibb.co/Vw3kGgz/specification.png"
                  alt="icon"
                />
              </div>

              <div className="product-specs-list">
                <table className="mt-3">
                  <thead className="">
                    <tr>
                      <th>Product Name</th>
                      <th>Volume</th>
                      <th>Container Type</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {Product.PRODUCTS_SPECIFICATION &&
                      Product.PRODUCTS_SPECIFICATION.map((item, index) => (
                        <tr key={index}>
                          <td>{item.ProductName}</td>
                          <td>{item.Volume}</td>
                          <td>{item.ContainerType}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="user-card">
              <h4 className="headp">User Details</h4>
              <hr className="w-[180px]   border-t-4 border-green-500" />
              <div className="icon-img">
                <img src={user} alt="icon" />
              </div>
              <div className="user-list blurs">
                <p>
                  User Name :
                  <span className="text-gray-900">{Product.userName}</span>
                </p>
                <p>
                  <span className="memberTag"> {Product.userMember}</span>
                </p>
                <p>
                  User Place :
                  <span className="userPlace"> {Product.userPlace}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
