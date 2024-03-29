const ChatbotQuestion = ({questions,handleQuestionClick,setScreenShow}) => {
    const closecontact = () => {
        console.log("i am hit");
        setScreenShow(false); // Uncomment this line to close the contact form
      };
  return (
    <div className="bg-gray-200">
      <ul
        className={` overflow-y-auto max-h-[420px] bg-gray-100 p-4 rounded `}
      >
        {questions &&
          questions.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2 border-b border-gray-300"
              onClick={() => handleQuestionClick(item.question)}
            >
              {item.question || "not-availabe"}
            </li>
          ))}
      </ul>
   
          <div className="closebtn" onClick={closecontact} >
          <ion-icon name="close-circle-outline"></ion-icon>
          </div>
    </div>
  );
};

export default ChatbotQuestion;
