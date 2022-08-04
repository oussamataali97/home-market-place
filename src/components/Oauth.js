import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import googleicon from './../assets/google.png'

function Oauth() {
    const location=useLocation()
    const navigate=useNavigate()
  return (
    <div className='mt-5'>
      <p>Sign  {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
      <button className='mt-2 bg-lime-200 p-4 rounded-full hover:bg-red-200'><img src={googleicon} width={40} alt="" /></button>
    </div>
  )
}

export default Oauth
