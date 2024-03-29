import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'
import imgNot from './PRODUCT NOT FOUND.png'
const BuyerQuery = () => {
    const {query} = useParams()
    const [productDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        console.log(query)

        try {
          const response = await axios.get(`https://confirmbuyers.onrender.com/api/buyers/${query}`);
          console.log(response.data)
        if (response.data && response.data.length > 0) {
        setProductDetails(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } else {
        setLoading(false);
      }
        } catch (error) {
          console.error('Error fetching product details:', error);
          setLoading(false); // Set loading to false even if there's an error
        }
      };
  
      fetchData();
    }, [query]);
  
    if (loading) {
      return   <div className="flex items-center justify-center h-screen">
      <div className="loader ease-linear border-t-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
      <p className="ml-2">Loading...</p>
    </div>
    }
  return (
    <div className='w-[1200px] imgnot  p-4  m-auto  '>
    {productDetails ? (
      productDetails.length > 0 ? (
        productDetails.map((product) => (
          <div key={product._id} className='coll flex justify-around w-full gap-8 m-4 normargin bg-white   p-6 rounded-md shadow-md '>
            <div className='border-2 imgnot border-red w-1/3'>
            <img src={product.image} alt='' className='w-full h-48 object-cover rounded-md mb-4' />
            <div className='flex flex-wrap mb-4'>
              {product.keyword &&
                product.keyword.map((keyword) => (
                  <span key={keyword} className='mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-full text-sm'>
                    {keyword}
                  </span>
                ))}
            </div>
            </div >
            <div className='border-2 border-red imgnot w-2/3 gap-2 p-3'>
           <h3 className='text-xl font-semibold mb-2'>{product.title}</h3>
            <div className='mb-2'>
              <p className='text-gray-600'>Estimate Pricing: {product.EstimatePricing} Rs</p>
              <p className='text-gray-600'>Minimum Quantity: {product.MinimumQuantity}</p>
              <p className='text-gray-600'>Port of Dispatch: {product.Portofdispatch}</p>
              <p className='text-gray-600'>Processing Time: {product.ProcessingTime}</p>
              <p className='text-gray-600'>Type: {product.Type}</p>
            </div>
            <div className=''>
              {product.PRODUCTS_SPECIFICATION &&
                product.PRODUCTS_SPECIFICATION.map((specification) => (
                  <div key={specification._id} className='mb-2 '>
                    <h4 className='text-sm font-semibold'>ProductName:{specification.ProductName}</h4>
                    <p className='text-gray-600'>Volume:{specification.Volume}</p>
                    <p className='text-gray-600'>Container Type:{specification.ContainerType}</p>
                    <p className='text-gray-600'>Color:{specification.Color}</p>
                  </div>
                ))}
            </div>
           </div>
          </div>
        ))
      ) : (
        <div className='w-full imgnot h-auto'>
          <div className='text-center'>
            <img src={imgNot} alt="imgs"/>
            {/* <h2 className='text-2xl font-semibold'>Product Not Found</h2> */}
          </div>
        </div>
      )
    ) : (
      <p className='text-center'>Loading...</p>
    )}
  </div>
  
  
  )
}

export default BuyerQuery