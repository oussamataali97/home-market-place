import React from 'react'
import img1 from '../assets/jpg/ifrane.jpg'
import img2 from '../assets/jpg/tanger.jpg'
import img3 from '../assets/jpg/casa.jpg'
import img4 from '../assets/jpg/mrakch.jpg'
import {SiVerizon} from 'react-icons/si'
import banner from '../assets/jpg/banner.svg'
import hero from '../assets/jpg/HeroSell.png'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaPinterest} from 'react-icons/fa'


function Home() {
  return (
    <>
    <div className='text-center space-y-5 p-5 '>
        <p className='text-4xl font-bold mt-5  '>Explore our most popular cities</p>
        <p className='font-light text-lg'>See what these cities have to offer and rent the perfect place</p>
      <div className="img-card grid  md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 ">
        
            <div className="card w-full bg-base-100 shadow-xl rounded-xl ">
            <figure><img src={img1} alt="Shoes" className='md:h-56 md:w-full '/></figure>
            <div className="card-body">
                <h2 className=" font-bold mx-auto border-b-2 w-16 border-red-400 text-center mx-auto border-b-2 w-16 border-red-400">Ifrane</h2>
                <p className='font-light text-xl'>Ifrane is a town in Morocco’s Middle Atlas Mountains. It’s known for its alpine-style architecture and nearby ski slopes and forests. A stone statue of a lion near leafy Parc la Prairie is a well-known</p>
                
            </div>
            </div>
        
        
                    <div className="card w-full  bg-base-100 shadow-xl">
            <figure><img src={img2} alt="Shoes" className='md:h-56 md:w-full ' /></figure>
            <div className="card-body">
                <h2 className="font-bold mx-auto border-b-2 w-16 border-red-400  ">Tanger</h2>
                <p className='font-light text-xl'>Tangier, a Moroccan port on the Strait of Gibraltar, has been a strategic gateway between Africa and Europe since Phoenician times.</p>
                
            </div>
            </div>
      
                    <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img3} alt="Shoes" className='md:h-56 md:w-full'/></figure>
            <div className="card-body">
                <h2 className=" font-bold mx-auto border-b-2 w-24 border-red-400 text-center">Casablanca</h2>
                <p  className='font-light text-xl'>Casablanca is a port city and commercial hub in western Morocco, fronting the Atlantic Ocean. The city's French colonial legacy is seen in its downtown Mauresque architecture,</p>
                
            </div>
            </div>
        
                    <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img4} alt="Shoes" className='md:h-56 md:w-full' /></figure>
            <div className="card-body ">
                <h2 className=" font-bold mx-auto border-b-2 w-24 border-red-400 text-center text-center ">Marrakesh</h2>
                <p className='font-light text-xl'>Marrakesh, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire</p>
                
            </div>
            </div>
        
       

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
