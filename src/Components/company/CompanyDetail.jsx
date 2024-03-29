import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import CallbackModel from '../CallBackModel/CallbackModel';
import './comapssny.css'
// import NotFound from '../Header/NotFound'; 

// import Loding from '../../Loding';
const CompleteDetails = () => {
  // Get the company ID from the URL parameter
  const { companyId } = useParams();
  const [companyDetails, setCompanyDetails] = useState(null);
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const handleShowCallbackModal = () => {
    setShowCallbackModal(true);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleCloseCallbackModal = () => {
    setShowCallbackModal(false);
  };
  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        // Fetch details for the specific company using its ID
        const response = await axios.get(`https://confirmbuyers.onrender.com/user/singleCompanyDetails/${companyId}`);
        setCompanyDetails(response.data.company);
        console.log(response.data.company)
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };

    fetchCompanyDetails();
  }, [companyId]);

  if (!companyDetails) {
    return <div className="flex items-center justify-center h-screen">
    <div className="loader ease-linear border-t-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
    <p className="ml-2">Loading...</p>
    </div>
  }
  const addHttpPrefix = (url) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return 'http://' + url;
    }
    return url;
  };
  return (
<div className="company-main-container">
      <div className="company-image-container">
        <img className="company-logo" src={companyDetails.companyCity} alt="Company Logo" />
      </div>
      <div className="company-details-container">
        <h2>Complete Details</h2>
        <p>Company Name: <span>{companyDetails.companyName}</span></p>
        <p>Company Address: <span>{companyDetails.companyAddress}</span></p>
        <p>Company State: <span>{companyDetails.companyState}</span></p>
        <p>Company Pincode: <span>{companyDetails.companyPincode}</span></p>
        <p>Primary Business: <span>{companyDetails.primaryBusiness}</span></p>
        <p>WebSite: <a href={addHttpPrefix(companyDetails.companyWebsite)} rel="noreferrer" target='_blank'><span>{companyDetails.companyWebsite}</span></a></p>
        <p>Products: <span>{companyDetails.products.join(', ')}</span></p>
        <p>GST: <span>{companyDetails.Gst}</span></p>

        <div className="company-branch-details">
          <h3 className="orange">Branch Details</h3>
          <ul>
            {companyDetails.BranchDetails !== null && companyDetails.BranchDetails !== undefined && companyDetails.BranchDetails.length > 0 ? (
              companyDetails.BranchDetails.map((branch, index) => (
                <ul className='divisio-n' key={index}>
                <li>
                  <strong>Division:</strong> {branch.Division}
                </li>
                <li>
                  <strong>Contact Person:</strong> {branch.Contactperson}
                </li>
                <li>
                  <strong>Country:</strong> {branch.Country}
                </li>
                <li>
                  <strong>City:</strong> {branch.city}
                </li>
                <li>
                  <strong>Address:</strong> {branch.Address}
                </li>
                <li>
                  <strong>Pincode:</strong> {branch.pincode}
                </li>
              </ul>
              
              ))
            ) : (
              <p>No Branch for this Company</p>
            )}
          </ul>
        </div>

        <div className="company-contact">
          <Link to="/call-back" className='company-btn-info text-white' type="button" >
            Contact Now
          </Link>

          {showCallbackModal && (
            <CallbackModel
              showCallbackModal={showCallbackModal}
              handleCloseCallbackModal={handleCloseCallbackModal}
            />
          )}
        </div>
      </div>

   
    </div>
  );
};

export default CompleteDetails;
