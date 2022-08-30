import React from 'react'
import {useState,useRef,useEffect} from 'react'
import{useNavigate} from 'react-router-dom'
import { ThreeDots } from  'react-loader-spinner'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import {toast } from 'react-toastify';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {db} from '../firebase.config'
import { addDoc,collection,serverTimestamp } from 'firebase/firestore'
import { uuidv4 } from '@firebase/util'

function CreateListning() {
    const [loading,setLoading]=useState(true)
    const [formData,setFormData]=useState({
      bathrooms:2,
      bedrooms:2,
      description:'',
      discountedPrice:150,
      furnished:null,
      images:{},
      location:'',
      name:'',
      offer:null,
      parking:null,
      regularPrice:200,
        type:'',
      
      
        
  

    })
    const {type,name,description,bedrooms,bathrooms,parking,offer,location,regularPrice,discountedPrice,furnished,images,latitude,longitude} =formData
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

    const handleSubmit =async(e)=>{
      e.preventDefault()
      if(discountedPrice>=regularPrice){
        setLoading(false)
        toast.error('the discounted price should be less than regular price !')
        return
      }


   
      if(images.length>6){
        setLoading(false)
        toast.error('Max 6 Images')
        return
      }

      const storeImage = async(image)=>{
        return new Promise((resolve,reject)=>{
          const storage=getStorage()
          const fileName=`${auth.currentUser.uid}-${image.name}-${uuidv4()}`
          const storageRef=ref(storage ,'images/'+ fileName)
          const uploadTask = uploadBytesResumable(storageRef,image);

          uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    reject(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      resolve(downloadURL); 
  
    });
  }
);

        })
      }

      const imgUrls = await Promise.all(
        [...images].map((image)=>storeImage(image))
       
        )

        const formDatacopy={
          ...formData,
          imgUrls,
          timestamp:serverTimestamp()
        }

        delete formDatacopy.images

        !formDatacopy.offer && delete formDatacopy.discountedPrice

        const docRef=await addDoc(collection(db,'listings'),formDatacopy)
        setLoading(false)
        toast.success('Listning Saved !')
        navigate(`/category/${formDatacopy.type}/${docRef.id}`)
       
    }





    if (loading){
      return  <h1 className='flex items-center justify-center h-screen pb-32'>
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
 </h1>


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
  <input type="text" placeholder="Type here" className="input input-bordered " id="name" value={name} required  onChange={onMutate}  />
 
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
   <input type="number" placeholder="Type here"  className="input input-bordered " required={offer} id="discountedPrice" value={discountedPrice}  onChange={onMutate}/>
  
 </div>
)}


<div className="form-control w-full">
  <label className="label">
    <span className="label-text font-bold">Adresse :</span>
  </label>
  <textarea className="textarea textarea-bordered h-24" placeholder="Adress..." id="location" value={location} required  onChange={onMutate}></textarea>
 
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
  <input type="text" placeholder="Type here" className="input input-bordered " id="regularPrice" value={regularPrice} required  onChange={onMutate}/>
    {type ==='rent' && <p className='w-full'>$/Month</p>}
  </div>

</div>

<div className="form-control w-full">
  <label className="label">
    <span className="label-text font-bold">Description :</span>
  </label>
  <textarea className="textarea textarea-bordered h-24" placeholder="Description..." id="description" value={description} required  onChange={onMutate}></textarea>
 
</div>



<div className="rooms w-full flex justify-between">
<div className="form-control w-[10.5rem]">
  <label className="label">
    <span className="label-text font-bold">Beedrooms :</span>
  </label>
  <input type="number" placeholder="Type here" className="input input-bordered "  id="bedrooms" value={bedrooms} required  onChange={onMutate} />
 
</div>

<div className="form-control w-[10.5rem]">
  <label className="label">
    <span className="label-text font-bold">Bathrooms :</span>
  </label>
  <input type="number" placeholder="Type here" className="input input-bordered " id="bathrooms" value={bathrooms} required  onChange={onMutate} />
 
</div>

</div>


<div className="form-control w-full mb-5">
  <label className="label flex flex-col justify-start items-start">
    <span className="label-text font-bold">Images :</span>
    <span className='font-light text-sm'>The first image will be the cover (max 6) </span>
  </label>
  <input type="file" className=" bg-gray-50 rounded-full p-1 mb-7 " id="images" max='6' accept='.jpg,.jpeg.png' multiple   required  onChange={onMutate}  />
 
</div>



<button className='btn btn-success w-full '>Create Listning</button>

        </form>
    </div>
  )
}

export default CreateListning
