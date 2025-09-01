import React from 'react'
import Hero from '../components/Layout/Hero.jsx'
import GenderCollectionSection from '../components/Products/GenderCollectionSection.jsx'
import NewArrivals from '../components/Products/NewArrivals.jsx'
import ProductDetails from '../components/Products/ProductDetails.jsx'



const Home = () => {
  return (
    <div>
    <Hero/>
    <GenderCollectionSection/>
    <NewArrivals/>
    {/*Best Sellers*/}
    <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>Best Sellers</h2>
    <ProductDetails/>
    </div>
  )
}

export default Home