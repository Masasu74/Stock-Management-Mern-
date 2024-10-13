import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
const View = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
  const fetchProducts=async()=>{
    const response=await fetch('api/products')
    const json=await response.json()

    if(response.ok){
      setProducts(json)
    }
  }
    fetchProducts()
},[])

  return (
    <div>
    {/* <h1>Product List</h1> */}
    <ul className="products">
      {products&&products.map(product => (
        <ProductCard key={product._id} product={product}/>
      ))}
    </ul>
  </div>
  )
}

export default View