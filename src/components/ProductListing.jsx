import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch } from 'react-redux'
import { setProduct } from '../redux'
import axios from 'axios'

function ProductListing() {
  const dispatch = useDispatch()
  
  const fetchUser = async () => {
    await axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response.data)
      dispatch(setProduct(response.data))
    })
    .catch(error => {
        console.log("Error ",error)
    })
  } 
  
  useEffect(() => {
   fetchUser()
  },[])

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}
 
export default ProductListing

