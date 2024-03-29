import React from 'react'

const Logout = () => {

    const logoutHandle = () =>{
        sessionStorage.clear()
        localStorage.clear()
        window.location.href = '/'
    }

  return (
    <div className='user-dashbord'>
      <div className="logout-box">
        <button className='btn-grad btn-height' onClick={logoutHandle}>LOG OUT</button>
      </div>
    </div>
  )
}

export default Logout
