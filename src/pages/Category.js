import React from 'react'
import {useEffect,useState} from 'react'
import {collection,getDocs,limit,where,query,orderBy,startAfter} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import { useParams } from 'react-router-dom'
import { RotatingLines } from  'react-loader-spinner'
import {MdError} from 'react-icons/md'
import ListingItems from '../components/ListingItems'


function Category() {
  const [listing,setListing]=useState(null)
  const [loading,setLoading]=useState(true)
  const params=useParams()
  useEffect(()=>{

    
    const fetchListing= async()=>{
 

        try {
          const listingRef = collection(db, 'listings');

          const q = query(listingRef
          , where("type", "==",params.categoryName)
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
  },[params.categoryName])

  return (
    <div className='max-w-7xl mx-auto'>
      <header>
      <p className='text-2xl md:text-5xl font-bold m-5'>
      {params.categoryName === 'rent' ? 'Places for Rent' : ' Places for Sale'}
      <a href="" className=''></a>
      </p>
      </header>

    {loading ? <p className='flex items-center justify-center h-screen pb-32'>
    <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
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
  <div className='font-semibold text-xl flex items-center'><MdError size={30} className='text-lime-500 mr-3'/>There's no listings for {params.categoryName}</div>  
  }
    </div>
  )
}

export default Category
