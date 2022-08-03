import React from 'react'
import {Navigate , Outlet} from 'react-router-dom'
import  {useAuthStatuts} from '../hooks/useAuthStatuts'


function PrivateRoute() {
    const {loggedIn,checkStatut} =useAuthStatuts()

    if (checkStatut){
        return <h1>Loading ...</h1>
    }

    return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
