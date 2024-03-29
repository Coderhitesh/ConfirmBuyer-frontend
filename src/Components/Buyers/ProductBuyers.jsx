import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsBuyers = () => {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const buyersPerPage = 10; // You can adjust the number of buyers per page


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://confirmbuyers.onrender.com/user/getAllCompanyDetails');
        setCompanies(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate the indexes of the current page
  const indexOfLastBuyer = currentPage * buyersPerPage;
  const indexOfFirstBuyer = indexOfLastBuyer - buyersPerPage;
  const currentBuyers = companies.slice(indexOfFirstBuyer, indexOfLastBuyer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='buyers-tables'>
      {currentBuyers.map((companies) => (
        <div className='buyers-card' key={companies.id}>
          <div className='cards-buyers'>
            <div className='Product-buyers'>Product Name:-{companies.products}</div>
            <div className='info-and-quote-btn'>
              <div className='info-side'>
                <div className='diva-flex'>
                  <div>
                  <ion-icon name="podium-outline"></ion-icon>
                  </div>
                  <div>
                    <h3>Company</h3>
                    <h5 className=''>{companies.companyName || 'N/A'}</h5>
                  </div>
                </div>
                <div className='diva-flex'>
                  <div>
                    <ion-icon className="ion-buyers" name="call-outline"></ion-icon>
                  </div>
                  <div>
                    <h3>Buyer Contact</h3>
                    <div className='quote-bt' onClick={()=>{window.location.href="/contact"}} >
                <button  type="submit">Quote now</button>
              </div>
                  </div>
                </div>
                <div className='diva-flex'>
                  <div>
                  <ion-icon name="map-outline"></ion-icon>
                  </div>
                  <div>
                    <h3>State</h3>
                    <h5 className='Date'>{companies.companyState || 'N/A'}</h5>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      ))}
      <div className='pagination'>
        {Array.from({ length: Math.ceil(companies.length / buyersPerPage) }).map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
  
     
    </div>
  );
  
      }
export default ProductsBuyers;
