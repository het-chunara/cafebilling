import React, { useState } from "react";
import "./Menu.css";

const Menu = ({ items, onDelete, onEdit, onAddToTransaction }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToTransaction = (item) => {
    onAddToTransaction(item);
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <div className="menu">
      <h1>Menu</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {showSuccessMessage && (
        <div className="success-message">Successfully added to transaction!</div>
      )}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Brand: {item.brandName}</p>
              <p>
                Cost Price: ${item.costPrice ? item.costPrice.toFixed(2) : ""}
              </p>
              <p>
                Sell Price: ${item.sellPrice ? item.sellPrice.toFixed(2) : ""}
              </p>
              <div className="edit-button">
                <button onClick={() => onEdit(item)} className="color-edit">
                  Edit
                </button>
                <button className="delete" onClick={() => onDelete(item.id)}>
                  Delete
                </button>
                <button onClick={() => handleAddToTransaction(item)}>
                  Add to Transaction
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
