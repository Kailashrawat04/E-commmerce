import React, { useRef, useState } from "react";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const products = [
    { id: 1, name: "Classic White Sneakers", price: 2499, image: { url: "https://via.placeholder.com/200x200?text=Sneakers", alt: "Classic White Sneakers" } },
    { id: 2, name: "Denim Jacket", price: 1799, image: { url: "https://via.placeholder.com/200x200?text=Jacket", alt: "Denim Jacket" } },
    { id: 3, name: "Leather Handbag", price: 3299, image: { url: "https://via.placeholder.com/200x200?text=Handbag", alt: "Leather Handbag" } },
    { id: 4, name: "Smart Watch", price: 4999, image: { url: "https://via.placeholder.com/200x200?text=Smart+Watch", alt: "Smart Watch" } },
    { id: 5, name: "Running Shoes", price: 2799, image: { url: "https://via.placeholder.com/200x200?text=Shoes", alt: "Running Shoes" } },
    { id: 6, name: "Sunglasses", price: 999, image: { url: "https://via.placeholder.com/200x200?text=Sunglasses", alt: "Sunglasses" } },
    { id: 7, name: "Backpack", price: 1499, image: { url: "https://via.placeholder.com/200x200?text=Backpack", alt: "Backpack" } },
    { id: 8, name: "Casual Shirt", price: 1299, image: { url: "https://via.placeholder.com/200x200?text=Shirt", alt: "Casual Shirt" } }
  ];

  // Drag / Touch Handlers
  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const startTouch = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDrag = () => setIsDragging(false);

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Arrow Navigation
  const scrollByAmount = (amount) => {
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden select-none relative">
      <div className="container mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Explore New Arrivals</h2>
        <p className="text-gray-600 mb-4 text-lg">
          Discover the latest trends in fashion. Stay ahead with our new arrivals that combine style and comfort.
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => scrollByAmount(-300)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        ◀
      </button>
      <button
        onClick={() => scrollByAmount(300)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        ▶
      </button>

      {/* Product Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar px-4 cursor-grab active:cursor-grabbing"
        onMouseDown={startDrag}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
        onMouseMove={onDrag}
        onTouchStart={startTouch}
        onTouchEnd={stopDrag}
        onTouchMove={onTouchMove}
        style={{ WebkitOverflowScrolling: "touch" }}
        role="list"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] bg-white rounded-2xl shadow-md flex-shrink-0"
            role="listitem"
          >
            <img
              src={product.image.url}
              alt={product.image.alt}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">₹{product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
