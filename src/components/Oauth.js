import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import googleicon from './../assets/google.png'
import { GoogleAuthProvider,getAuth ,signInWithPopup} from "firebase/auth";
import { doc, setDoc,getDoc, serverTimestamp } from "firebase/firestore"; 
import {db} from '../firebase.config'
import {toast } from 'react-toastify';




function Oauth() {
    const location=useLocation()
    const navigate=useNavigate()
    

    const onClickGoogle=async()=>{

        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();

            const result= await signInWithPopup(auth, provider)
            const user = result.user;
                //Check for user
            const getRef=doc(db,'users',user.uid)
            const docSnap=await getDoc(getRef)
                //if user dosent exist add him to database
            if(!docSnap.exists()){
                await setDoc(doc(db,'users',user.uid),{
                    name:user.displayName,
                    email:user.email,
                    timestamp:serverTimestamp()
                })
            }
            navigate('/')
        } catch (error) {
            toast.error('Could not authorize with Google !',{
                autoClose: 1000,
            })
        }
    }
  return (
    <div className='mt-5'>
      <p className='font-bold'>Sign  {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
      <button className='mt-2 bg-lime-200 p-4 rounded-full hover:bg-red-200' onClick={onClickGoogle}><img src={googleicon} width={40} alt="" /></button>
    </div>
  )
}

export default Oauth
