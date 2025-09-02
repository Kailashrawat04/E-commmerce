import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Bottom wear", "Top wear"];

  const colors = [
    "Red", "Blue", "Green", "Black", "White",
    "Yellow", "Purple", "Orange", "Pink", "Brown", "Gray",
    "Beige", "Lime", "Cyan", "Magenta", "Maroon", "Navy"
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton", "Polyester", "Wool", "Silk", "Denim",
    "Leather", "Linen", "Rayon", "Spandex", "Nylon", "Acrylic"
  ];

  const brands = [
    "H&M", "Zara", "Uniqlo", "Forever 21", "Mango",
    "Levi's", "Gap", "American Eagle", "Abercrombie & Fitch",
    "Hollister", "Aeropostale", "Topshop", "Urban Outfitters",
    "Shein", "Boohoo", "PrettyLittleThing", "ASOS"
  ];

  const genders = ["Male", "Female"];

  // Sync filters with URL params
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 100,
    });
    setPriceRange([
      params.minPrice ? Number(params.minPrice) : 0,
      params.maxPrice ? Number(params.maxPrice) : 100,
    ]);
  }, [searchParams]);

  // Update filters and URL params
  const updateFilter = (key, value) => {
    let updatedFilters = { ...filters, [key]: value };

    if (Array.isArray(value) && value.length === 0) {
      delete updatedFilters[key];
    }

    setFilters(updatedFilters);

    const params = new URLSearchParams();
    Object.entries(updatedFilters).forEach(([k, v]) => {
      if (Array.isArray(v)) {
        if (v.length > 0) params.set(k, v.join(","));
      } else if (v) {
        params.set(k, v.toString());
      }
    });
    setSearchParams(params);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-medium text-gray-800 mb-4">Filters</h2>

      {/* Category filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              checked={filters.category === category}
              onChange={() => updateFilter("category", category)}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              checked={filters.gender === gender}
              onChange={() => updateFilter("gender", gender)}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => updateFilter("color", color)}
              className={`w-8 h-8 rounded-full border-2 cursor-pointer transition hover:scale-105 ${
                filters.color === color ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              checked={filters.size.includes(size)}
              onChange={(e) =>
                updateFilter(
                  "size",
                  e.target.checked
                    ? [...filters.size, size]
                    : filters.size.filter((s) => s !== size)
                )
              }
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              checked={filters.material.includes(material)}
              onChange={(e) =>
                updateFilter(
                  "material",
                  e.target.checked
                    ? [...filters.material, material]
                    : filters.material.filter((m) => m !== material)
                )
              }
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              checked={filters.brand.includes(brand)}
              onChange={(e) =>
                updateFilter(
                  "brand",
                  e.target.checked
                    ? [...filters.brand, brand]
                    : filters.brand.filter((b) => b !== brand)
                )
              }
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">Price Range</label>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange[1]}
          onChange={(e) => {
            const newMax = Number(e.target.value);
            setPriceRange([0, newMax]);
            updateFilter("maxPrice", newMax);
          }}
          className="w-full bg-gray-300 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
