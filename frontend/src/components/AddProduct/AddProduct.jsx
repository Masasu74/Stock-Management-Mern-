import React, { useState } from "react";
import "./AddProduct.css";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const product = { name, quantity, price, description };
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json;

    if (!response.ok) {
      setError(json.error);
    }

    if(response.ok){
      setName('')
      setQuantity('')
      setPrice('')
      setDescription('')
      setError(null)
      console.log("New Product added",json);
  }
  }
  return (
    <div className="add-product">
      <h3>Add a Product</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="label-input">
          <label>Product Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="label-input">
          <label>Product Quantity: </label>
          <input
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </div>
        <div className="label-input">
          <label>Product Price: </label>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="label-input">
          <label>Product Description: </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button>Add Product</button>
        {error && <div className="error">{error}</div>}

      </form>
    </div>
  );
};

export default AddProduct;
