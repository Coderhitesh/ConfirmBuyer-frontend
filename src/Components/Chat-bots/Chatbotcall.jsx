import { useState } from "react";

const Chatbotcall = ({setShowContact}) => {

    const [formdata,setFormdata] = useState({
        Name:"",
        Email: "",
        Contact: '',
        BussinessCategory  : ''
    })

    const sumbitHandle = (e)=>{
        e.preventDefault()
        console.log(formdata)
    }

    const onchangeHandle = (event)=>{
        setFormdata(prevData=>{
            return{...prevData,[event.target.name]: event.target.value}
        })
    }
    const closecontact = () => {
        console.log("i am hit");
        setShowContact(false); // Uncomment this line to close the contact form
      };
  return (
    <div>
      <ul className="p-5 flex relative flex-col">
        <div className="heading mb-5">
          <span>Contact Us</span>
        </div>
        <form className=" chatbotform h-full ">
          <input type="text" name="Name" onChange={onchangeHandle} placeholder="Enter Your Name" value={formdata.Name} />
          <input type="email" name="Email" onChange={onchangeHandle} placeholder="Enter Your Email" value={formdata.Email} />
          <input type="text" name="Contact" onChange={onchangeHandle} placeholder="Enter Your Contact No." value={formdata.Contact} />
          <input type="text" name="BussinessCategory" onChange={onchangeHandle} placeholder="Write Your Bussiness Category" value={formdata.BussinessCategory} />
          <div className=" text-center">
          <button onClick={sumbitHandle} className=" rounded-xl bg-gray-900 text-white py-3 px-5 hover:bg-gray-700">Contact Me</button>
          </div>
          <div className="closebtn" onClick={closecontact}>
          <ion-icon name="close-circle-outline"></ion-icon>
          </div>
        </form>
      </ul>
    </div>
  );
};

export default Chatbotcall;
