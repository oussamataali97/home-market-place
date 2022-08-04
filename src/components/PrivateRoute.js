import React from 'react'
import {Navigate , Outlet} from 'react-router-dom'
import  {useAuthStatuts} from '../hooks/useAuthStatuts'
import { ThreeDots } from  'react-loader-spinner'


function PrivateRoute() {
    const {loggedIn,checkStatut} =useAuthStatuts()

    if (checkStatut){
        return  <p className='flex items-center justify-center h-screen pb-32'>
         <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
          </p>
    }

    return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
