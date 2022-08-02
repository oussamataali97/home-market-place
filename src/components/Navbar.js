import React from 'react'
import logo from './../assets/jpg/logo.png'
import {MdExplore,MdLocalOffer} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
import {Link,useLocation} from 'react-router-dom'
function Navbar() {
  return (
 
    <div className="navbar bg-base-50 shadow-md p-0 md:p-3">
  <div className="flex-1">
    <Link to='/' className="cursor-pointer ml-4"><img src={logo} width={80} alt="logo" /></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/"> <MdExplore size={20} color="green" />Explore</Link></li>
      <li><Link to="/offers"> <MdLocalOffer size={20} color="green" />Offers</Link></li>
      <li><Link to="/profile"> <FaUserAlt size={20} color="green" />Profile</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar
