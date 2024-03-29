import  { useEffect, useState } from 'react';
import axios from 'axios';
import ProductTitle from './ProductTitle.jsx';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://confirmbuyers.onrender.com/user/getAllFetureProducts');
      const feutureProducts = response.data.feutureProduct;
      if (feutureProducts && Array.isArray(feutureProducts)) {
          setProducts(feutureProducts.slice(0, 10));
      } else {
          console.log('feutureProduct is not present or not an array in the response.');
      }
      // console.log(response.data.feutureProduct)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    // Adjust the number of products to display based on screen width
    const maxProducts = window.innerWidth >= 768 ? 24 : 10;
    setDisplayedProducts(products.slice(0, maxProducts));

  }, [products]);


  return (
    <div className="">
      {/* Pass products as a prop to ProductTitle */}
      <ProductTitle products={displayedProducts} />
    
    </div>
  );
};

export default Products;
