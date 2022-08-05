import React from 'react'
import background from '../assets/jpg/hero.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import Button from '../components/Button';
import {Link} from 'react-router-dom'
import Home from '../components/Home';


function Explore() {
  const images = [
    { url: "images/1.jpg" },
    { url: "images/2.jpg" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },

  ];
  

  return (
    <>
    <div className="hero min-h-screen " style={{backgroundImage: `url(${background})`,backgroundSize:'cover'}}>
<div className="hero-overlay bg-opacity-0">
  
</div>


<div className="hero-content text-center text-neutral-content">
  <div className="max-w-3xl">
    <h1 className="mb-5 text-xl md:text-5xl font-bold text-center bg-white text-gray-800 rounded-full p-5">Find Real Estate That <span className='text-lime-400'> Suit You</span> </h1>
    <p className="mb-5 ">Sell or Rent your House For Free with Us </p>
    <div className=" ">
    <Link to='/sign-in'><Button title='Get Started'/></Link>
    </div>
  <div className="  hidden md:flex items-center justify-evenly font-bold mt-5 items-stretch">
        <div className="first bg-red-500  rounded-2xl px-5 py-2 flex flex-col md:items-start items-center justify-start	">
          <p> 1200<span className='text-red-200 font-bold'>+</span></p>
          <p>Award wining</p>
        </div>
        <div className="second  first bg-red-500  opacity-90 rounded-2xl px-5 py-2 items-center  flex flex-col md:items-start justify-start">
          <p> 4500<span className='text-red-200  font-bold'>+</span></p>
          <p>Houses</p>
        </div>
        <div className="third first bg-red-500 opacity-90 rounded-2xl px-5 py-2 items-center  flex flex-col md:items-start justify-start">
        <p> 240<span className='text-red-200  font-bold'>+</span></p>
          <p>Different Location</p>
        </div>
  </div>

 
  </div>
</div>

</div>



  <Home/>
  </>
  )
}

export default Explore
