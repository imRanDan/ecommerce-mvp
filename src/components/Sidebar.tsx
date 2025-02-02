import React from "react";
import { useState } from "react";
import { useEffect } from "react";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching product(s)", error);
      }
    };

    fetchCategories();
  }, []);

  return <div>Sidebar</div>;
};

export default Sidebar;
