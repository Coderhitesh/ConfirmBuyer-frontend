import axios from "axios";
import { useEffect, useState } from "react";
const MyProducts = () => {
  const [bussinessProduct,setBussinessProduct] = useState()
//   getBussinessProduct
const Token = sessionStorage.getItem("token");
console.log(Token);

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://confirmbuyers.onrender.com/api/getBussinessProduct",
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    );
    console.log(response.data);
    setBussinessProduct(response.data.products)

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
        <span className=" span-underline text-left  font-semibold text-3xl">
          My Products
          {/* <hr className="w-1/5 my-2  border-t-4 border-green-500" /> */}
        </span>
      </div>

      <div className="Products-Maping grids3 ml-2 gap-3">
        {bussinessProduct &&
          bussinessProduct.map((product, index) => (
            <div
              className= "w-[250px] mx-auto mb-4 bg-white rounded-md overflow-hidden shadow-md"
              key={index}
            >
              <img
                src={product.ProductImage[0]}
                alt={product.ProductName}
                width={50}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.ProductName}</h2>
                <p className="text-gray-600">{product.Description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-blue-500 font-semibold">
                    ${product.ProductPrice}
                  </span>

                  {product.ProductStatus ? (
                    <span className="text-green-500">In Stock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </div>

                <div className="mt-4">
                  <p className="text-gray-500">
                    Business Type: {product.BusinessType}
                  </p>
                  <p className="text-gray-500">
                    Category: {product.ProductCategory}
                  </p>
                  <p className="text-gray-500">User: {product.user}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyProducts;
