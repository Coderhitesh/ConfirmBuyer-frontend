import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeaderMy from "./UserDashbord/MyAccount/HeaderMy";

// Lazy-loaded components
const Home = lazy(() => import("./Components/Home/Home"));
const PostPage = lazy(() => import("./Components/PostPage/PostPage"));
const OtpPage = lazy(() => import("./Components/auth/OtpPage"));
const Login = lazy(() => import("./Components/auth/Login"));
const Contact = lazy(() => import("./Components/contact/Contact"));
const JoinNow = lazy(() => import("./Components/Hero/JoinNow"));
const SingleFeature = lazy(() =>
  import("./Components/SInglefetaure/SingleFeature")
);
const Faq = lazy(() => import("./Components/Footer/Faq"));
const Testimonial = lazy(() => import("./Components/Testinomial/Testinomaial"));
const Post = lazy(() => import("./Components/PostByRequirments/Post"));
const Company = lazy(() => import("./Components/company/Company"));
const Plan = lazy(() => import("./Components/Price/Plan"));
const CompanyDetail = lazy(() => import("./Components/company/CompanyDetail"));
const Buyers = lazy(() => import("./Components/Buyers/Buyers"));
const CallBack = lazy(() => import("./Components/callBackForm/CallBack"));
const Serach = lazy(() => import("./Components/SerachQuery/Serach"));
const BuyerQuery = lazy(() => import("./Components/SerachQuery/BuyerQuery"));
const CitySlider = lazy(() => import("./Components/CitySlider/CitySlider"));
const Privacy = lazy(() => import("./Components/Policy/Privacy"));
const About = lazy(() => import("./Components/about/About"));
const MyAccount = lazy(() => import("./UserDashbord/MyAccount/MyAccount"));
const MyCompany = lazy(() => import("./UserDashbord/MyAccount/MyCompany"));
const MyProducts = lazy(() => import("./UserDashbord/MyAccount/MyProducts"));
const AddProduct = lazy(() => import("./UserDashbord/MyAccount/AddProduct"));
const Logout = lazy(() => import("./UserDashbord/MyAccount/Logout"));
const JoinFull = lazy(() => import("./Components/JoinFull/JoinFull"));

import "./App.css";
import MyPost from "./UserDashbord/MyAccount/MyPost";
import PleaseLogin from "./UserDashbord/MyAccount/PleaseLogin";
import Chatbot from "./Components/Chat-bots/Chatbot";
import Categoreypage from "./Components/Category/Categoreypage";
import AskMeModal from "./Components/AskMe/AskMeModal";
import ContactModal from "./Components/AskMe/contactModal";
import BuyersPage from "./Components/BuyersPage/BuyersPage";
import SuppliersPage from "./Components/BuyersPage/SuppliersPage";
import ThanksPage from "./Components/ThanksPage/ThanksPage";

function App() {
  const isAuthenticate = sessionStorage.getItem("token");
  const isMyAccountRoute = location.pathname.startsWith("/admin");
  const [showAskMeModal, setShowAskMeModal] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);
  const isBuyerAccount = location.pathname.startsWith("/Join");
  const isSupplierAccount = location.pathname.startsWith("/Join")
  const ThanksYouPage = location.pathname.startsWith("/Thanks")
  useEffect(() => {
    const askMeTimeoutId = setTimeout(() => {
      setShowAskMeModal(false); // Hide the modal after 9 seconds
    }, 9000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(askMeTimeoutId);
  }, []);

  useEffect(() => {
    if (!isBuyerAccount) {
      const contactTimeoutId = setTimeout(() => {
        setShowContactModal(true);
      }, 60000); 
      return () => clearTimeout(contactTimeoutId);
    }
  }, [isBuyerAccount]);
  useEffect(() => {
    if (!ThanksYouPage) {
      const contactTimeoutId = setTimeout(() => {
        setShowContactModal(true);
      }, 60000); 
      return () => clearTimeout(contactTimeoutId);
    }
  }, [ThanksYouPage]);

  useEffect(() => {
    if (!isSupplierAccount) {
      const contactTimeoutId = setTimeout(() => {
        setShowContactModal(true);
      }, 60000); 
      return () => clearTimeout(contactTimeoutId);
    }
  }, [isSupplierAccount]);


  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };


  return (
    <Router>
     {!isBuyerAccount && showAskMeModal && <AskMeModal onClose={handleCloseContactModal} />}
      {!isBuyerAccount && showContactModal && <ContactModal onClose={handleCloseContactModal} />}
      {!isSupplierAccount && showAskMeModal && <AskMeModal onClose={handleCloseContactModal} />}
      {!isSupplierAccount && showContactModal && <ContactModal onClose={handleCloseContactModal} />}
      {isMyAccountRoute ? (
        <div>
          <HeaderMy />
        </div>
      ) : (
        <Header />
      )}
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 border-t-blue-500  h-12 w-12"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post-Requirments" element={<PostPage />} />
          <Route path="/OtpValidate/:email" element={<OtpPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/JoinNow" element={<JoinNow />} />
          <Route path="/Product/:id" element={<SingleFeature />} />
          <Route path="/success" element={<Testimonial />} />
          <Route path="/post" element={<Post />} />
          <Route path="/Companies" element={<Company />} />
          <Route path="/Plans" element={<Plan />} />
          <Route path="/Buyers" element={<Buyers />} />
          <Route path="/Call-back" element={<CallBack />} />
          <Route path="/searchproduct/:query" element={<Serach />} />
          <Route path="/BuyerSeacrhproduct/:query" element={<BuyerQuery />} />
          <Route path="/City" element={<CitySlider />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/Join-Confirm-Buyers-With All Buyers" element={<BuyersPage />} />
          <Route path="/Join-Confirm-Buyers-With All Suppliers" element={<SuppliersPage />} />


          <Route path="/Categorey-page/:name" element={<Categoreypage />} />

          <Route path="/Chat-Bot" element={<Chatbot />} />
          <Route path="/Thanks-for-contact-us" element={<ThanksPage />} />


          <Route
            path="/complete-details/:companyId"
            element={<CompanyDetail />}
          />

          <Route
            path="/Join-Confirm-buyers"
            element={<JoinFull />}
          />
          {isAuthenticate ? (
            <>
              <Route path="/admin/MyAccount" element={<MyAccount />} />
              <Route path="/admin/my-information" element={<MyCompany />} />
              <Route path="/admin/my-product" element={<MyProducts />} />
              <Route path="/admin/my-post" element={<MyPost />} />
              <Route path="/admin/post-requirement" element={<Post />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/admin/logo-out" element={<Logout />} />
            </>
          ) : (
            <Route path="/admin/MyAccount" element={<PleaseLogin />} />
          )}
        </Routes>
      </Suspense>
      <Toaster />
      {isMyAccountRoute ? "" : <Footer />}
    </Router>
  );
}

export default App;
