/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import callBackImg from './callback.jpg';

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ContactNumber: '',
    businessTime: '',
    message: ''
  });
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for the animation to complete before closing completely
  };

  return (
    
        <div className={`fixed top-0 left-0 w-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`bg-white p-8 rounded-lg max-w-[1200px] w-full transform transition-transform duration-300 scale-${isOpen ? '100' : '0'}`}>
            <button className="absolute border-2 rounded-[50%] p-2 border-gray-900 top-2 right-2 text-gray-600 hover:text-gray-800" onClick={handleClose}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="flex">
              <img className="w-1/2 mr-4" src={callBackImg} alt="Call Back Image" />
              <div className="w-1/2">
                <h2 className="text-2xl font-serif font-semibold mb-4">Contact Us</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="ContactNumber"
                    value={formData.ContactNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessTime">
                    Business Time
                  </label>
                  <input
                    className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                    id="businessTime"
                    type="date"
                    placeholder="Business Time"
                    name="businessTime"
                    value={formData.businessTime}
                    onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md" onClick={handleClose}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default ContactModal;
