import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct, removeSelectedProduct } from '../redux'

function ProductDetail() {
  const {productId} = useParams()
  
  const product = useSelector(state => state.products)
  const {title, image, category, description, price} = product
  const dispatch = useDispatch()
  
  const fetchProductDetails = async(id) => {
    await axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
      dispatch(selectedProduct(response.data))
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  useEffect(()=>{
    if(productId && productId !== ""){
      fetchProductDetails(productId)
    }
    
  },[productId])

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail