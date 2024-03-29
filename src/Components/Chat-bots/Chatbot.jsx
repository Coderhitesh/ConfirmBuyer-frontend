import axios from "axios";
import { useState, useEffect } from "react";
import chatBotGif from "./chatbot-unscreen.gif";
import "./chatbot.css";
import Chatbotcall from "./Chatbotcall";
import ChatbotQuestion from "./ChatbotQuestion";

const Chatbot = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [screenShow, setScreenShow] = useState(false);
  const [showBot, setShowBot] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const simulateDelay = async () => {
    return new Promise((resolve) => setTimeout(resolve, 900));
  };

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "https://cb-chatbot.onrender.com/api/get-question-and-answer"
      );
      setQuestions(response.data.QuestionAndAnswer);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAnswer = async (question) => {
    try {
      setLoading(true);
      await simulateDelay();
      const response = await axios.post(
        `https://cb-chatbot.onrender.com/api/get-question-give-answer/${question}`
      );
      //   console.log(response.data.answer)
      setAnswer(response.data.answer);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  

  const handleShowScreen = () => {
    setScreenShow(!screenShow);
    setShowBot(!showBot);
    
    setShowContact(false); // Hide the contact form when switching back to chatbot
  };

  const handleQuestionClick = async (question) => {
    setSelectedQuestion(question);
    await fetchAnswer(question);
  };


  const showContactHandle = () => {
    setShowContact(true);
  };

  return (
    <div className="main-screen ">
      <div className="chota-screen  chatbotfix flex relative w-[470px] min-h-[470px] ">
        <div className={`gif-div h-full  ${!showBot ? "hidden" : "block"}`}>
          <img
            src={chatBotGif}
            onClick={handleShowScreen}
            className="w-full h-full"
            alt="gif"
          />
        </div>
        <div
          className={`screen-div  w-full ${
            !screenShow ? "hidden" : "block"
          }`}
        >
          <div className="screen-hai ">
            <div className="two-screen">
              {showContact ? (
                <Chatbotcall setShowContact={setShowContact}/>
              ) : (
                <>
                <ChatbotQuestion
                  setScreenShow={setScreenShow}
                  questions={questions}
                  handleQuestionClick={handleQuestionClick}
                />
                <div>
                    {selectedQuestion && (
                    <div className="mt-4 p-4">
                      <p className="font-bold">Selected Question:</p>
                      <p>{selectedQuestion}</p>
                      <p className="font-bold mt-2">Answer:</p>
                      {loading ? <p>Loading...</p> : <p>{answer}</p>}
                    </div>
                  )}
                </div>
                </>
                
              )}
            </div>
            
            <div>
         {showContact ? (
             <button
             onClick={showContactHandle}
             className="ml-5 hidden bg-blue-500 text-white p-2 rounded"
           >
            Close
           </button>
         ):(
            <button
            onClick={showContactHandle}
            className="ml-5 bg-blue-500 text-white p-2 rounded"
          >
           Contact Now
          </button>
         )

         }
        </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Chatbot;
