import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTotal, removeItem } from '../Features/Cart'
import { increaseItemQuantity, decreaseItemQuantity } from '../Features/Cart'


function Cart() {
  const dispatch = useDispatch()
  // dispatch(getTotal())

  const { cart, totalPrice, totalQunatiy } = useSelector(state => state.allcarts)
  
  useEffect(() => {
    dispatch(getTotal())

  }, [cart])
  // console.log(cart)
  // console.log(totalPrice)
  // console.log(totalQunatiy)
  return (
    <div className=' w-full gap-4  flex flex-col bg-gray-900 border-2 sm:flex-row'>
      <div className='flex flex-col gap-5 m-4 rounded-md '>
      {
        cart.map((item)=>(
          <>
          <div className='flex flex-col justify-around items-center h-auto w-full mx-auto p-6 bg-white rounded-xl  sm:flex-row '>
            <div className='w-1/2  flex justify-center sm:w-1/4'>
            <img src={item.image} alt="" style={{width:150, height:150}} />
            </div>
            <div className=' flex flex-col gap-4 w-3/4 p-1  border-brown-600'>
            <div>
            <h2 className='text-2xl font-medium'>{item.title}</h2>
            <h1 className='text-2xl font-medium text-yellow-700'>${item.price}</h1>
            </div>

            <div className='flex justify-around'>
              <div className='flex gap-2'>
              <button className='bg-blue-500 px-2  text-3xl text-white' onClick={()=>dispatch(decreaseItemQuantity(item.id))}>-</button>
              <input type="number" name="" id=""  className='border-2 px-1 text-xl border-black rounded-md w-1/4'
              value={item.quantity}
              onChange={()=>null}/>
              <button className='bg-blue-500 px-2  text-3xl text-white' onClick={()=>dispatch(increaseItemQuantity(item.id))}>+</button>
              </div>

              <div>
                <button className='bg-blue-600 p-2 rounded-md' onClick={()=>dispatch(removeItem(item))}>Remove</button>
              </div>
             
            </div>

           
            </div>
          </div>
          </>
           
         
        ))
      }

      </div>

      <div className='bg-white w-3/5 mx-auto  h-3/4 my-10  p-5 rounded-lg sm:w-2/5 sm:p-2 '>
        { 
        <>
        {/* total card */}
        <div className='flex flex-col gap-10 border-2 p-5 sm:p-2  '>
        <h2 className='text-xl  font-bold flex  justify-center'><span>Total Qunatity</span>:<span>{totalQunatiy} </span></h2>
        <h2 className='text-xl  font-bold flex   justify-center'><span>Total Price</span>:<span>${totalPrice} </span></h2>
        <button className='bg-blue-600 w-3/4 flex mx-auto text-white font-bold   justify-center p-2 text-xl rounded-md '>Order Now</button>
        
        </div>
        </>
        
          
        }
      </div>

      

    </div >

  )
}

export default Cart
