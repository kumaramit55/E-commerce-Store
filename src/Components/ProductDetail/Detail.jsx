import React from 'react'
import { useParams } from 'react-router-dom'
import useData from '../Context/DataContex'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Features/Cart'




function Detail() {
    const dispatch=useDispatch()
    // const [itemno,setitemNO]=useState("")
    const data=useData()
    const {ProductId}=useParams()
    

    const product=data.find((p)=> p.id == ProductId)
  return (
    <div>
        {
            <>
            <div className='flex flex-col items-center bg-gray-500 p-10 border-2 border-black  sm:flex-row sm:justify-around'>
                <div className='sm:w-2/5    '>
                <img src={product.image} alt=""  style={{width:300, height:300}} className='rounded-2xl'/>
                </div>
                <div className='text-white flex flex-col gap-3 m-2 sm:w-1/2 '>
                    <h2 className='text-2xl font-bold text-green-500'>{product.title}</h2>
                    <h1 className='text-2xl text-medium text-black'>Price:{product.price}</h1>
                    <p className='text-xl font-medium text-justify'>{product.description}</p>
                    <h2 className='text-xl text-yellow-400'>Rating:{product.rating.rate}</h2>
                    <h2 className='text-3xl font-medium'>{product.category}</h2>
                    <h2 className='text-2xl font-bold'>NumbrerOf Purchase:{product.rating.count}</h2>
                     <div className='flex gap-3'>
                    
                    <button className='text-xl bg-green-500 w-2/5 rounded-md p-2 sm:w-1/2'type="submit" onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
                    </div>
                </div>

                
               
            </div>

            
            
            </>
            
            
            
        }
        

    </div>
    
    
  )
}

export default Detail