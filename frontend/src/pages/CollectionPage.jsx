import React, { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../components/Products/FilterSideBar";
import SortOption from "../components/Products/SortOption";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const SidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (SidebarRef.current && !SidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const fetchProducts = async () => {
        const data = [
          {
            id: 1,
            name: "Product A",
            price: 120,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            name: "Product B",
            price: 75,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            name: "Product C",
            price: 200,
            image: "https://via.placeholder.com/150",
          },
        ];
        setProducts(data);
      };

      fetchProducts();
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filters button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Sidebar - Filters */}
      <div
        ref={SidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FilterSideBar />
      </div>
      <div className="flex grow p-4 ">
        <h2 className="text-2xl uppercase ">All collection </h2>
        {/* Sort Option*/}
        <SortOption />

        
        {/* Products Grid */}
        <ProductGrid products={products} />

      </div>
    </div>
  );
};

export default CollectionPage;
