import React, { useState, useEffect } from 'react';
import ProductsBuyers from './ProductBuyers';
import Buyerstab from './Buyerstab';
import Suppliers from './Suppliers';
import './Buyer.css';
import BuyerFaq from './BuyersFaq';
import Testimonial from '../Testinomial/Testinomaial';
// import Loding from '../../Loding';

const Buyers = () => {
  const [activeTab, setActiveTab] = useState('Buyers');
  const [loading, setLoading] = useState(false);

  const handleTabClick = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    console.log(tab)
  };

  useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Simulate loading delay (you can replace this with your actual data fetching logic)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, [activeTab]);

  return (
    <>
      <div className='buyers-container'>
        <div className='main-div-container'>
          <div className='buyerstabs'>
            <div className='buyertab'>
              <ul className='tab_List'>
                <li className={`tab-btn ${activeTab === 'Products' ? 'active' : ''}`} onClick={() => handleTabClick('Products')}>
                  Products
                </li>
                <li className={`tab-btn ${activeTab === 'Buyers' ? 'active' : ''}`} onClick={() => handleTabClick('Buyers')}>
                  Buyers
                </li>
                <li className={`tab-btn ${activeTab === 'Suppliers' ? 'active' : ''}`} onClick={() => handleTabClick('Suppliers')}>
                  Suppliers
                </li>
              </ul>
            </div>
          </div>
          <hr />

          <div className="container-tabs-buyers">
            {loading ? (
     <div className="flex items-center justify-center h-screen">
     <div className="loader ease-linear border-t-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
     <p className="ml-2">Loading...</p>
     </div>
            ) : (
              <>
                {activeTab === 'Products' && <ProductsBuyers />}
                {activeTab === 'Buyers' && <Buyerstab />}
                {activeTab === 'Suppliers' && <Suppliers />}
              </>
            )}
          </div>
        </div>
      </div>
      <BuyerFaq />
      <Testimonial />
    </>
  );
};

export default Buyers;
