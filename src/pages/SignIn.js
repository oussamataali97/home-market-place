import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import Oauth from '../components/Oauth';





function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })


  const { email, password } = formData;

  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))


  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if (userCredential.user) {
        toast.success(`Welcome Mr ${userCredential.user.displayName.toUpperCase()}`, {
          autoClose: 1000,
        })
        setTimeout(() => navigate('/'), 2000)

      }
    } catch (error) {
      toast.error('Something wrong with signing')
    }
  }

  return (
    <>
      <div className="pageContainer shadow-xl max-w-xl mx-auto p-3 my-3 ">
        <h1 className=' text-4xl font-bold m-5 text-center ' >Login</h1>
        <div className=' p-5 rounded-2xl'>
          <form onSubmit={onSubmit}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold">Your Email :</span>
              </label>
              <label className="input-group">
                <input type="email" placeholder="info@site.com" onChange={handleChange} value={email} id='email' className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold">Your Password :</span>
              </label>
              <label className="input-group relative">

                <input type={showPassword ? 'text' : 'password'} placeholder="password" onChange={handleChange} value={password} id='password' className="input input-bordered w-full" />
                {showPassword ? <AiFillEyeInvisible className='absolute  top-2 right-0 mr-2 cursor-pointer hover:text-lime-500' onClick={() => setShowPassword((prevState) => !prevState)} size={30} />
                  : <AiFillEye className='absolute  top-2 right-0 mr-2 cursor-pointer hover:text-lime-500' onClick={() => setShowPassword((prevState) => !prevState)} size={30} />
                }
              </label>
              <label className="label relative" >
                <Link to='/forgot-password'><span className="label-text font-semibold underline absolute top-0 right-0 py-2 text-lime-600">Forgot Password ?</span></Link>
              </label>
            </div>

            <button className='btn bg-lime-600 hover:bg-lime-700 block border-none w-full mt-6'>Sign In</button>
          </form>
          <div className="google-auth text-center">
            <Oauth className='text-center' />
          </div>


          <Link to='/sign-up'><p className='text-center text-lime-600 mt-5 font-bold block'> Sign Up instead</p></Link>


        </div>

      </div>

    </>
  )
}

export default SignIn
