import React from 'react'

function Button({title}) {
  return (
    
      <button className="btn  bg-lime-400 font-bold text-gray-900 hover:bg-lime-900 border-none rounded-xl  w-32">
      {title}
      </button>
   
  )
}

export default Button
