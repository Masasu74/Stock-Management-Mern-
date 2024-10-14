import React from 'react'
import './ProductCard.css'
const ProductCard = ({product,onDelete}) => {
  return (
 <li  className="product-card" key={product._id}>
    <h2>{product.name}</h2>
    <div className='details'>
    <p> <b>Quantity:</b> {product.quantity}</p>
          <p> <b>Price:</b> ${product.price}</p>
          <p><b>Description:</b>  {product.description}</p>
    </div>
          <button onClick={()=>onDelete(product._id)}>Delete</button>
 </li>
  )
}

export default ProductCard