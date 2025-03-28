import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductPage from "./ProductPage";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center">Perfume Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;