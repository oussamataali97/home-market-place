import React from 'react'
import {useEffect,useState} from 'react'
import {collection,getDocs,limit,where,query,orderBy,startAfter} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import { useParams } from 'react-router-dom'
import { Triangle } from  'react-loader-spinner'
import {MdError} from 'react-icons/md'
import ListingItems from '../components/ListingItems'


function Offers() {
  const [listing,setListing]=useState(null)
  const [loading,setLoading]=useState(true)
  const params=useParams()
  useEffect(()=>{

    
    const fetchListing= async()=>{
 

        try {
          const listingRef = collection(db, 'listings');

          const q = query(listingRef
          , where("offer", "==",true)
          ,orderBy('timestamp','desc' )
          ,limit(10));
    
          const querySnap = await getDocs(q);
    
        let listings =[]
    
          querySnap.forEach((doc) => {

            return listings.push({
              id:doc.id,
              data:doc.data(),
            })
            });
            setListing(listings)
            setLoading(false)


        }
        catch (error) {
          toast.error('Could not fetch Listning')
        }

    }
    
    fetchListing()
  },[])

  return (
    <div className='max-w-7xl mx-auto'>
      <header>
      <p className='text-2xl md:text-5xl font-bold m-5'>
      Offers
      
      </p>
      </header>

    {loading ? <p className='flex items-center justify-center h-screen pb-32'>
    <Triangle
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
          </p> : listing && listing.length > 0 ? 
  <>
    <main className='max-w-lg mx-auto md:max-w-5xl md:mx-0'>
      {listing.map((list)=>(
        <ListingItems listing={list.data} id={list.id} key={list.id}/>
      ))}
    </main> 
  </>
  :
  <div className='font-semibold text-xl flex items-center'><MdError size={30} className='text-lime-500 mr-3'/>There are no current offers {params.categoryName}</div>  
  }
    </div>
  )
}

export default Offers
