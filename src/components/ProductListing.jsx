import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../redux'
import axios from 'axios'

function ProductListing() {

  const products = useSelector(state => state)
  const dispatch = useDispatch()
  
  const fetchUser = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch(error => {
        console.log("Error ",error)
    })
    dispatch(setProduct(response.data))
  } 
  
  useEffect(() => {
   fetchUser()
  },[])
  console.log("Products : ",products)
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}
 
export default ProductListing