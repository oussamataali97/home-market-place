import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'


function SignUp() {
  const [showPassword,setShowPassword]=useState(false)
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
  })


  const {name,email,password}=formData;

  const navigate=useNavigate()
  const handleChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))

  }
  return (
      <>
        <div className="pageContainer max-w-xl mx-auto p-3">
          <h1 className=' text-2xl font-bold m-5' >Welcome Dear </h1>
          <div className='shadow-xl p-5 rounded-2xl'>
          <form>

          <div className="form-control ">
                <label className="label">
                  <span className="label-text font-semibold">Your Name :</span>
                </label>
                <label className="input-group">
                  <input type="text" placeholder="info@site.com"  onChange={handleChange} value={name} id='name' className="input input-bordered w-full" />
                </label>
              </div>
            <div className="form-control ">
                <label className="label">
                  <span className="label-text font-semibold">Your Email :</span>
                </label>
                <label className="input-group">
                  <input type="email" placeholder="info@site.com"  onChange={handleChange} value={email} id='email' className="input input-bordered w-full" />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-semibold">Your Password :</span>
                </label>
                <label className="input-group relative">
                  
                  <input type={showPassword ? 'text' : 'password'} placeholder="password" onChange={handleChange} value={password} id='password' className="input input-bordered w-full" />
                  {showPassword ? <AiFillEyeInvisible className='absolute  top-2 right-0 mr-2 cursor-pointer hover:text-lime-500' onClick={()=>setShowPassword((prevState)=>!prevState)} size={30}/>
                :<AiFillEye className='absolute  top-2 right-0 mr-2 cursor-pointer hover:text-lime-500' onClick={()=>setShowPassword((prevState)=>!prevState)} size={30}/>  
                }
                </label>
               
              </div>
             
              <button className='btn bg-lime-600 hover:bg-lime-700 block border-none w-full mt-6'>Sign UP</button>
          </form>
          <Link to='/sign-in'><p className='text-center text-lime-600 mt-10 font-bold block'> Already Have account ? Sign In </p></Link>

          </div>
          
        </div>

      </>
  )
}

export default SignUp
