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
            poster="https://images.pexels.com/videos/3773486/decoration-design-estate-furniture-3773486.jpeg?auto=compress&cs=tinysrgb&w=1440"
          >
            <source
              src="https://vod-progressive.akamaized.net/exp=1660151660~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3522%2F15%2F392612459%2F1664011326.mp4~hmac=57aaa3d3bd5052d275175e121693037af0b94e1cf6434e0e74b55880fc1afbc8/vimeo-prod-skyfire-std-us/01/3522/15/392612459/1664011326.mp4"
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
            poster="https://images.pexels.com/videos/4301618/pexels-photo-4301618.jpeg?auto=compress&cs=tinysrgb&w=1440"
          >
            <source
              src="https://vod-progressive.akamaized.net/exp=1660151738~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2876%2F16%2F414380290%2F1782731090.mp4~hmac=b997776aa6301e049751f064de654865a432b035e94a1f40b83a2bf01641c991/vimeo-prod-skyfire-std-us/01/2876/16/414380290/1782731090.mp4"
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
