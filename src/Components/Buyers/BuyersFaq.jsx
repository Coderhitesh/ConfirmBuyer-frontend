import React, { useState } from 'react';
import img from './12832569_5098466.jpg'
const BuyerFaq = () => {
  const faqData = [
    {
        question: 'How do I search products on Confirm Buyers?',
        answer: '1. Navigate to the Confirm Buyers homepage\n2. In the search tab, enter the name of the product you are looking for\n3. Ensure that you have selected \'Products/Services\' in the category dropdown\n4. Click on the search button\nNote: Add a relevant name with the specification for more accurate search results.'
      },
      
      {
        question: 'How do I browse products by their category on Confirm Buyers?',
        answer: '1. Explore the homepage to find various product categories across different industries\n2. Click on "All Categories" for an extensive list, or choose a specific industry to view related categories\n3. You can also search for products, and on the results page, find related categories for further exploration.'
      },
      
      {
        question: 'Can I get a list of all the companies listed in a particular product category on Confirm Buyers? How?',
        answer: 'Yes, you can obtain a comprehensive list of companies in a specific product category:\n1. Select the desired product category\n2. On the category page, click on the \'Companies\' button next to the \'Products\' button\n3. Access the complete list of companies dealing in the selected product category.'
      },
      
      {
        question: 'Can I directly search for a company if I know its name on Confirm Buyers? How?',
        answer: 'Yes, Confirm Buyers allows direct company search:\n1. Hover over the \'Product/Services\' option and choose \'Companies\' from the dropdown\n2. Enter the company name in the search tab and click search\n3. Obtain a list of all companies with the specified name.'
      },
      
      {
        question: 'What is Confirm Buyers and how does it help B2B businesses?',
        answer: 'Confirm Buyers is a pioneering global B2B marketplace based in India, dedicated to assisting clients in achieving profitable business and enhancing supply chain management quality. Our platform streamlines wholesale purchases for exporters and importers worldwide, making B2B trade effortless and efficient.'
      }
      
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <div className="image-container">
        {/* You can add your image here */}
        <img src={img} alt="FAQ" />
      </div>
      <div className="faq-content">
        <h2>Frequently Asked Buyers Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => handleToggle(index)}>
            <div className="question">{item.question}</div>
            <div className="answer">{openIndex === index && item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerFaq;