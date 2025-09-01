import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContents = () => {
  const cartProducts =[{
    productId:1,
    name:"T-shirt",
    size:"L",
    color:"Red",
    price:100,
    quantity:1,
    image:"/path/to/image.jpg",
  },
  {
    productId:2,
    name:"Jeans",
    size:"M",
    color:"Blue",
    price:200,
    quantity:2,
    image:"https://imgs.search.brave.com/KINm7zAaPfQG5UbK70NZTODRB2WOjsjnl0H0o_oCL38/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQxNTIyNDE2L3Iv/aWwvOGFmZDRkLzY1/ODYwMTI1NDEvaWxf/MzAweDMwMC42NTg2/MDEyNTQxX29qaGsu/anBn",
  },
];
  return (
    <div>
      {cartProducts.map((products, index) => (
        <div key={index} className='flex items-start justify-between py-4 border-b'>
          <div className='flex items-start'>
            <img src={products.image} alt={products.name} className='w-20 h-20 object-cover rounded mr-4' />
            <div>
              <h3>{products.name}</h3>
              <p className='text-sm text-gray-600'>
                Size: {products.size} | Color: {products.color}
              </p>
              <div className='flex items-center mt-2'>
                <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                <span className='mx-4'>{products.quantity}</span>
                <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
              </div>
            </div>
          </div>
          <div>
            <p>
              ${products.price.toLocaleString()}
            </p>
            <button >
              <RiDeleteBin3Line className='text-red-500 hover:text-red-700' size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents