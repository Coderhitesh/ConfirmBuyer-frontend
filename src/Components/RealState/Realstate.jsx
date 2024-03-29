import axios from "axios";
import { useEffect, useState } from "react";
import RealstateProduct from "./RealstateProduct";

const Realstate = () => {
  const [Product, setProduct] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://confirmbuyers.onrender.com/user/getAllFetureProducts"
      );
      // console.log(response.data.allFetureProduct)
      // setProduct(response.data.allFetureProducta)

      const RealstateProducts = response.data.feutureProduct.filter(
        (product) => product.keyword.includes("Real estate")
      );
    //   console.log(RealstateProducts);
      if (RealstateProducts.length > 0) {
        setProduct(RealstateProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <RealstateProduct Products={Product} />;
};

export default Realstate;
