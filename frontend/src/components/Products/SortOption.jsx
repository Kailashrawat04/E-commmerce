import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SortOption = () => {
  const [searchParams, setSearchParams] = useSearchParams();


  const handleSortChange = (e) => {
    const sortBy= e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  
    

  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
       
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Default</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="name-asc">Name: A–Z</option>
        <option value="name-desc">Name: Z–A</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );
};

export default SortOption;
