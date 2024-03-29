import  { useState } from "react";

const AskMeModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for the animation to complete before closing completely
  };

  const handleBuyerClick = () => {
    window.location.href="/Join-Confirm-Buyers-With%20All%20Buyers" // Handle Buyer button click here
    // console.log("Buyer button clicked");
  };

  const handleSupplierClick = () => {
    window.location.href="/Join-Confirm-Buyers-With%20All%20Suppliers" // Handle Buyer button click here

    // Handle Supplier button click here
    // console.log("Supplier button clicked");
  };

  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      
      <div className="bg-white p-8 rounded-lg max-w-xl w-full animate-slide-down">
      <button
        className="absolute border-2 rounded-[50%] p-2 border-gray-900 top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={handleClose}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
        <h2 className="text-2xl mb-4 text-center text-black font-bold">Are you a Buyer or Supplier?</h2>
        <img
          className="mb-4"
          src="https://img.freepik.com/free-vector/hand-drawn-international-trade-illustrated_52683-76252.jpg?w=900&t=st=1707543096~exp=1707543696~hmac=d57633ac64ee9b3304f663b78b771fe9e6ba78fdb093cfef3d4d69be93169ea3"
          alt=""
        />
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleBuyerClick}
          >
            Buyer
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md ml-2"
            onClick={handleSupplierClick}
          >
            Supplier
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AskMeModal;
