import axios from "axios";
import { useEffect, useState } from "react";
import AnimalProduct from "./AnimalProduct";

const Animal = () => {
  const [Product, setProduct] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://confirmbuyers.onrender.com/user/getAllFetureProducts"
      );
      // console.log(response.data.feutureProduct)
      // setProduct(response.data.feutureProducta)
      const feutureProducts = response.data.feutureProduct;
      if (feutureProducts && Array.isArray(feutureProducts)) {
          const AnimalProducts = feutureProducts.filter(
              (product) => product.keyword.includes("Animal")
          );
          console.log("AnimalProducts", AnimalProducts);
          if (AnimalProducts.length > 0) {
              setProduct(AnimalProducts);
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
  return <AnimalProduct Products={Product} />;
};

export default Animal;
