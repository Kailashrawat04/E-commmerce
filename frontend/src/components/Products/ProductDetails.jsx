import React, { useState } from "react";
import { toast } from "sonner"; 
import ProductGrid from "./ProductGrid";

const similarProduct = [
  { id: 1, name: "Casual Denim Jacket", price: 59.99, image: "http://picsum.photos/500/500?random=2" },
  { id: 2, name: "Casual Jacket", price: 59.99, image: "http://picsum.photos/500/500?random=3" },
  { id: 3, name: "e Denim Jacket", price: 59.99, image: "http://picsum.photos/500/500?random=4" },
  { id: 4, name: "Black Denim Jacket", price: 59.99, image: "http://picsum.photos/500/500?random=5" },
];

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
      "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back.",
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
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
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

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(
      (item) =>
        item.id === productToCart.id &&
        item.color === productToCart.color &&
        item.size === productToCart.size
    );

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push(productToCart);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`${productData.name} added to cart!`, {
      description: `Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}`,
    });
  };

  return (
    <div className="container mx-auto p-6">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Thumbnails & Main Image */}
        <div className="flex">
          <div className="flex flex-col gap-3 mr-4">
            {productData.colors[selectedColor].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                className={`w-16 h-16 object-cover rounded cursor-pointer border transition-transform hover:scale-105 ${
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
          <p className="text-gray-600 leading-relaxed">{productData.description}</p>

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

      {/* Similar Products Section (Full Width Below) */}
      <div className="mt-20">
        <h2 className="text-2xl text-center font-bold mb-4">You may also like</h2>
        <ProductGrid products={similarProduct} />
      </div>
    </div>
  );
};

export default ProductDetails;
