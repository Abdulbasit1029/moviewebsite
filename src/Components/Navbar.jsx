import React from 'react'
import Navitem from './Navitem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-amber-600 bg-amber-200 p-4 lg:text-lg  gap-4 lg:gap-12 justify-center my-8'>
        <Navitem title="Trending" param="fetchTrending" />
        <Navitem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
