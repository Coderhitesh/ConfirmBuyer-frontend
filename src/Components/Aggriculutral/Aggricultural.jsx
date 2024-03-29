import axios from "axios";
import { useEffect, useState } from "react";
import AgriculturalProduct from "./AgriculturalProduct";

const Aggricultural = () => {
  const [Product, setProduct] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://confirmbuyers.onrender.com/user/getAllFetureProducts"
      );
      // console.log(response.data.feutureProduct)
      setProduct(response.data.feutureProduct)

      const feutureProducts = response.data.feutureProduct;
      if (feutureProducts && Array.isArray(feutureProducts)) {
          const agriculturalProducts = feutureProducts.filter(
              (product) => product.keyword.includes("Agricultural")
          );
          if (agriculturalProducts.length > 0) {
              setProduct(agriculturalProducts);
          }
      } else {
          console.log('feutureProduct is not present or not an array in the response.');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <AgriculturalProduct Products={Product} />;
};

export default Aggricultural;
