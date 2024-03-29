import React from 'react'
import './JoinUs.css'
import bg from '../joinUS/joinus-bg.png'

const JoinUs = () => {
    return (
        <>
            <div className="login-container">
                <div className="container">
                    <div className="main-login-box">
                        <div className="login-form-main">
                            <div className="heading">
                                <span>Join Now</span>
                            </div>
                            <form action="">
                                <input type='text' placeholder='Enter Your Name' />
                                <input type="email" placeholder='Enter Your Email' />
                                <input type="number" placeholder='Enter Your Phone Number' />
                                <input type="password" name="" placeholder='Enter Your Password' id="" />
                                <div className="button-box">
                                    <div className="up-btn">
                                        <button className='btn-grad'>Register Now</button>
                                    </div>
                                    <hr />
                                    <div className="down-link">
                                        <span>You have an account ?</span>
                                        <a href="">Login</a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="right-bg">
                            <img src={bg} alt="JoinUs-bg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinUs
