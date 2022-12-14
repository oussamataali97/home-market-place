import React from 'react'
import {getAuth,updateProfile} from 'firebase/auth'
import {FiLogOut} from 'react-icons/fi'
import {useState} from 'react'
import {db} from '../firebase.config'
import { updateDoc,doc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import {HiHome} from 'react-icons/hi'
import {IoIosArrowForward} from 'react-icons/io'
import {FiEdit} from 'react-icons/fi'


function Profile() {
  const navigate=useNavigate()
  const auth=getAuth()
  const [changeDetail,setChangeDetail]=useState(false)
  const [formData,setFormData]=useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email,
  })
  const {name,email}=formData

  const onLogout=()=>{
    auth.signOut()
    navigate('/sign-in')
  }
  const onSubmit= async()=>{
    try {
      if(auth.currentUser.displayName !== name){
          await updateProfile(auth.currentUser,{
            displayName:name,
          })

          const userRef=doc(db,'users',auth.currentUser.uid)
          await updateDoc(userRef,{
            name,
            email
          })


      }
      toast.success('Profile Updated',{
        autoClose: 2000,
        Transition:'flip',
      })

    } catch (error) {
      
      toast.error('Error withing Modify profile')
    }
  }


  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value

    }))    
  }
  

  return (
    <>
      <div className=" max-w-6xl mx-auto header flex justify-between items-center p-5">
            <h1 className='text-3xl font-bold underline'>My Profile</h1>
          
            <button className='btn btn-outline  btn-success rounded-full   '  onClick={onLogout}> <FiLogOut className='inline'/> Logout</button>
           
          </div>
      <div className="container max-w-4xl mx-auto p-4 mt-1">
        
          <hr className='mt-4 w-1/2 mx-auto'/>
        <div className="personal-info">
        <div className="titleinfos flex justify-between items-center mt-5">
        
            <h1 className='text-xl font-bold text-red-600'>Personal Details</h1>
          
            <button className='text-lime-400 font-bold hover:text-red-500 flex items-center justify-center' onClick={()=>{
              changeDetail && onSubmit()
              setChangeDetail((prevState=>!prevState))
            }}> <FiEdit className=' mr-1'/>{changeDetail ? 'Done ' : 'Edit'} </button>
           
          </div>
          <form onSubmit={onSubmit} className="mt-5">
          <div className="form-control ">
                <label className="label">
                  <span className="label-text font-semibold">Name :</span>
                </label>
                <label className="input-group">
                  <input type="email" placeholder="info@site.com" 
                  value={name}
                   disabled={!changeDetail}
                    id='name'
                    onChange={onChange}
                     className="input input-bordered w-full" />
                </label>
          </div>
          <div className="form-control ">
                <label className="label">
                  <span className="label-text font-semibold">Email :</span>
                </label>
                <label className="input-group">
                  <input type="email"   onChange={onChange} placeholder="info@site.com" value={email} disabled={!changeDetail} id='email' className="input input-bordered w-full" />
                </label>
          </div>
              
             
          </form>

        </div>
       
        <Link to='/create-listning' >
        <button className='btn btn-outline  glass p-2 md:w-96 mx-auto mt-5 hover:bg-red-400 flex justify-between items-center rounded-xl text-lg space-x-7 font-bold'>
          <HiHome/>
          <p>Buy or Rent your Home</p>
          <IoIosArrowForward/>
          </button>
        
        
        </Link>

      </div>
    </>
  )
}

export default Profile
