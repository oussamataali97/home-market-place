import React from 'react'
import img1 from '../assets/jpg/maroc.jpg'
import img2 from '../assets/jpg/paris.jpg'
import img3 from '../assets/jpg/berlin.jpg'
import img4 from '../assets/jpg/roma.jpg'


function Home() {
  return (
    <div className='text-center space-y-5 p-5 '>
        <p className='text-4xl font-bold mt-5  '>Explore our most popular cities</p>
        <p className='font-light text-lg'>See what these cities have to offer and rent the perfect place</p>
      <div className="img-card flex-col md:flex-row flex gap-5	 ">
        
            <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={img1} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">Ouarzezate</h2>
                <p>Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and</p>
                
            </div>
            </div>
        
        
                    <div className="card w-96  bg-base-100 shadow-xl">
            <figure><img src={img2} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Paris</h2>
                <p>Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic</p>
                
            </div>
            </div>
      
                    <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img3} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Berlin</h2>
                <p>Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War,</p>
                
            </div>
            </div>
        
                    <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img4} alt="Shoes"  /></figure>
            <div className="card-body ">
                <h2 className="card-title text-center">Rome</h2>
                <p>Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale</p>
                
            </div>
            </div>
        
       

      </div>
    </div>
  )
}

export default Home
