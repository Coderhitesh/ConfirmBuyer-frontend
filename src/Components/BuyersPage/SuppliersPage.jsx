import { useEffect, useState } from "react";
import callBackImg from './callback.jpg';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const SuppliersPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const [formdata, setFormdata] = useState({
        YourName: "",
        Number: "",
        YourProduct: "",
        YourSuitableTime: "",
        Email: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    };

    const handleCallBack = async (e) => {
        e.preventDefault();
        console.log(formdata);
        try {
            const response = await axios.post(
                "https://confirmbuyers.onrender.com/api/Supplier-callback",
                formdata
            );
            console.log(response.data);

            toast.success("Contact in Your Given time");
            setTimeout(() => {
                window.location.href="/Thanks-for-contact-us"
              }, 1000);
        } catch (error) {
            console.error(error);
            setFormdata('');
            toast.error(error.response.data.error);
        }
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className=" text-xl sm:text-5xl md:text-8xl text-center font-semibold mb-8">Get the Best <span className="text-violet-700">Suppliers</span> Services</h1>
            <p className="text-lg font-bold text-center mb-8">Find the best Suppliers <span className="text-violet-700">services you need</span> to help you successfully meet your product planning goals and deadlines.</p>
            <div className={`bg-white p-8 rounded-lg max-w-[1200px] w-full transform transition-transform duration-300`}>

                <div className="flex flex-col md:flex-row">
                    <img className="w-full md:w-1/2 mr-4" src={callBackImg} alt="Call Back Image" />
                    <form  className="w-full md:w-1/2">
                    <div className="w-full">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                name="YourName"
                                value={formdata.YourName}
                                onChange={handleInputChange}
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
                                name="Email"
                                value={formdata.Email}
                                onChange={handleInputChange}
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
                                name="Number"
                                value={formdata.Number}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessTime">
                                Business Time
                            </label>
                            <input
                                className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                                id="businessTime"
                                type="datetime-local"
                                placeholder="Business Time"
                                name="YourSuitableTime"
                                value={formdata.YourSuitableTime}
                                onChange={handleInputChange}
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
                                value={formdata.message}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>            <button onClick={handleCallBack} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md" >

                            Submit
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SuppliersPage;
