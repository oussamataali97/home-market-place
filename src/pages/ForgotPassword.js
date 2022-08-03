import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'
import { async } from '@firebase/util'


function ForgotPassword() {
  const [email,setEmail]=useState('')

  const handleChange=(e)=>{
    setEmail(e.target.value)

  } 

  const onSubmit =async(e)=>{
    e.preventDefault()
    try {
      const auth=getAuth()
      await sendPasswordResetEmail(auth,email)
      toast.success('Email Sent !')
    } catch (error) {
      toast.error('Could not send Email reset password')
    }
  }
  return (
<>
        <div className="shadow-xl p-5 pageContainer max-w-xl mx-auto p-3 mt-5">
          <h1 className=' text-2xl font-bold m-5 text-red-600 text-center' >Forgot Password ?</h1>
          <p className=' text-2xl font-bold m-5 text-center' ><span className='font-light text-xl '> No worries, we will send you reset instructions
</span></p>
          <div className=' rounded-2xl'>
          <form onSubmit={onSubmit}>
            <div className="form-control ">
                <label className="label">
                  <span className="label-text font-semibold">Email :</span>
                </label>
                <label className="input-group">
                  <input type="email" placeholder="info@site.com"  onChange={handleChange} value={email} id='email' className="input input-bordered w-full" />
                </label>
              </div>
              <button className='btn bg-lime-600 hover:bg-lime-700 block border-none w-full mt-6'>Reset Password</button>

            </form>

          </div>
          
        </div>

      </>
  )
}

export default ForgotPassword
