import React from 'react'

import { Autoplay } from 'swiper';
import {MdVerified} from 'react-icons/md'
import banner from '../assets/jpg/banner.svg'
import hero from '../assets/jpg/HeroSell.png'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaPinterest} from 'react-icons/fa'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import { Navigation, Pagination,EffectCoverflow } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";




function Home() {
  return (
    <>
    <div className=' space-y-5 p-5 '>
        <p className='text-center text-4xl font-bold mt-5  '>Explore our most popular cities</p>
        <p className='text-center font-light text-lg'>See what these cities have to offer and rent the perfect place</p>
        <Swiper
        modules={[Autoplay,Pagination,Navigation,EffectCoverflow]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        loop={true}
        navigation
      pagination={{ clickable: true }}
        autoplay={{
          delay:2000,
          disableOnInteraction:false
          
         
          
        }}
      breakpoints={{
        1024: {
         slidesPerView: 3,
         spaceBetween: 30
        },
        768: {
         slidesPerView: 2,
         spaceBetween: 10
        },
        640: {
         slidesPerView: 1,
         spaceBetween: 10
       },
       320: {
        slidesPerView: 1,
        spaceBetween: 10
       }
      }}
    >
       <p className=' mt-9  '></p>


<SwiperSlide>
      <Card sx={{ minHeight: '280px', minWidth: 320 }}>
      <CardCover>
        <img
          src="https://unsplash.com/photos/wjOMf53cv88/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8aWZyYW5lfGVufDB8MHx8fDE2NjAwNDkxNjE&force=true&w=640"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Town Center
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          Ifrane, MA
        </Typography>
      </CardContent>
    </Card>
</SwiperSlide>

<SwiperSlide>
    <Card sx={{ minHeight: '280px', minWidth: 320 }}>
      <CardCover>
        <img
          src="https://unsplash.com/photos/CFKksjYRSQ8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bWFycmFrZXNofGVufDB8MHx8fDE2NjAwNDA5MjQ&force=true&w=640"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          El koutoubia
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          Marrakesh, MA
        </Typography>
      </CardContent>
    </Card>  
    </SwiperSlide>
    
    <SwiperSlide>
   <Card sx={{ minHeight: '280px', minWidth: 320 }}>
      <CardCover>
        <img
          src="https://unsplash.com/photos/18fvXEV1R_A/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8Y2FzYWJsYW5jYXxlbnwwfDB8fHwxNjYwMDQ5Mzc0&force=true&w=640"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Mosque Hassan II
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          Casablanca, MA
        </Typography>
      </CardContent>
    </Card>
</SwiperSlide>


<SwiperSlide>
    <Card sx={{ minHeight: '280px', minWidth: 320 }}>
      <CardCover>
        <img
          src="https://unsplash.com/photos/CFKksjYRSQ8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bWFycmFrZXNofGVufDB8MHx8fDE2NjAwNDA5MjQ&force=true&w=640"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          El koutoubia
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          Marrakesh, MA
        </Typography>
      </CardContent>
    </Card>  
    </SwiperSlide>


    <SwiperSlide>
   <Card sx={{ minHeight: '280px', minWidth: 320 }}>
      <CardCover>
        <img
          src="https://unsplash.com/photos/uxV3wDMyccM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYwNzQwNzgx&force=true&w=640"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Old Medina 
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          Essaouira, MA
        </Typography>
      </CardContent>
    </Card>
</SwiperSlide>



<SwiperSlide>
   <Card sx={{ minHeight: '280px', minWidth: 320 }}>
      <CardCover>
        <img
          src="https://scontent.frba1-1.fna.fbcdn.net/v/t39.30808-6/296347647_10160208937474362_3568820926771596447_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFiCihEBfQE1w8FBYnjhf9qm2-_5M0fC3mbb7_kzR8LecF-kZXw-fRlV23qn2gUNBsIOrojFN_gNSAQlYrGZAoL&_nc_ohc=bI-Bx2d592YAX8beOIt&_nc_zt=23&_nc_ht=scontent.frba1-1.fna&oh=00_AT9klLmjNZLHDC1A56Z7DnZgvFWXwdj0rgTXcnJpN35oXw&oe=6301AE56"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Lkarkor Palace 
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          Errachidia, MA
        </Typography>
      </CardContent>
    </Card>
</SwiperSlide>
    
    <SwiperSlide>
   <Card sx={{ minHeight: '280px', minWidth: 320 }}>
      <CardCover>
        <img
          src="https://unsplash.com/photos/JuvWdpZd2Jo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYwNzQwNjM0&force=true&w=640"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Beach Nador
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          Nador, MA
        </Typography>
      </CardContent>
    </Card>
</SwiperSlide>





<SwiperSlide>
    <Card sx={{ minHeight: '280px', minWidth: 320 }}>
      <CardCover>
        <img
          src="https://unsplash.com/photos/NXNYSZSltck/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dGFuZ2VyfGVufDB8fHx8MTY2MDA0OTA0OA&force=true&w=640"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Old Medina
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon   />}
          textColor="neutral.300"
        >
          Tanger, MA
        </Typography>
      </CardContent>
    </Card>
       </SwiperSlide> 
       
      

      </Swiper>
    </div>

        
    <div className="equipemnt max-w-6xl mx-auto my-10 ">
        <div className="text-center">
            <p className='md:text-5xl text-3xl font-bold '>Reach quality renters <br/> and fill vacancies faster.</p>
            <p className='md:text-2xl text-xl font-light mt-5'>We have marketing solutions for landlords, agents, and multifamily professionals.</p>

        </div>
        <div className="community flex flex-col md:flex-row gap-5 p-10">
            <div className="left shadow-xl p-10">
                <p className='text-3xl font-bold pt-5 text-black'>Landlords and Agents</p>
                <p className='text-lg py-3 font-semibold'>Manage your rentals with our free leasing tools.</p>
                <ul className='my-5'>
                    <li className='flex items-center justify-center'><MdVerified className='mr-5'  size={20} color={"lime"}/>Reach over 13 million high-quality renters actively searching on our network</li>
                    <li className='flex items-center justify-center'><MdVerified className='mr-5' size={20} color={"lime"}/>Screen renters with credit reports, background checks, and applications</li>
                    <li className='flex items-center justify-center'><MdVerified className='mr-5' size={20} color={"lime"}/>Collect rent online for seamless and secure payments Sponsor</li>
                </ul>
                <button className='btn block w-full bg-lime-500 border-none hover:bg-lime-400'>Learn More</button>


            </div>
            <div className="right shadow-xl p-10">
            <p className='text-3xl font-bold pt-5 text-black'>Multifamily Communities</p>
                <p className='text-lg py-3 font-semibold'>Advertise with us to optimize your leasing success.</p>
                <ul className='my-5'>
                    <li className='flex '><MdVerified className='mr-5'  size={20} color={"lime"}/>Reach over 13 million high-quality renters actively searching on our network</li>
                    <li className='flex '><MdVerified className='mr-5' size={20} color={"lime"}/>Get exposure across our broad network of leading apartment search sites</li>
                    <li className='flex '><MdVerified className='mr-5' size={20} color={"lime"}/>Receive ongoing support from a dedicated Account Manager </li>
                </ul>
                <button className='btn block w-full bg-lime-500 border-none hover:bg-lime-400'>Learn More</button>
            </div>
        </div>

    </div>

    <div className="banner w-full h-64 bg-fixed flex justify-center  bg-no-repeat bg-cover flex-col items-center" style={{backgroundImage: `url(${banner})`}}>
        <p className='text-center text-4xl font-bold '>Home Market<span className='text-lime-500'>.</span></p>
        <div className="icons flex space-x-8 mt-5 ">
            <a href="#" ><FaFacebook size={40}  color='' className=' hover:text-lime-500'/></a>
            <a href="#"><FaInstagram size={40} className='hover:text-lime-500'/></a>
            <a href="#"><FaPinterest size={40} className='hover:text-lime-500'/></a>
            <a href="#"><FaTwitter size={40} className='hover:text-lime-500'/></a>
            <a href="#"><FaYoutube size={40} className='hover:text-lime-500'/></a>

        </div>
    </div>

    
    <div className="banner w-full bg-cover bg-top flex md:h-[20rem] lg:h-[24rem] h-[16rem] justify-start flex-col items-center" style={{backgroundImage: `url(${hero})`}}>
        <p className='text-center text-2xl md:text-5xl font-bold  mt-5 lg:mt-16   '>Sell your home with confidence</p>
        <p className='text-center font-light'>Home Market is making it simpler to sell your home and move forward.</p>

    </div>
    </>
  )
}

export default Home
