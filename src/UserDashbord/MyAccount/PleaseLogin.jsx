import React from 'react'
import "./pleaseLogin.css"
import './userdashboard.css'
import bg from './login-bg.avif'

const PleaseLogin = () => {
    // const location = window.location.pathname

    // localStorage.setItem('path' , location)
    // console.log(location)

    // window.location.reload()

    const redirectHandle = ()=>{
        window.location.href="/login";
    }
  return (
    <div className='user-dashbord pleaselogin-main'>
      <span className='span-underline'>Please Login to view your dashboard</span>
      <div className="pleaselogin-detail">
        <div className="please-login-bg">
            <img src={bg} alt="Please Login" />
        </div>
        <div className="pleaselogin-btn">
            <button className='btn-grad btn-height' onClick={redirectHandle}>Login</button>
        </div>
      </div>
    </div>
    
  )
}

export default PleaseLogin
