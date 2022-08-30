import React from 'react'
import {Link} from 'react-router-dom'
import {ImLocation2} from 'react-icons/im'
import {BsCameraFill} from 'react-icons/bs'
import {MdBedroomParent,MdBathtub} from 'react-icons/md'
import {FcLike} from 'react-icons/fc'

function ListingItems({listing,id}) {
    

  return (
    <div className='p-5'>

      <Link to={`/category/${listing.type}/${id}`} className=" rounded-l-lg flex  justify-start gap-2 md:gap-7 shadow-lg relative ">
        <FcLike size={30} className='absolute top-0 right-0 m-2'/>
        <div className="img  relative">
        <img src={listing.imgUrls[0]} alt={listing.name} className='rounded-l-lg w-48 md:w-96 md:h-64 h-full ' />
        <p className='bg-lime-300  rounded-full px-2 absolute bottom-2 right-2 flex justify-center items-center'><BsCameraFill className='mr-1'/> {listing.imgUrls.length}</p>

        </div>

        <div className="description  flex md:flex-1 flex-col justify-between pb-4">
            <div className="top">
                <p className=' font-bold md:text-2xl text-lg text-lime-400'>${listing.offer ? listing.discountedPrice : listing.regularPrice} {listing.type == 'rent' ? ' /Month' : ''}</p>
                <p className='md:text-xl text-md font-semibold'>{listing.name }</p>
            </div>
                    
   

            <div className="flex flex-col  font-light md:text-xl">
              <div className="topp py-5 hidden md:block">
              <p className='font-normal text-gray-500'>{listing.description}</p>
<hr className='mt-4'/>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-8 divide-x">
              <p className='flex items-center   '><ImLocation2 className='mr-1 text-red-500'/>{listing.location}</p>
            <p className='flex items-center  '><MdBathtub className='mr-1 text-red-500'/>{listing.bathrooms > 1 ? `${listing.bathrooms} bathrooms` : `${listing.bathrooms} Bathroom`}</p>
            <p className='flex items-center   '><MdBedroomParent className='mr-1 text-red-500'/>{listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : `${listing.bedrooms} Bedroom`}</p>

              </div>  
      
            </div>

        </div>
       </Link>
      
       
     
    </div>
  )
}

export default ListingItems
