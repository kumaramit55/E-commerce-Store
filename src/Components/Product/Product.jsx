import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import useData from '../Context/DataContex'
import { useSelector,useDispatch, } from 'react-redux'
import { addToCart } from '../Features/Cart'


function Product() {
  const {ProductId}=useParams()
  const data=useData()
  const dispatch=useDispatch()
  
  return (
    <div className='grid grid-cols-1 gap-20 bg-gray-900 p-5 sm:grid-cols-2 '>
      {
        data.map((product)=>(
          <NavLink to={`/Product/${product.id}`} key={product.id} >

            <div className='border-2 p-10 flex justify-around  rounded-lg bg-white text-black'>
              <div className='w-1/3'><img src={product.image} alt=""  style={{width:200, height:200}}/></div>
              <div className='w-2/5'>
                <div className=''>
                  <h1 className='text-xl font-medium text-black'>{product.title}</h1>
                  <div className='flex justify-between mt-4 '>
                    <h1 className='text-xl text-blue-600 font-extrabold'>${product.price}</h1>
                    <h2 className='text-xl text-blue-600 font-medium'>In Stock</h2>

                  </div>
                </div>
                <hr  className='w-full mx-auto h-1 bg-black mt-4 rounded-lg'/>
                <div className='mt-4'>
                 <NavLink to="#"> <button className='bg-blue-600 rounded-md p-3 text-xl text-white' onClick={()=>dispatch(addToCart(product))}>
                    Add To Cart
                  </button> </NavLink>
                </div>
              </div>
            </div>

  
            



 



          
          </NavLink>
        ))
      }


    </div>

  )
}

export default Product