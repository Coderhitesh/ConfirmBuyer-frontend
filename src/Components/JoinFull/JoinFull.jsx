import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './joinfull.css'

const JoinFull = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        contactNumber: '',
        companyName: '',
        companyCity: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [mobile, setMobile] = useState('');
    const Pattern = /^\d{0,10}$/;

    const handleChangeM = (e) => {
        const inputValue = e.target.value;

        if (Pattern.test(inputValue)) {
            setMobile(inputValue);
        } else {
            // Optionally, you can show an alert or provide feedback for invalid input
            toast.error('Please enter a valid number');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mobile) {
            toast.error('Contact Number is required');
            return;
        }
        const Numberss = mobile;
        formData.contactNumber = Numberss;

        try {
            const response = await axios.post('https://confirmbuyers.onrender.com/api/Register', {
                YourName: formData.fullName,
                CompanyName: formData.companyName,
                Mobilenumber: Numberss,
                Email: formData.email,
                CompanyCity: formData.companyCity,
                Password: formData.password,
            });

            const LoginToken = response.data.token;
            const Email = formData.email;
            sessionStorage.setItem('token', LoginToken);
            toast.success('Register');
            // Reset the form data and mobile state after successful submission
            setFormData({
                fullName: '',
                email: '',
                password: '',
                contactNumber: '',
                companyName: '',
                companyCity: '',
            });
            setMobile('');
            // Redirect to the next page
            window.location.href = `/OtpValidate/${Email}`;
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error('Email or Contact Number is already in Use');
            }
            console.log(error);
        }
    };

    return (
        <>
            <Box className="joinfull-main">
                <div className="container">
                    <Typography variant="h3" className="text-grey-500 text-center font-bolders">
                        Join Now
                    </Typography>
                    <div className="joinfull-main-box">
                        <div className="joinfull-bg">
                            <img src={"https://i.ibb.co/m9Z1RnR/bg.png"} alt="join-bg" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            {Object.keys(formData).map((key, index) => (
                                <React.Fragment key={index}>
                                    {key === 'contactNumber' ? (
                                        <>
                                            <label className="block capitalize text-sm font-medium text-gray-700">Contact Number</label>
                                            <input
                                                type="text"
                                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                                name="contactNumber"
                                                value={mobile}
                                                onChange={handleChangeM}
                                            />
                                        </>
                                    ) : (
                                        <div key={index} className="mb-4">
                                            <label className="block capitalize text-sm font-medium text-gray-700">{key}</label>
                                            <input
                                                type="text"
                                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                                name={key}
                                                required
                                                value={formData[key]}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                            <button className="back text-white px-4 py-2 hover:bg-green-700 inline-flex justify-center gap-2 items-center mt-2">
                                <span>Join Now</span>
                            </button>
                        </form>
                    </div>
                </div>
            </Box>
        </>
    );
};

export default JoinFull;