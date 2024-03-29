import { Link } from 'react-router-dom';

const ThanksPage = () => {
  return (
    <div className="flex flex-col items-center p-5 justify-center ">
      <div className="max-w-[1200px] w-full p-8 rounded-lg  text-center">
        <img
          src="https://i.ibb.co/fMJ3M4z/hand-drawn-thank-you-your-attention-label-illustration-23-2150264452.jpg"
          alt="Thank You Image"
          className="mx-auto max-w-sm mb-8"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600">
          Thank you for filling out the contact form. We appreciate your interest as a supplier/buyer.
        </p>
        <p className="text-gray-600 mb-8">
          We will get back to you as soon as possible.
        </p>
        {/* Link to home page */}
        <Link to="/" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default ThanksPage;
