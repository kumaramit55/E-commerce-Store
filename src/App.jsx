
import './App.css'

import { Route, BrowserRouter,Routes} from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'
import Home from './Components/Home/Home'
import Product from './Components/Product/Product'
import Cart from './Components/Cart/Cart'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import { DataContextProvider } from './Components/Context/DataContex.js'
import  {products} from './Components/ProductData/ProductData.js'
import { useState } from 'react'
import Detail from './Components/ProductDetail/Detail.jsx'




export default function App() {

  const [data,setData]=useState(products)

  return (
    <BrowserRouter>
    <DataContextProvider value={data} >
    <Routes>
      <Route path='/' element={<LayOut/>}>
       
        <Route path='' element={<Product />}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='Contact' element={<Contact/>}/>
       
        <Route path='Product/:ProductId' element={<Detail/>}/>
      </Route>


    </Routes>
    </DataContextProvider>
    
    
    </BrowserRouter>
   
   

    
  

  )
}