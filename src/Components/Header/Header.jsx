import React, { useEffect } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import { getTotal } from '../Features/Cart'

function Header() {

   const {cart,totalQunatiy}=useSelector(state =>state.allcarts)
  // console.log(cart.length)
   const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTotal)

  },[cart])
  return (
    <nav className='flex justify-around bg-neutral-900 p-2 '>
        <ul className='flex gap-4 text-xl text-white sm:text-2xl sm:gap-10'>
            
            <li><NavLink to="/"> All Products</NavLink></li>
            {/* <li><NavLink to="">About Us</NavLink></li> */}
           
        </ul>

        <ul className='flex gap-4 text-xl text-white sm:text-2xl sm:gap-10'>
        <li ><NavLink to="Cart"className='flex items-center justify-center' >Cart({cart.length})</NavLink></li>
        
        <li><NavLink to="Contact">Sign In</NavLink></li>
        
        </ul>
    </nav>
    
  )
}

export default Header
