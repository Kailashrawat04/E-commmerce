import React from 'react'
import { Link } from 'react-router-dom'
import { 
  HiOutlineUser, 
  HiOutlineShoppingBag, 
  HiOutlineBars3BottomRight 
} from 'react-icons/hi2'; 
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';


const Navbar = () => {
  return (
    <>
    <nav className=' container mx-auto flex items-center justify-between py-4 px-6' >
        {/* left -Logo */}
        <div>
            <Link to='/' className='text-2xl font-medium text-gray-800'>E-Shop
            </Link>
            </div>
            {/* center -Navigation links*/}
            <div className='hidden md:flex space-x-6'>
                <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase '>Men</Link>

                 <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase '>
                 Women</Link>

                  <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase '>
                  Bottom Wear 
                  </Link>

                   <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase '>
                   Top Wear </Link>
                </div>
                {/* right -Icons */}
                <div className='flex items-center space-x-4'>
                    <Link to='/profile' className='text-gray-700 hover:text-black text-sm font-medium uppercase '>
                     <HiOutlineUser className="h-6 w-6 text-gray-700" />
                     </Link>
                     <button className='relative hover:text-black'>
                        <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
                         <span className='absolute -top-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5'>1</span>
                     </button>
                     {/* Search bar */}
                     <SearchBar/>
                        <button className='md:hidden hover:text-black'>
                        <HiOutlineBars3BottomRight className="h-6 w-6 text-gray-700" />
                        </button>

                    </div>


        </nav>
    <CartDrawer/>
    
    </>
  )
}

export default Navbar