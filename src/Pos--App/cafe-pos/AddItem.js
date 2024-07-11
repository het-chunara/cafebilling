import React, { useState } from "react";
import "./AddItem.css";

const AddItem = ({ onAdd }) => {
  const [itemId, setItemId] = useState("");
  const [name, setName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [costPrice, setCostPrice] = useState(""); 
  const [sellPrice, setSellPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: itemId,
      name,
      brandName,
      costPrice: parseFloat(costPrice),
      sellPrice: parseFloat(sellPrice),
    };
    onAdd(newItem);
    setItemId("");
    setName("");
    setBrandName("");
    setCostPrice("");
    setSellPrice("");
  };

  return (
    <div className="add-item">
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Brand Name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cost Price"
          value={costPrice}
          onChange={(e) => setCostPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sell Price"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
