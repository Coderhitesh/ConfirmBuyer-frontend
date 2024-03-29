import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios'
import imgNot from './PRODUCT NOT FOUND.png'

const Serach = () => {
    const {query} = useParams()
    const [productDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        console.log(query)

        try {
          const response = await axios.get(`https://confirmbuyers.onrender.com/api/anySearch/${query}`);
          console.log(response.data.results)
        if (response.data.results && response.data.results.length > 0) {
        setProductDetails(response.data.results);
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
      return <div className="flex items-center justify-center h-screen">
      <div className="loader ease-linear border-t-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
      <p className="ml-2">Loading...</p>
      </div> // Display a loading message or spinner
    }
  return (
    <div className='w-[1200px] imgnot  p-4  m-auto  '>
    {productDetails ? (
      productDetails.length > 0 ? (
        productDetails.map((product) => (
          <div key={product._id} className='coll flex justify-around w-full gap-8 m-4 normargin bg-white   p-6 rounded-md shadow-md '>
            <div className='border-2 imgnot border-red w-1/3'>
            <img src={product.companyCity} alt='' className='w-full h-48 object-cover rounded-md mb-4' />
            
            </div >
            <div className='border-2 border-red imgnot w-2/3 gap-2 p-3'>
           <h3 className='text-xl font-semibold mb-2'>{product.title}</h3>
            <div className='mb-2'>
              <p className='text-gray-600'> Company-Name: {product?.companyName}</p>
              <p className='text-gray-600'>Website: {product?.companyWebsite || "No Website"}</p>
              <p className='text-gray-600'>Company-State: {product?.companyState}</p>
              <p className='text-gray-600'>Products: {product?.products}</p>
              <Link to={`/complete-details/${product?._id}`} className="back text-white px-4 py-2 hover:bg-green-700 inline-flex justify-center gap-2 items-center mt-2">
                  <span>Read More</span>
                  <ion-icon
                    className="ml-4 rotate-3 "
                    name="send-outline"
                  ></ion-icon>
                </Link>
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

export default Serach