import React from "react";
import "./Transaction.css";
import jsPDF from "jspdf"; // Import jsPDF library

const Transaction = ({
  items,
  discount,
  onDiscountChange,
  onGenerateBill,
  selectedCustomer,
  onCustomerChange,
}) => {
  const total = items.reduce((acc, item) => acc + item.sellPrice, 0);
  const discountedTotal = total * ((100 - discount) / 100);

  // Function to generate PDF
  const generatePDF = () => {
    if (!selectedCustomer) {
      alert("Please select a customer before generating the bill.");
      return;
    }

    if (isNaN(discount) || discount < 0 || discount > 100) {
      alert("Please enter a valid discount percentage (0-100).");
      return;
    }

    const doc = new jsPDF();

    doc.text("Transaction Bill", 20, 10);

    // Customer Info
    doc.text(`Customer: ${selectedCustomer}`, 20, 20);

    // Add items to the PDF
    let yPos = 30;
    items.forEach((item, index) => {
      yPos += 10;
      doc.text(`${index + 1}. Name: ${item.name}`, 20, yPos);
      yPos += 10;
      doc.text(`   Brand: ${item.brandName}`, 20, yPos);
      yPos += 10;
      doc.text(`   Sell Price: $${item.sellPrice.toFixed(2)}`, 20, yPos);
      yPos += 10;
      doc.text("----------------------------------------", 20, yPos);
    });

    // Total and Discounted Total
    yPos += 20;
    doc.text(`Total: $${total.toFixed(2)}`, 20, yPos);
    yPos += 10;
    doc.text(`Discounted Total: $${discountedTotal.toFixed(2)}`, 20, yPos);

    // Save the PDF
    doc.save("transaction_bill.pdf");
  };

  return (
    <div className="transaction">
      <h1>Transaction</h1>
      <div className="customer-selection">
        <label>Select Customer: </label>
        <select value={selectedCustomer} onChange={onCustomerChange}>
          <option value="">Select...</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
          <option value="Mike Johnson">Mike Johnson</option>
          <option value="Het Chunara">Het Chunara</option>
        </select>
      </div>
      <div className="discount">
        <label>Apply Discount (%): </label>
        <input
          type="number"
          value={discount}
          onChange={onDiscountChange}
          min="0"
          max="100"
        />
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>Brand: {item.brandName}</p>
              <p>Sell Price: ${item.sellPrice.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <h2>Total: ${total.toFixed(2)}</h2>
        <h2>Discounted Total: ${discountedTotal.toFixed(2)}</h2>
      </div>
      <div className="bill-button">
        <button onClick={generatePDF}>Generate Bill</button>
      </div>
    </div>
  );
};

export default Transaction;
