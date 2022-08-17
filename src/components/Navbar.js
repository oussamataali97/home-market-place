import React from 'react'
import logo from './../assets/jpg/logo.png'
import {MdExplore,MdLocalOffer} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
import {Link,useLocation} from 'react-router-dom'
import { useEffect ,useState} from 'react'
import { themeChange } from 'theme-change'
function Navbar() {

  return (
    <div className=" md:flex-row flex-col mt-1 md:mt-0 navbar bg-base-50 shadow-md p-0 md:p-2">
  <div className="flex-1">
    <Link to='/' className="cursor-pointer ml-4"><img src={logo} width={80} alt="logo" /></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-1 ">
      <li><Link to="/" className='mr-2 hover:bg-lime-200'> <MdExplore size={20} color="green"  />Explore</Link></li>
      <li><Link to="/offers" className='mr-2 hover:bg-lime-200'> <MdLocalOffer size={20} color="green" />Offers</Link></li>
      <li><Link to="/profile" className='mr-2 hover:bg-lime-200'> <FaUserAlt size={20} color="green" />Profile</Link></li>
	


	

    </ul>
  </div>
</div>
  )
}

export default Navbar
