import React from "react";
import "./DeleteItem.css";

const DeleteItem = ({ id, onDelete }) => {
  return (
    <button className="delete-button" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default DeleteItem;
