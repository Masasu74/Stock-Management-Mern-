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
},[]);

async function handleDelete(productId){
  try{
    const response = await fetch(`api/products/${productId}`,{
      method:'DELETE',
    })
    if (response.ok) {
      // Remove product from state after successful delete
      setProducts(products.filter(product => product._id !== productId));
    } else {
      setError('Failed to delete product');
    }
  } catch (err) {
    setError('Failed to delete product');
  }
}

  return (
    <div>
    {/* <h1>Product List</h1> */}
    <ul className="products">
      {products&&products.map(product => (
        <ProductCard key={product._id} product={product} onDelete={handleDelete}/>
      ))}
    </ul>
  </div>
  )
}

export default View