import React from 'react'
import menscollection from '../../assets/mens-collection.webp'
import womenscollection from '../../assets/womens-collection.webp'
import { Link } from 'react-router-dom'

const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 md:px-8 lg:px-o'>
      <div className='container mx-auto flex flex-col md:flex-row gap-8'>
        {/*womens collection*/}

        <div className='relative flex-1 group'>
          <img src={womenscollection} alt='womens collection'
           className='w-full h-[700px] object-cover'/>
           <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
            <h2 className='text-2xl font-bold text-gray-900 mb-3'>
              Women's Collection
            </h2>
            <Link to='/collections/all?gender=womens' className=' text-gray-800 underline'>
              Shop Now
            </Link>

           </div>
          </div>
              {/* Men collection*/}
              <div className='relative flex-1 group'>
          <img src={menscollection} alt='mens collection'
           className='w-full h-[700px] object-cover'/>
           <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
            <h2 className='text-2xl font-bold text-gray-900 mb-3'>
              men's Collection
            </h2>
            <Link to='/collections/all?gender=mens' className=' text-gray-800 underline'>
              Shop Now
            </Link>

           </div>
          </div>
           </div>

    </section>
  )
}

export default GenderCollectionSection