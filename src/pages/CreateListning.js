import React from 'react'
import {useState} from 'react'
function CreateListning() {
    const [geoCoding,setGeoCoding]=useState(true)
    const [formData,setFormData]=useState({
        type:'rent',
        name:'',
        bedrooms:2,
        bathrooms:2,
        parking:false,
        offer:false,
        adresse:'',
        regularPrice:200,
        discountedPrice:150,
        furnished:false,
        images:{},
        latitude:0,
        longitude:0,

    })
  return (
    <div>
      Create
    </div>
  )
}

export default CreateListning
