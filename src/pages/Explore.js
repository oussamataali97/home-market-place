import React from 'react'
import background from '../assets/jpg/hero.jpg'
import Button from '../components/Button';
import {Link} from 'react-router-dom'
import Home from '../components/Home';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import sellImage from '../assets/jpg/sell.jpeg'
import rentImage from '../assets/jpg/rent.jpeg'
import rentVideo from '../assets/videos/rent.mp4'
import sellVideo from '../assets/videos/sell.mp4'



 

function Explore() {


  return (
    <>

    <div className="hero min-h-screen " style={{backgroundImage: `url(${background})`,backgroundSize:'cover'}}>
<div className="hero-overlay bg-opacity-0 ">
  
</div>


<div className="hero-content text-center text-neutral-content">
  <div className="max-w-3xl">
    <h1 className="mb-5 text-xl md:text-5xl font-bold text-center bg-white text-gray-800 rounded-full p-5">Find Real Estate That <span className='text-lime-400'> Suit You</span> </h1>
    <p className="mb-5 ">Sell or Rent your House For Free with Us </p>
    <div className=" ">
    <Link to='/profile'><Button title='Get Started'/></Link>
    </div>
  <div className="  hidden md:flex justify-evenly font-bold mt-5 items-stretch">
        <div className="first bg-red-500  rounded-2xl px-5 py-2 flex flex-col md:items-start items-center justify-start	">
          <p>1200<span className='text-red-200 font-bold'>+</span></p>
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
<p className='font-bold text-2xl px-5 pt-1 mt-5'>Categories</p>
<div className="img-card grid  md:grid-cols-2 mx-auto gap-5 p-5 ">
 
<Link to ='/category/rent'  className='shadow-xl'>
  <Card component="li" sx={{ minWidth: 300,minHeight:300 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster={rentImage}
          >
            <source
              src={rentVideo}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'end', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="xl"
            textColor="#fff"
            fontSize='1.5rem'
          
          >
            Place for Rent
          </Typography>
        </CardContent>
      </Card>
      
      </Link>

      <Link to='/category/sell' className='shadow-xl'>
        <Card component="li" sx={{ minWidth: 300,minHeight:300}}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster={sellImage}
          >
            <source
              src={sellVideo}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'end', gap: 1 }}>
          <Typography
            level="h6"
            fontSize='1.5rem'
            fontWeight="xl"
            textColor="#fff"
           
          >
            Place for Sell
          </Typography>
        </CardContent>
      </Card>
      </Link>

</div>



  <Home/>
  </>
  )
}

export default Explore
