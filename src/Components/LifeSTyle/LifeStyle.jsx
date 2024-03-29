import axios from "axios";
import { useEffect, useState } from "react";
import LifeStyleProduct from "./LifeStyleProduct";

const LifeStyle = () => {
  const [Product, setProduct] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://confirmbuyers.onrender.com/user/getAllFetureProducts"
      );
    //   console.log(response.data.allFetureProduct)
      // setProduct(response.data.allFetureProducta)

      const LifeStyleProducts = response.data.feutureProduct.filter(
        (product) => product.keyword.includes("Lifestyle")
      );
      console.log(LifeStyleProducts);
      if (LifeStyleProducts.length > 0) {
        setProduct(LifeStyleProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <LifeStyleProduct Products={Product} />;
};

export default LifeStyle;
