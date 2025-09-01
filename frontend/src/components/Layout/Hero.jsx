import React from 'react'
import hero from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";




const Hero = () => {
  return (
   <section className="relative">
    <img src={hero} alt="Hero image"
      className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover z-0"
    
    />
     {/* Overlay Content */} 
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <div className="text-center text-white p-6 pointer-events-auto">
        <h1 className="text-4xl md:text-9xl  font-bold tracking-tighter uppercase mb-4">
          VACATION <br/> READY
        </h1>
        <p className="text-white text-base md:text-lg max-w-xl mb-6">
          Explore our vacation-ready outfits with fast worldwide shipping.
        </p>
        <Link
          to="#"
          className="bg-white text-gray-900 px-6 py-2 text-lg  rounded-sm pointer-events-auto"
        >
          Shop Now
        </Link>
        </div>
      </div>
   </section>
  )
}

export default Hero