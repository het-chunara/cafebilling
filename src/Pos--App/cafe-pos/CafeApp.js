import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Menu from "./Menu";
import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";
import Transaction from "./Transaction";
import "./App1.css";

const CafeApp = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [discount, setDiscount] = useState();
  const [transactionItems, setTransactionItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setEditingItem(null);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleCustomerChange = (e) => {
    setSelectedCustomer(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(parseFloat(e.target.value));
  };

  const handleAddToTransaction = (item) => {
    setTransactionItems([...transactionItems, item]);
    navigate("/transaction");
  };

  const handleClearTransaction = () => {
    setTransactionItems([]);
    setDiscount(0);
  };

  const handleGenerateBill = () => {
    const total = transactionItems.reduce(
      (acc, item) => acc + item.sellPrice,
      0
    );
    const discountedTotal = total * ((100 - discount) / 100);
    alert(`Total: $${discountedTotal.toFixed(2)}`);
    handleClearTransaction();
  };

  return (
    <div className="app">
      <h1>Café POS System</h1>
      <div className="navbar">
        <nav>
          <Link to="/">Menu</Link>
          <Link to="/add">Add Item</Link>
          <Link to="/transaction">Transaction</Link>
        </nav>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Menu
              items={items}
              onDelete={handleDeleteItem}
              onEdit={handleEditItem}
              onAddToTransaction={handleAddToTransaction}
            />
          }
        />
        <Route path="/add" element={<AddItem onAdd={handleAddItem} />} />
        <Route
          path="/transaction"
          element={
            <Transaction
              items={transactionItems}
              discount={discount}
              onDiscountChange={handleDiscountChange}
              onGenerateBill={handleGenerateBill}
              selectedCustomer={selectedCustomer}
              onCustomerChange={handleCustomerChange}
            />
          }
        />
      </Routes>
      {editingItem && (
        <UpdateItem item={editingItem} onUpdate={handleUpdateItem} />
      )}
    </div>
    // </Router>
  );
};

export default CafeApp;
