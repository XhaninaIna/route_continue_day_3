import React from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
export default function Products({ id, name, description, price, color }) {
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <p className="product-id">Id: {id}</p>
      <h2 className="product-name">Name:{name}</h2>
      <p className="product-description">Description:{description}</p>
      <p className="product-price">Price:{price}</p>
      <p className="product-color">Color: {color}</p>
      <button
        className="product-button"
        onClick={() =>
          navigate(`/store/${name}`, {
            state: { id, description, price, path: `/store/${name}`,color },
          })
        }
      >
        Show More
      </button>
    </div>
  );
}
