import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import callBackImg from './call-bg.png'
// eslint-disable-next-line react/prop-types
const CallbackModel = ({handleCloseCallbackModal}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(true); // Open the modal on mount
  }, []);

  const [formdata, setFormdata] = useState({
    YourName: "",
    Number: "",
    YourProduct: "",
    YourSuitableTime: "",
    Email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleCallBack = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      const response = await axios.post(
        "https://confirmbuyers.onrender.com/api/callback",
        formdata
      );
      console.log(response.data);
      toast.success("Contact in Your Suitable time");
      setIsOpen(false); // Close the modal on successful form submission
    } catch (error) {
      console.error(error);
      setFormdata('');
      toast.error(error.response.data.error);
    }
  };

  

  return (
    <>
      {isOpen && (
         <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
         <div className={`bg-white p-8 rounded-lg max-w-[1200px] w-full transform transition-transform duration-300 scale-${isOpen ? '100' : '0'}`}>
           <button className="absolute border-2 rounded-[50%] p-2 border-gray-900 top-2 right-2 text-gray-600 hover:text-gray-800"    onClick={handleCloseCallbackModal}>
             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
             </svg>
           </button>
           <div className="flex">
             <img className="w-1/2 mr-4" src={callBackImg} alt="Call Back Image" />
             <div className="w-1/2">
               <h2 className="text-2xl font-serif text-start font-semibold mb-4">Contact Us</h2>
               <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                   Name
                 </label>
                 <input
                   className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                   id="name"
                   type="text"
                   placeholder="Your Name"
                   name="YourName"
                   value={formdata.YourName}
                   onChange={handleInputChange}
                 />
               </div>
               <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                   Email
                 </label>
                 <input
                   className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                   id="email"
                   type="email"
                   placeholder="Your Email"
                   name="Email"
                      value={formdata.Email}
                      onChange={handleInputChange}
                 />
               </div>
               <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Contact Number">
                   Contact Number
                 </label>
                 <input
                   className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                   id="ContactNumber"
                   type="text"
                   placeholder="Contact Number"
                   name="Number"
                      value={formdata.Number}
                      onChange={handleInputChange}
                 />
               </div>
               <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessTime">
                   Business Time
                 </label>
                 <input
                   className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                   id="businessTime"
                   type="datetime-local"
                   placeholder="Business Time"
                   name="YourSuitableTime"
                   value={formdata.YourSuitableTime}
                   onChange={handleInputChange}

                 />
               </div>
               <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                   Message
                 </label>
                 <textarea
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                   id="message"
                   placeholder="Your Message"
                   name="YourProduct"
                   value={formdata.YourProduct}
                   onChange={handleInputChange}
                 ></textarea>
               </div>
               <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md" onClick={handleCallBack}>
                 Submit
               </button>
             </div>
           </div>
         </div>
       </div>
      )}
    </>
  );
};

export default CallbackModel;
