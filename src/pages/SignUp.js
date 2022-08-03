import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {db} from '../firebase.config'
import { doc, setDoc,serverTimestamp } from "firebase/firestore"; 
import {toast } from 'react-toastify';
import Oauth from '../components/Oauth';




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

  const onSubmit= async(e)=>{
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password) 
      const user=userCredential.user

      updateProfile(auth.currentUser,{
        displayName:name
      }) 

      const dataCopy={...formData}
      delete  dataCopy.password
      dataCopy.timestamp =serverTimestamp()
      await setDoc(doc(db,"users",user.uid),dataCopy)
      toast.success('Registration done !')

      navigate('/') 
      


    } catch (error){
      toast.error('Something wrong with  registartion',{
        autoClose: 2000,
      })
    }

  }

  return (
      <>
        <div className="shadow-xl pageContainer max-w-xl mx-auto p-3">
          <p className=' text-2xl font-bold m-5 text-red-400' >Register. <br/> <span className='font-light text-xl text-gray-700'> And enjoy life during the time you just saved!

</span></p>
          <div className=' p-3 rounded-2xl'>
          <form onSubmit={onSubmit} >

          <div className="form-control ">
                <label className="label">
                  <span className="label-text font-semibold">Your Name :</span>
                </label>
                <label className="input-group">
                  <input type="text" placeholder="John Doe .. "  onChange={handleChange} value={name} id='name' className="input input-bordered w-full" />
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
          <div className="google-auth text-center">
            <Oauth/>
          </div>
          <Link to='/sign-in'><p className='text-center text-lime-600 mt-3 font-bold block'> Already Have account ? Sign In </p></Link>

          </div>
          
        </div>

      </>
  )
}

export default SignUp
