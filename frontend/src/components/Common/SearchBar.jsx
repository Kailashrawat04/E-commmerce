import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching Term:', searchTerm)
    setSearchTerm('') // Optional: clear input after search
    setIsOpen(false)
  }

  return (
    <div
      className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
        isOpen
          ? 'absolute top-0 left-0 w-full bg-white h-20 z-50'
          : 'w-auto'
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full px-4"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              aria-label="Search input"
              className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none w-full placeholder:text-gray-500"
            />
            {/* Search icon */}
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
          {/* Close icon */}
          <button
            type="button"
            aria-label="Close search"
            onClick={handleSearchToggle}
            className="ml-3 p-2 rounded-lg hover:bg-gray-100"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchToggle}
          aria-label="Open search"
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700" />
        </button>
      )}
    </div>
  )
}

export default SearchBar
