import React, { useState, useEffect } from "react";
import "./UpdateItem.css";

const UpdateItem = ({ item, onUpdate }) => {
  const [itemId, setItemId] = useState(item.id);
  const [name, setName] = useState(item.name);
  const [brandName, setBrandName] = useState(item.brandName);
  const [costPrice, setCostPrice] = useState(item.costPrice);
  const [sellPrice, setSellPrice] = useState(item.sellPrice);

  useEffect(() => {
    setItemId(item.id);
    setName(item.name);
    setBrandName(item.brandName);
    setCostPrice(item.costPrice); 
    setSellPrice(item.sellPrice);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...item,
      id: itemId,
      name,
      brandName,
      costPrice: parseFloat(costPrice),
      sellPrice: parseFloat(sellPrice),
    };
    onUpdate(updatedItem);
  };

  return (
    <div className="update-item">
      <h1>Update Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          disabled
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
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItem;
