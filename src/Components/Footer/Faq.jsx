import { useState } from 'react';
import './Faq.css'; // Make sure to create a CSS file for styling
import img from './Confirm Buyers.png'
const Faq = () => {
  const faqData = [
    {
        question: 'What is Confirm Buyers and how does it help B2B businesses?',
        answer: 'Confirm Buyers is a pioneering global B2B marketplace based in India. Our purpose is to assist clients in making a profitable business and enhancing the quality of supply chain management. We provide a robust platform for online B2B trade, making wholesale purchases effortless and streamlined for exporters and importers worldwide.',
      },
      {
        question: 'How does Confirm Buyers support SMEs, exporters, and Indian companies?',
        answer: 'Confirm Buyers is dedicated to solving difficulties experienced by SMEs, exporters, especially Indian exporters, and Indian companies. We offer a unified and dependable B2B marketplace platform. Our platform not only helps small and medium-scale businesses acquire new customers but also assists in retaining them. We provide an infallible way of turning prospects into customers, ensuring tangible success for our clients.',
      },
      {
        question: 'What sets Confirm Buyers apart in the B2B marketplace?',
        answer: 'Confirm Buyers differentiates itself in the B2B marketplace by not only providing a platform specializing in international trade but also offering essential services like business website development, SEO promotion, social media marketing, and more. We go beyond conventional transactions; our solutions assist businesses in converting leads into customers, ensuring a comprehensive approach to your B2B needs.'
      },
      {
        question: 'How does Confirm Buyers ensure credibility and assurance for seamless business transactions?',
        answer: 'At Confirm Buyers, we recognize the importance of credibility and assurance in the B2B industry. We have a vast network of sellers and buyers in both the Indian and overseas markets. The companies, including Indian wholesalers, registered on our B2B trade portal, are reputable names in their regions with years of expertise. This collective experience ensures a trustworthy and seamless business transaction experience, making Confirm Buyers the one-stop solution for your every B2B dilemma.'
      },
      {
        question: 'What sets your B2B Fashion Marketplace apart from others?',
        answer: 'Our B2B Fashion Marketplace stands out with reliable suppliers offering quality, fashionable, and varied apparel. The enormous market in the clothing industry makes our platform a boon for both buyers and sellers. We connect you with the perfect suppliers, facilitating seamless business transactions in the fashion industry.'
      },
      {
        question: 'How does your B2B Furniture Marketplace contribute to business expansion?',
        answer: 'Our B2B Furniture Marketplace features sellers from across the globe, providing buyers with access to exporters and manufacturers with years of expertise. This sector not only offers vast opportunities but also great potential. Our platform is ideal for those looking to expand their business in the furniture and home decor industry.'
      },
      {
        question: 'What makes your B2B Equipment Marketplace reliable for safety products?',
        answer: 'In our B2B Equipment Marketplace, we have trusted sellers offering safety equipment, including protective gears, helmets, gloves, and protective clothing. These products meet industry standards and come with reasonable prices, satisfying the demands of the rapidly growing safety equipment market.'
      },
      {
        question: 'Why choose your B2B Agriculture Marketplace for agricultural commodities?',
        answer: 'Our B2B Agriculture Marketplace is advantageous due to the presence of thousands of competent suppliers and an active buyer base. The platform offers a tremendous range of agricultural commodities, including rice, coconut, wheat, vegetables, fruits, byproducts, and more. The agriculture industrys never-ending potential makes it one of the most profitable sectors.'
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
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => handleToggle(index)}>
            <div className="question">{item.question}
            <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className="answer">{openIndex === index && item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;