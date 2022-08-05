import React from 'react'
import img1 from '../assets/jpg/maroc.jpg'
import img2 from '../assets/jpg/paris.jpg'
import img3 from '../assets/jpg/berlin.jpg'
import img4 from '../assets/jpg/roma.jpg'
import {SiVerizon} from 'react-icons/si'


function Home() {
  return (
    <>
    <div className='text-center space-y-5 p-5 '>
        <p className='text-4xl font-bold mt-5  '>Explore our most popular cities</p>
        <p className='font-light text-lg'>See what these cities have to offer and rent the perfect place</p>
      <div className="img-card flex-col md:flex-row flex mx-auto gap-5	 ">
        
            <div className="card w-full bg-base-100 shadow-xl ">
            <figure><img src={img1} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className=" font-bold text-center">Ouarzezate</h2>
                <p className='font-light text-xl'>Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and</p>
                
            </div>
            </div>
        
        
                    <div className="card w-full  bg-base-100 shadow-xl">
            <figure><img src={img2} alt="Shoes" height={19} /></figure>
            <div className="card-body">
                <h2 className="font-bold  ">Paris</h2>
                <p className='font-light text-xl'>Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic</p>
                
            </div>
            </div>
      
                    <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img3} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className=" font-bold text-center">Berlin</h2>
                <p  className='font-light text-xl'>Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War,</p>
                
            </div>
            </div>
        
                    <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img4} alt="Shoes"  /></figure>
            <div className="card-body ">
                <h2 className=" font-bold text-center text-center ">Rome</h2>
                <p className='font-light text-xl'>Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale</p>
                
            </div>
            </div>
        
       

      </div>
    </div>
        
    <div className="equipemnt max-w-6xl mx-auto my-10 ">
        <div className="text-center">
            <p className='text-5xl '>Reach quality renters <br/> and fill vacancies faster.</p>
            <p className='text-lg'>We have marketing solutions for landlords, agents, and multifamily professionals.</p>

        </div>
        <div className="community flex flex-col md:flex-rows gap-5 p-10">
            <div className="left shadow-xl p-10">
                <p className='text-3xl font-bold pt-5 text-black'>Landlords and Agents</p>
                <p className='text-lg py-3 font-semibold'>Manage your rentals with our free leasing tools.</p>
                <ul className='my-5'>
                    <li className='flex'><SiVerizon className='mr-5' size={20} color={"lime"}/>Reach over 13 million high-quality renters actively searching on our network</li>
                    <li className='flex'><SiVerizon className='mr-5' size={20} color={"lime"}/>Screen renters with credit reports, background checks, and applications</li>
                    <li className='flex'><SiVerizon className='mr-5' size={20} color={"lime"}/>Collect rent online for seamless and secure payments</li>
                </ul>
                <button className='btn block w-full bg-lime-500 border-none hover:bg-lime-400'>Learn More</button>


            </div>
            <div className="right shadow-xl p-10">
            <p className='text-3xl font-bold pt-5 text-black'>Landlords and Agents</p>
                <p className='text-lg py-3 font-semibold'>Manage your rentals with our free leasing tools.</p>
                <ul className='my-5'>
                    <li className='flex '><SiVerizon className='mr-5' size={20} color={"lime"}/>Reach over 13 million high-quality renters actively searching on our network</li>
                    <li className='flex '><SiVerizon className='mr-5' size={20} color={"lime"}/>Screen renters with credit reports, background checks, and applications</li>
                    <li className='flex '><SiVerizon className='mr-5' size={20} color={"lime"}/>Collect rent online for seamless and secure payments</li>
                </ul>
                <button className='btn block w-full bg-lime-500 border-none hover:bg-lime-400'>Learn More</button>
            </div>
        </div>

    </div>

    </>
  )
}

export default Home
