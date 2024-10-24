import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Products from "../components/products/Products";
import ProductFilter from "../components/products/productFilter";
import "./storepage.css";

const productData = [
  {
    id: 1,
    name: "Red T-Shirt",
    description: "A comfortable red t-shirt made from 100% cotton.",
    price: "$34",
    color: "red",
  },
  {
    id: 2,
    name: "Blue Jeans",
    description: "Classic blue denim jeans with a relaxed fit.",
    price: "$50",
    color: "blue",
  },
  {
    id: 3,
    name: "Red Sneakers",
    description: "Stylish red sneakers perfect for everyday wear.",
    price: "$98",
    color: "red",
  },
  {
    id: 4,
    name: "Green Hoodie",
    description: "Warm and cozy green hoodie for chilly days.",
    price: "$45",
    color: "green",
  },
  {
    id: 5,
    name: "Black Backpack",
    description: "Durable black backpack with multiple compartments.",
    price: "$60",
    color: "black",
  },
  {
    id: 6,
    name: "White Cap",
    description: "Classic white cap with adjustable strap.",
    price: "$25",
    color: "white",
  },
];

export default function StorePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // merr ngjyren dhe sort nga url
  const queryColor = searchParams.get("color") || "";
  const querySort = searchParams.get("sort") || "";

  useEffect(() => {
    if (!user) {
      if (!location.state && !queryColor && !querySort) {
        navigate("/login");
      } else if (location.state) {
        setUser(location.state);
      }
    }
  }, [location, navigate, user, queryColor, querySort]);

  //filtrimi produkteve sipas query
  const filteredProducts = productData
    .filter((product) => {
      return queryColor ? product.color === queryColor : true;
    })
    .sort((a, b) => {
      if (!querySort) {
        return a.id - b.id;
      }
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));

      if (querySort === "asc") {
        return priceA - priceB;
      } else if (querySort === "desc") {
        return priceB - priceA;
      }
      return 0;
    });

  return (
    <div className="store-page">
      <button className="logout-button" onClick={() => navigate("/")}>
        Logout
      </button>
      <ProductFilter />
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Products
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            color={product.color}
          />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
