import React from 'react'
import img1 from '../assets/jpg/ifrane.jpg'
import img2 from '../assets/jpg/tanger.jpg'
import img3 from '../assets/jpg/casa.jpg'
import img4 from '../assets/jpg/mrakch.jpg'
import {SiVerizon} from 'react-icons/si'
import banner from '../assets/jpg/banner.svg'
import hero from '../assets/jpg/HeroSell.png'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaPinterest} from 'react-icons/fa'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';


function Home() {
  return (
    <>
    <div className=' space-y-5 p-5 '>
        <p className='text-center text-4xl font-bold mt-5  '>Explore our most popular cities</p>
        <p className='text-center font-light text-lg'>See what these cities have to offer and rent the perfect place</p>
      <div className="img-card grid  md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 ">
        
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
    </Card>    <Card sx={{ minHeight: '280px', minWidth: 320 }}>
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
        
       

      </div>
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
                    <li className='flex'><SiVerizon className='mr-5' size={20} color={"lime"}/>Reach over 13 million high-quality renters actively searching on our network</li>
                    <li className='flex'><SiVerizon className='mr-5' size={20} color={"lime"}/>Screen renters with credit reports, background checks, and applications</li>
                    <li className='flex'><SiVerizon className='mr-5' size={20} color={"lime"}/>Collect rent online for seamless and secure payments Sponsor</li>
                </ul>
                <button className='btn block w-full bg-lime-500 border-none hover:bg-lime-400'>Learn More</button>


            </div>
            <div className="right shadow-xl p-10">
            <p className='text-3xl font-bold pt-5 text-black'>Multifamily Communities</p>
                <p className='text-lg py-3 font-semibold'>Advertise with us to optimize your leasing success.</p>
                <ul className='my-5'>
                    <li className='flex '><SiVerizon className='mr-5' size={20} color={"lime"}/>Reach over 13 million high-quality renters actively searching on our network</li>
                    <li className='flex '><SiVerizon className='mr-5' size={20} color={"lime"}/>Get exposure across our broad network of leading apartment search sites</li>
                    <li className='flex '><SiVerizon className='mr-5' size={20} color={"lime"}/>Receive ongoing support from a dedicated Account Manager </li>
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

    
    <div className="banner w-full bg-cover flex md:h-[20rem] lg:h-[36rem] h-[16rem] justify-start flex-col items-center" style={{backgroundImage: `url(${hero})`}}>
        <p className='text-center text-2xl md:text-5xl font-bold  mt-5 lg:mt-16   '>Sell your home with confidence</p>
        <p className='text-center font-light'>Zillow is making it simpler to sell your home and move forward.</p>

    </div>
    </>
  )
}

export default Home
