import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg text-gray-600">{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
    </div>
  );
}

export default ProductPage;
