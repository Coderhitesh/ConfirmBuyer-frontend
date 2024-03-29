import  { useEffect, useState } from 'react';
import axios from 'axios';
import './Buyer.css'


const Buyerstab = () => {
  const [buyers, setBuyers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const buyersPerPage = 8;


  const fetchBuyers = async () => {
    try {
      const response = await axios.get('https://confirmbuyers.onrender.com/api/get-buyers');
      // console.log(response.data.data);
      const reveserarray = response.data.data.reverse()
      setBuyers(reveserarray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBuyers();
  }, []); // Make sure to pass an empty dependency array to useEffect to ensure it runs only once

  // Calculate the indexes of the current page
  const indexOfLastBuyer = currentPage * buyersPerPage;
  const indexOfFirstBuyer = indexOfLastBuyer - buyersPerPage;
  const currentBuyers = buyers.slice(indexOfFirstBuyer, indexOfLastBuyer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
<>


    <div className='buyers-tables'>
      {currentBuyers.map((buyer) => (
        <div className='buyers-card' key={buyer.id}>
          <div className='cards-buyers'>
            <div className='Product-buyers'>{buyer.Product}</div>
            <div className='info-and-quote-btn'>
              <div className='info-side'>
                <div className='diva-flex'>
                  <div>
                    <ion-icon className="ion-buyers" name="person-outline"></ion-icon>
                  </div>
                  <div>
                    <h3>Company</h3>
                    <h5 className='companyName'>{buyer.companyName || 'N/A'}</h5>
                  </div>
                </div>
                <div className='diva-flex'>
                  <div>
                    <ion-icon className="ion-buyers" name="call-outline"></ion-icon>
                  </div>
                  <div>
                    <h3>Buyer Contact</h3>
                    <h5 className='companyName'>{buyer.contactNumber || 'N/A'}</h5>
                  </div>
                </div>
                <div className='diva-flex'>
                  <div>
                    <ion-icon className="ion-buyers" name="calendar-outline"></ion-icon>
                  </div>
                  <div>
                    <h3>Request On</h3>
                    <h5 className='Date'>{buyer.Date || 'N/A'}</h5>
                  </div>
                </div>
              </div>
              <div className='quote-btn'  onClick={()=>{window.location.href="/contact"}}  >
                <button  type="submit">Quote now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='pagination'>
        {Array.from({ length: Math.ceil(buyers.length / buyersPerPage) }).map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

     

    </div>
   

    </>

  );
};

export default Buyerstab;
