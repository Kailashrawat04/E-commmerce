import React, { useState } from "react";
import { toast } from "sonner"; // Import Sonner

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState("/images/black1.jpg");
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const productData = {
    id: 1,
    name: "Slim-Fit Easy-Iron Shirt",
    price: 34.99,
    description:
      "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    colors: {
      black: ["/images/black1.jpg", "/images/black2.jpg", "/images/black3.jpg"],
      white: ["/images/white1.jpg", "/images/white2.jpg", "/images/white3.jpg"],
    },
    sizes: ["S", "M", "L", "XL"],
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImage(productData.colors[color][0]);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  const handleAddToCart = () => {
    const productToCart = {
      id: productData.id,
      name: productData.name,
      price: productData.price,
      color: selectedColor,
      size: selectedSize,
      quantity,
      image: selectedImage,
    };

    // Simulate adding to cart (you can replace this with Redux, Context API, or API call)
    console.log("Added to cart:", productToCart);

    // Show success toast
    toast.success(`${productData.name} added to cart!`, {
      description: `Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}`,
    });
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left - Thumbnails & Main Image */}
      <div className="flex">
        <div className="flex flex-col gap-3 mr-4">
          {productData.colors[selectedColor].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                selectedImage === img ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full max-w-md object-cover rounded-lg"
        />
      </div>

      {/* Right - Product Info */}
      <div>
        <h2 className="text-2xl font-semibold">{productData.name}</h2>
        <p className="text-lg font-medium my-2">${productData.price}</p>
        <p className="text-gray-600">{productData.description}</p>

        {/* Color Options */}
        <div className="mt-4">
          <h3 className="font-semibold mb-1">Color:</h3>
          <div className="flex gap-2">
            {Object.keys(productData.colors).map((color) => (
              <div
                key={color}
                className={`w-8 h-8 rounded-full border cursor-pointer ${
                  selectedColor === color ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Size Options */}
        <div className="mt-4">
          <h3 className="font-semibold mb-1">Size:</h3>
          <div className="flex gap-2">
            {productData.sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded ${
                  selectedSize === size ? "bg-black text-white" : "bg-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mt-4 flex items-center gap-2">
          <h3 className="font-semibold">Quantity:</h3>
          <button
            className="px-3 py-1 border rounded"
            onClick={() => handleQuantityChange("decrease")}
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button
            className="px-3 py-1 border rounded"
            onClick={() => handleQuantityChange("increase")}
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
