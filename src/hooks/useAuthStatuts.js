import {useEffect,useState,useRef} from 'react'
import {getAuth,onAuthStateChanged} from 'firebase/auth'

export const useAuthStatuts =()=> {
    const [loggedIn,setLoggedIn]=useState(false)
    const [checkStatut,setCheckStatus]=useState(true)
    const isMounted=useRef()
    useEffect(()=>{
        if(isMounted){
            const auth=getAuth()
            onAuthStateChanged(auth,(user)=>{
                if(user){
                setLoggedIn(true)
                }
                setCheckStatus(false)
               
            })
        }
        return ()=>{
            isMounted.current=false
        }
   

    },[isMounted])
  return {loggedIn,checkStatut}
}




