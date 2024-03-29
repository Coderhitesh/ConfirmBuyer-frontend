// LeadsMoving.js
import { Box } from '@mui/material';
// import { Link } from 'react-router-dom';
import indian from './1F1EE-1F1F3_color.png';
import usa from './pngwing.com (8).png';
// import { useEffect } from 'react';
import { gsap } from 'gsap';
import axios from "axios"
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js';
import './Astyle.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
gsap.registerPlugin(MotionPathPlugin);

const LeadsMoving = () => {
    const [Leads,setLeads] = useState()
 
    const fetchLeads = async () => {
        try {
          const response = await axios.get(
            "https://confirmbuyers.onrender.com/user/getAllFetureProducts"
          );
          const allLeads = response.data.feutureProduct;
          console.log(allLeads.length);
          setLeads(allLeads);
    
       
        } catch (error) {
          console.error("Error fetching leads:", error);
        }
      };


      useEffect(() => {
        fetchLeads();
      }, []);

  return (
    <Box className="main-container">
        <div className='conatiner-leads'>
              <div className='domestics-leads-container'>
                <div className='domestics-heading'>
                  <span>Domestic Leads</span>
                </div>
                <div className='moving-leads-conatiner'>
                  {Leads && Leads.map((item,index)=>(
                      <Link  to={`/product/${item._id}`} key={index} className='lead-box'>
                          <div className='flag-image'>
                            <img src={indian} alt="flag"  />
                          </div>
                          <div className='lead-title'>
                            <span>{item.title}</span>
                            </div>
                            <div className='lead-date'>
                              <span>27/3/24</span>
                            </div>
                      </Link>
                  ))}
                </div>
              </div>
              <div className='international-leads-container'>
              <div className='domestics-heading'>
              <span>International Leads</span>
                  </div>
                  <div className='moving-leads-conatiner'>
                  {Leads && Leads.reverse().map((item,index)=>(
                      <Link  to={`/product/${item._id}`} key={index} className='lead-box'>
                          <div className='flag-image'>
                            <img src={usa} alt="flag"  />
                          </div>
                          <div className='lead-title'>
                            <span>{item.title}</span>
                            </div>
                            <div className='lead-date'>
                              <span>28/3/24</span>
                            </div>
                      </Link>
                  ))}
                </div>
              </div>
        </div>
    </Box>
  );
};

export default LeadsMoving;