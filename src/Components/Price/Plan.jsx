import './plan.css';

const data = [
    {
      type: 'STARTUP PACKAGE 💼',
      price: '50,000 (+18% GST)',
      details: [
        'Own Domain (www.abc.com/in).',
        '20 pages Responsive website.',
        
        'Control Panel.',
        '120 conference calls in one year (10 per month). 📞',
        '24 samples in one year (2 per month). 📦',
        'Google Local Listing. 🌐',
  
        'Basic SEO. 🔍',
   
        'Language converter. 🌐',
        'Social Media Account creation. 📱',
        'No. Of products/services displayed on the website – 100. 🛒',
        'Support Person. 👩‍💼',
        '24*7 Support. 🌐',
        'Thankyou 🙏'
      ],
    },
    {
      type: 'GOLD MEMBERSHIP 🏅',
      price: '25,000 (+18% GST)',
      details: [
        'Own domain (www.abc.com/in).',
        '10 pages Responsive website.',
        'No. Of products/services displayed on the website – 60. 🛒',
        '60 Conference Call in one year (5 per Month) 📞',
        '12 samples in One year (1 per month). 📦',
        'Google Local Listing. 🌐',
        'Language Converter. 🌐',
        '24*7 Support. 🌐',
         'Thankyou 🙏'
      ],
    },
    {
      type: 'SUPER PACKAGE 🚀',
      price: '75,000 (+18% GST)',
      details: [
        'Own domain (www.abc.com/in).',
        '30 pages Responsive website.',
        'No. Of products/services displayed on the website – 150. 🛒',
        '240 Conference Call in one year (20 per Month). 📞',
        '60 samples in One year (5 per month). 📦',
        'Control Panel. 🎛️',
        'Payment Gateway create with integration. 💳',
        'Google Local Listing. 🌐',
        '5MB Video. 🎥',
        '10 Keywords SEO. 🔍',
        'Trust Stamp. 🛡️',
        '6 Pages Flipbook. 📖',
        'Home page Banner(1 month). 🏠',
        'Language converter. 🌐',
        'Social Media creation. 📱',
        '4 Keyword premium listing on confirm buyers.com. 🔝',
        '5 Festival Posts. 🎉',
        'Support Person. 👩‍💼',
        '24*7 Support. 🌐',
        'Thankyou 🙏'
      ],
    },
   
    {
      type: 'GLOBAL PACKAGE 🌍',
      price: ' 1,40,000 (+18% GST)',
      details: [
        '📧 Three POP Email IDs',
        '🌐 B2C Integration (Amazon, Flipkart, Mesho, etc.)',
        '🌐 Documents Showcase (GST, ISO, IEC) 📄',
        '📱 Social Media Management (FB, Insta)',
        '🎉 Domestic Leads (5 Conferences/Month)',
        '🎉 Festival Posts',
        '🔍 Basic SEO',
        '📍 Google Local Listing',
        '💳 Payment Gateway Integration',
        '🔐 Trust Stamp',
        '🔄 Language Converter',
        '🌍 50 International Leads/Year',
        '📊 Visitor Hit Counter',
        '🔑 Two Premium Keywords Listing on Confirm Buyers',
        'Thankyou 🙏'
      ],
    },
    {
      type: 'EXPORT PLAN 🌐',
      price: '2,50,000 (+18% GST)',
      "details": [
        "🌐 72 Guaranteed Export Business Leads of your Product.",
        "🔒 Its valid till 72 Guaranteed Business Lead otherwise carry forward till your services.",
        "📄 Document creation (GST + ISO + IEC).",
        "🌍 5 Country Promotion.",
        "🚢 Shipment Solution (Start to Port).",
        "🖥️ 50 Pages Website.",
        "🔍 SEO – 15 Keyword.",
        "📧 5 POP Email Id.",
        "💳 Payment Gateway Integration.",
        "🏠 Home Page Banner on confirmbuyers.com for 6 Months.",
        "🛡️ Trust Stamp (Global Trust Stamp)."
      ]
    },
    {
      type:'EXPORT PLAN ',
      price:'1,75,000 (+18% Gst) ' ,
      "details": [
        "🌐 72 Guaranteed export Business lead of your product.",
        "🞭 Its valid till 72 guaranteed Business lead otherwise carry forward till your services.",
        "📄 Document creation (GST + ISO + IEC)",
        "🌍 5 country promotion",
        "🚢 Shipment solution (start to port)",
        "🖥️ 50 pages website",
        "🔍 Seo – 15 keyword",
        "📧 5 pop email id",
        "💳 Payment gateway integration",
        "🏠 Home Page banner on confirmBuyers.com for 6 months",
        "🛡️ Trust stamp (global trust stamp)"
      ]
    }
  ];
  

const Plans = () => {
  return (
    <div className='Plans_container'>
      <div className='plans-main'>
        <div className='plans_head'>
          <h2>Our Plans</h2>

        </div>
        <div className='Plan-container'>
          {data.map((plan, index) => (
            <div key={index} className='plan'>
              <div className='plan_head'>{plan.type}</div>
              <div className='plan_price'>{plan.price}</div>
              <ul>
                {plan.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
