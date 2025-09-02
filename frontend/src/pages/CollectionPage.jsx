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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Product A", price: 120, image: "http://picsum.photos/500/500?random=1" },
        { id: 2, name: "Product B", price: 75, image: "http://picsum.photos/500/500?random=2" },
        { id: 3, name: "Product C", price: 200, image: "http://picsum.photos/500/500?random=3" },
        { id: 4, name: "Product D", price: 150, image: "http://picsum.photos/500/500?random=4" },
        { id: 5, name: "Product E", price: 99, image: "http://picsum.photos/500/500?random=5" },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Sidebar - Filters */}
      <div
        ref={SidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 lg:relative lg:translate-x-0 z-50
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <FilterSideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold uppercase">All Collections</h2>
          <SortOption />
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
