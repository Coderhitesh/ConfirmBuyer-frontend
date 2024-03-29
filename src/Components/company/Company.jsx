import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './comapssny.css';
import './company.css';


const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [Freecompanies, setFreeCompanies] = useState([]);
  const [Exportcompanies, setExportCompanies] = useState([]);
  const [Goldcompanies, setGoldCompanies] = useState([]);
  const [Startcompanies, setStartCompanies] = useState([]);

  const [sortOption, setSortOption] = useState('AtoZ');
  const [showMembers, setShowMembers] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // const itemsPerPage = 8;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://confirmbuyers.onrender.com/user/getAllCompanyDetails');
        setCompanies(response.data.data);
        // console.log(response.data.data)
        const goldMember = response.data.data.filter((company) =>
          company.MemberType.toLowerCase().includes('gold')
        );
        setGoldCompanies(goldMember);

        const ExportMember = response.data.data.filter((company) =>
          company.MemberType.toLowerCase().includes('export')
        );
        setExportCompanies(ExportMember);
        // console.log("ExportMember",ExportMember)

        const StartUp = response.data.data.filter((company) =>
          company.MemberType.toLowerCase().includes('start')
        );
        setStartCompanies(StartUp);

        const FreeMember = response.data.data.filter((company) =>
          company.MemberType.toLowerCase().includes('free')
        );
        setFreeCompanies(FreeMember);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching company details:', error);
      }
    };

    fetchData();
  }, []);

  // Sorting logic
  const sortedCompanies = (companyList) => {
    return [...companyList].sort((a, b) => {
      if (sortOption === 'AtoZ') {
        return a.companyName.localeCompare(b.companyName);
      } else {
        return b.companyName.localeCompare(a.companyName);
      }
    });
  };

  // Filtering logic
  // const filterCompanies = (companyList) => {
  //   return showMembers ? companyList.filter((company) => company.isMember) : companyList;
  // };

  // Pagination
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to render individual company details
  const renderCompanyDetails = (company) => (
    <Link className="company-link" key={company._id} to={`/complete-details/${company._id}`}>
      <div className='company-col'>
        <div className='company-image'>
        <img src={company.companyCity} alt={`Company ${company.companyName} logo`} />
                </div>
        <div className='company-all-detail'>
          <h3><span>Company Name: </span>{company.companyName}</h3>
          <p><span>Company City: </span>{company.companyState}</p>
          <p><span>Products: </span>{company.products}</p>
          <p><span>Primary Business: </span>{company.primaryBusiness}</p>
          <button className='btn-grad'>Read More</button>
          <div className='company-tag'>
            <p>{company.MemberType}</p>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="main-container company-filter">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-t-blue-500  h-12 w-12"></div>
      </div>
      ) : (
        <>
          <div className="filter-options">
            <label>
              Sort By:
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="AtoZ">A to Z</option>
                <option value="ZtoA">Z to A</option>
              </select>
            </label>
            <label>
              Show Members Only:
              <input
                type="checkbox"
                checked={showMembers}
                onChange={() => setShowMembers(!showMembers)}
              />
            </label>
          </div>

          <div className="website-container">
            <div className='company-left-section'>
              <h3>Companies <br/> <span>Detail</span></h3>
            </div>
            <div className='company-right-section'>
              {/* Display Gold Companies */}
              {sortedCompanies(Goldcompanies).map((company) => renderCompanyDetails(company))}
              {/* Display Export Companies */}
              {sortedCompanies(Exportcompanies).map((company) => renderCompanyDetails(company))}
              {/* Display Start-up Companies */}
              {sortedCompanies(Startcompanies).map((company) => renderCompanyDetails(company))}
              {/* Display Free Companies */}
              {sortedCompanies(Freecompanies).map((company) => renderCompanyDetails(company))}
            </div>
          </div>
{/* 
          <div className="pagination">
            {Array.from({ length: Math.ceil(companies.length / itemsPerPage) }).map((_, index) => (
              <button key={index + 1} onClick={() => paginate(index + 1)}>{index + 1}</button>
            ))}
          </div> */}
        </>
      )}
    </div>
  );
};

export default Company;
