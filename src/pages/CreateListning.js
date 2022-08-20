import React from 'react'
import {useState,useRef,useEffect} from 'react'
import{useNavigate} from 'react-router-dom'
import { ThreeDots } from  'react-loader-spinner'
import {getAuth,onAuthStateChanged} from 'firebase/auth'

function CreateListning() {
    const [loading,setLoading]=useState(true)
   const [geoCoding,setGeoCoding]=useState(true)
    const [formData,setFormData]=useState({
        type:'',
        name:'',
        bedrooms:2,
        bathrooms:2,
        parking:null,
        offer:null,
        adresse:'',
        regularPrice:200,
        description:'',
        discountedPrice:150,
        furnished:null,
        images:{},
        latitude:0,
        longitude:0,

    })
    const {type,name,description,bedrooms,bathrooms,parking,offer,adresse,regularPrice,discountedPrice,furnished,images,latitude,longitude} =formData
    const auth=getAuth();
    const navigate=useNavigate();

    const isMounted=useRef(true)

    useEffect(()=>{

        if(isMounted){
          onAuthStateChanged(auth,(user)=>{
            if(user){
              setFormData({...formData,userRef: user.uid})
              setLoading(false)

            }else {
              navigate('/sign-in')
            }
          })

        }

        return ()=>{
          isMounted.current=false
        }

    },[isMounted])


    const onMutate=(e)=>{

      let boolean = null
      if(e.target.value === 'true'){
        boolean=true
       
      } 
      if(e.target.value === 'false'){
        boolean=false
      


      } 

      


      //files
      if(e.target.files){
        setFormData((prevState)=>({
          ...prevState,
          images: e.target.files,
        }))
      }

      //text,input
      if(!e.target.files){
        setFormData((prevState)=>({
          ...prevState,
          [e.target.id]: boolean ?? e.target.value,
        }))
      }

    }

    const handleSubmit =(e)=>{
      e.preventDefault()
      console.log(formData)
    }

    if (loading){
      return  <p className='flex items-center justify-center h-screen pb-32'>
       <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
/>
 </p>


  }
  return (
    <div className='m-3 '>

     
      <p className='text-4xl font-bold  mt-5 ml-5'>Create Listning</p>
      <p className='font-light text-lg mt-2 ml-5'>Sell / Rent </p>


        <form action="" onSubmit={handleSubmit} className='space-y-3 shadow-lg md:w-[60%] lg:w-1/2 mx-auto p-2 mb-5  '>
        <div className="buttonsNav flex justify-around ">
        <button type='button' className={type ==='sell' ? `btn btn-warning md:w-[46%] w-40 rounded-full` : `btn btn-outline btn-success  md:w-[46%] w-40 rounded-full` }  id="type" value="sell" onClick={onMutate} >Sell</button>
        <button  type='button' className={type ==='rent' ? `btn btn-warning md:w-[46%] w-40 rounded-full` : `btn btn-outline btn-error  md:w-[46%] w-40 rounded-full`}  id="type" value="rent" onClick={onMutate} >Rent</button>
      </div>
        <div className="form-control w-full">
  <label className="label">
    <span className="label-text font-bold">Name :</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered " id="name" value={name} onChange={onMutate}  />
 
</div>

<div className="form-control flex flex-row items-center">
  <label className="label ">
    <span className="label-text w-20 font-bold">Furnished : </span>
    </label>
    <div className="btns space-x-2">
      <button className={furnished ? ' btn btn-warning  btn-sm' : ' btn btn-success btn-sm btn-outline' }  id="furnished" value={true} onClick={onMutate}>Yes</button>
      <button className={!furnished && furnished !== null ?' btn btn-warning  btn-sm' : ' btn btn-error btn-sm btn-outline'} id="furnished" value={false} onClick={onMutate}>No</button>

    </div>
  
</div>

<div className="form-control flex flex-row items-center">
  <label className="label ">
    <span className="label-text w-20 font-bold">Offer : </span>
    </label>
    <div className="btns space-x-2">
      <button className={offer ? ' btn btn-warning  btn-sm  ' : ' btn btn-success  btn-sm btn-outline' } id="offer" value={true} onClick={onMutate}>Yes</button>
      <button className={!offer && offer !== null ?' btn btn-warning  btn-sm' : ' btn btn-error btn-sm btn-outline'} id="offer" value={false} onClick={onMutate}>No</button>

    </div>
  
</div>

{offer && (
   <div className="form-control w-48">
   <label className="label">
     <span className="label-text font-bold">Discounted Price :</span>
   </label>
   <input type="number" placeholder="Type here"  className="input input-bordered " required={offer} id="discountedPrice" value={discountedPrice} onChange={onMutate}/>
  
 </div>
)}


<div className="form-control w-full">
  <label className="label">
    <span className="label-text font-bold">Adresse :</span>
  </label>
  <textarea class="textarea textarea-bordered h-24" placeholder="Adress..." id="adresse" value={adresse} onChange={onMutate}></textarea>
 
</div>


<div className="form-control flex flex-row items-center">
  <label className="label ">
    <span className="label-text font-bold w-16">Parking : </span>
    </label>
    <div className="btns space-x-2">
      <button className={parking ? ' btn btn-warning  btn-sm' : ' btn btn-success btn-sm btn-outline' } id="parking" value={true} onClick={onMutate}>Yes</button>
      <button className={!parking && parking !== null ?' btn btn-warning  btn-sm' : ' btn btn-error btn-sm btn-outline'} id="parking" value={false} onClick={onMutate}>No</button>

    </div>
  
</div>


<div className="form-control w-48">
  <label className="label">
    <span className="label-text font-bold">Regular Price :</span>
  </label>
  <div className="text flex space-x-2 items-center">
  <input type="text" placeholder="Type here" className="input input-bordered " id="regularPrice" value={regularPrice} onChange={onMutate}/>
    {type ==='rent' && <p className='w-full'>$/Month</p>}
  </div>

</div>

<div className="form-control w-full">
  <label className="label">
    <span className="label-text font-bold">Description :</span>
  </label>
  <textarea class="textarea textarea-bordered h-24" placeholder="Description..." id="description" value={description} onChange={onMutate}></textarea>
 
</div>



<div className="rooms w-full flex justify-between">
<div className="form-control w-[10.5rem]">
  <label className="label">
    <span className="label-text font-bold">Beedrooms :</span>
  </label>
  <input type="number" placeholder="Type here" className="input input-bordered "  id="bedrooms" value={bedrooms} onChange={onMutate} />
 
</div>

<div className="form-control w-[10.5rem]">
  <label className="label">
    <span className="label-text font-bold">Bathrooms :</span>
  </label>
  <input type="number" placeholder="Type here" className="input input-bordered " id="bathrooms" value={bathrooms} onChange={onMutate} />
 
</div>

</div>

<div className="maps w-full flex justify-between">
<div className="form-control w-[10.5rem]">
  <label className="label">
    <span className="label-text font-bold">Latitude :</span>
  </label>
  <input type="number" placeholder="Type here" className="input input-bordered "  id="latitude" value={latitude} onChange={onMutate} />
 
</div>

<div className="form-control w-[10.5rem]">
  <label className="label">
    <span className="label-text font-bold">Longuitude :</span>
  </label>
  <input type="number" placeholder="Type here" className="input input-bordered " id="longitude" value={longitude} onChange={onMutate} />
 
</div>

</div>

<div className="form-control w-full">
  <label className="label flex flex-col justify-start items-start">
    <span className="label-text font-bold">Images :</span>
    <span className='font-light text-sm'>The first image will be the cover (max 6) </span>
  </label>
  <input type="file" className=" bg-gray-50 rounded-full p-1" id="images" max='6' accept='.jpg,.jpeg.png' multiple  onChange={onMutate}  />
 
</div>



<button className='btn btn-success mt-5 w-full '>Create Listning</button>

        </form>
    </div>
  )
}

export default CreateListning
